
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let suggestion = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("665587959071768577")
if(!suggestion) return message.channel.send(":x: Mesaj girmediniz")
  let embed = new Discord.RichEmbed()
    .setTitle("Öneri ve İstek")
    .setThumbnail("https://www.snapsuggest.com/images/app-icon-512x512.png")
    .addField("Suggestion", suggestion)
    .addField("Suggested By", `${user.tag} (${user.id})`)
    .addField("Suggested in", `${guild.name} (${guild.id})`)
    .setColor("#000000")

  message.channel.send("✅ **| İstediğiniz komut server istek bölümüne yollandı size geri dönüş için sabırla bekleyiniz**")
  channel.send(embed).then(i => i.react("⏳"))

}