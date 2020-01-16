const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Şikayet etmek istediğiniz kişiyi etiketleyin !!!**');

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Bir sebep belirtiniz**');

  let embed = new Discord.RichEmbed()
  .setTitle('Bir şikayet geldi!')
  .setColor('#0000000')
  .addField('Şikayet eden user', `${user}`, true)
  .addField('Tarafından şikayet edildi', `${message.author}`, true)
  .addField('Şikayet edildiği kanal', message.channel, true)
  .addField('Sebep', reason)
  .setTimestamp();

  
  let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));

	let logC = logging[message.guild.id].logging;
  let rChan = client.channels.get(logC);
  
  if (!rChan) return message.channel.send('**Burada log kanalı yok**');

  rChan.send(embed);
  return;
}