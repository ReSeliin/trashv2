const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. 🚮`).then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('#080000')
    .setTimestamp()
    .addField('🌍 Eylem:', 'Sohbet silme')
    .addField('👨 Yetkili: ', message.author.username)
    .addField('🔥 Sonuç: ', `Başarılı`)
    .addField('📝 Kaç Adet', + messagecount)
    .setFooter(message.author.username)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));

})
}
