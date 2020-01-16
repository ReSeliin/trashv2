const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require("../ayarlar/ayar.json")

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./ayarlar/prefixes.json", "utf8"));
  
  if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== ayarlar.sahip) return message.channel.send(":x: Komutu kullanabilmek için **Admin** Yetkisine sahip olmanız gerekmektedir.");
  if(!args[0]) return message.channel.send("**Please specify a new prefix.**");

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./ayarlar/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#00000")
  .setTitle("Prefix Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("#00000")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}