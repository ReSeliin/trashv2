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
        .setTitle("Clor Marketim Servisler ve Ürünler")
        .setDescription('Servislerimiz : \n Glow Servisi 45 TL \n Minty Axe Servisi 120 TL \n Wonder Servisi 120 TL \n HONOR Guard 135 TL \n Psycho Bundle Servisi 100 TL \n Rogue Spider Knight + 2000 V-Bucks 240 TL \n Neo Versa + 2000 V-Bucks 90 TL \n GeForce Bundle 2000 V-Bucks + Counterattack Set 470 TL \n Hesap Satışlar Clorusy ile konuşunuz\n Arkadaşlarınızında bu servislerden yararlanmasını istiyorsanız : https://discord.gg/z8CgXEM')
        .setColor("#080000")
        .setFooter(
          message.author.tag + "Güncel Fiyatlar,Güncel Servisler",
          message.author.avatarURL
        )
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hayır Şeklinde Sorar :)
    });
};