const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const hayir = "🔥";
  const evet = "😮";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "⚠️ | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!"
    );
  const msg = args.join(" ");
  if (!msg)
  message.delete();
  message.channel
    .send(
      new Discord.RichEmbed()
        .setTitle("Clor Marketim")
        .setDescription('Fortnite ta olan bütün değerli skinlerin ucuz ve hesapların ucuz olduğu adres \n Clorusy Marketim Discord Adresi : \n https://discord.gg/z8CgXEM ')
        .setColor("#080000")
        .setFooter(
          message.author.tag + ("Güncel Fiyatlar,Güncel Servisler"),
          message.author.avatarURL
        )
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hayır Şeklinde Sorar :)
    });
};
