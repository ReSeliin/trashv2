const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== "227822994032951296") return message.channel.send("Bunu kullanmaya iznin yok.");
  if(!args[0]) return message.channel.send("**Please specify a new channel.**")

  let welcomes = JSON.parse(fs.readFileSync("./ayarlar/welcome_leave.json", "utf8"));

  welcomes[message.guild.id] = {
    welcomes: args[0]
  };

  fs.writeFile("./ayarlar/welcome_leave.json", JSON.stringify(welcomes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#0000000")
  .setTitle("Welcome/Leave Channel Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}