const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return message.channel.send('**Uyarıcağınız kişiyi etiketleyiniz**');
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Bunu yapmak için yeterli iznin yok!");
  if (user.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Uyarmaya çalıştığın kişinin yetkisi ya senden yüksek yada eşit yetkileriniz var.");

  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send('**Bir sebep belirtin**');

  let embed = new Discord.RichEmbed()
  .setTitle('Uyarı!')
  .setColor('#00000000')
  .addField('Uyarılan user', `${user}`, true)
  .addField('Uyaran yetkili', `${message.author}`, true)
  .addField('Uyarıldı kanal', message.channel, true)
  .addField('Sebep', reason)
  .setTimestamp();

  let reportschannel = message.guild.channels.find('name', '「📝」mod-log');
  if (!reportschannel) return message.channel.send('**There is no channel with the name `「📝」mod-log`**');

  reportschannel.send(embed);
  return;
}