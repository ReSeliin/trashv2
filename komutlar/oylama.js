const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const evet = "✅";
  const hayir = "❌";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "⚠️ | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!"
    );
  const msg = args.join(" ");
  if (!msg) return message.channel.send("**Oylamam için bir şey gir!**");
  message.delete();
  message.channel
    .send(
      new Discord.RichEmbed()
        .setTitle("Oylama")
        .setDescription(msg)
        .setColor("#080000")
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hayır Şeklinde Sorar :)
    });
  message.delete(2000)
};