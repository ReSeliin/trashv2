const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RED')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠️ Uyarı ⚠️', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.unban(user);

  let embed = new Discord.RichEmbed()
    .setColor('#080000')
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${client.id}`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  
    let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));

	  let logC = logging[message.guild.id].logging;
    let rChan = client.channels.get(logC);
  
    if (!rChan) return message.channel.send('**Burada bir log kanalı yok\nLog kanalı nasıl ayarlanır = *logs <log kanal id>**');
  
    message.delete().catch(O_o=>{});
    rChan.send(embed);
};