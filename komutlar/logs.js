const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require("../ayarlar/ayar.json")

module.exports.run = async (bot, message, args) => {

  let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));
  
  if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== ayarlar.sahip) return message.channel.send(":x: Admin yetkisine sahip olmanız gerekmektedir.");
  if(!args[0]) return message.channel.send("**Please specify a new auto-role role.**");

  logging[message.guild.id] = {
    logging: args[0]
  };

  fs.writeFile("./ayarlar/logging.json", JSON.stringify(logging), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Logging Channel Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}