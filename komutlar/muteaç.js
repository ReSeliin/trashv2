const Discord = require('discord.js');
const ms = require("ms");
const fs = require('fs');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Bu komudu kullanmak için yeterli iznin yok");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if (!tomute) return message.reply("Kullanıcı bulunamadı.");
  if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Mutesini açmaya çalıştığınız kişi sizin yetkinizden büyük yada eşit yetkidesiniz");
  let muterole = message.guild.roles.find(`name`, "Muted");

  let embed = new Discord.RichEmbed()
      .setTitle('Birinin mutesi açıldı !!')
      .setColor('#0000000')
      .addField('Mutesi açılan user', `${tomute}`, true)
      .addField('Mutesini açan yetkili', `${message.author}`, true)
      .addField('Hangi kanalda mutesi açıldı', message.channel, true)
      .addField('Daha fazla bilgi:', '**Manual Unmute**', true)
      .setTimestamp();
  
  
    let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));

	  let logC = logging[message.guild.id].logging;
    let rChan = client.channels.get(logC);
  
    if (!rChan) return message.channel.send('**Burada bir log kanalı yok\nLog kanalı nasıl ayarlanır = *logs <log kanal id>**');
  
    await (tomute.removeRole(muterole.id));
    message.delete().catch(O_o=>{});
    rChan.send(embed);

}