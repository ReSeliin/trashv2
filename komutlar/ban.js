const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Banlicağın kişiyi etiketle !**');

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Banlayacağınız kişinin yetkisi sizden büyük yada eşit.");
  if (user.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Banlamaya çalıştığınız kişinin yetkisi sizden büyük yada eşit.");

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Bir sebep belirtin**');

  let embed = new Discord.RichEmbed()
  .setTitle('Bir kişi banlandı !')
  .setColor('#0000000')
  .addField('Banlanan User', `${user}`, true)
  .addField('Banlayan kişi', `${message.author}`, true)
  .addField('Banlandığı kanal', message.channel, true)
  .addField('Sebep', reason)
  .setTimestamp();

  await user.ban(reason);
  
  let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));

	let logC = logging[message.guild.id].logging;
  let rChan = client.channels.get(logC);
  
  if (!rChan) return message.channel.send('**Burada bir log kanalı yok\nLog kanalı nasıl ayarlanır = *logs <log kanal id>**');

  rChan.send(embed);
  return;
}