const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let suggestion = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("665587959071768577")
if(!suggestion) return message.channel.send(":x: Mesaj girmediniz")
  let embed = new Discord.RichEmbed()
    .setTitle("Bug Report !")
    .setThumbnail("https://i.ibb.co/nmNpVzz/error-vermek.png")
    .addField("Bug", suggestion)
    .addField("Bugu belirten kişi", `${user.tag} (${user.id})`)
    .addField("Belirtildiği Server", `${guild.name} (${guild.id})`)
    .setColor("#000000")

  message.channel.send("✅ **| Bugumu belirttiğin için sağol ^^ Yapımcım mesajını aldı ve en kısa süredi hatamı düzelticez**")
  channel.send(embed).then(i => i.react("⏳"))

}