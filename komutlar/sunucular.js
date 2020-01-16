const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#000000')
      embed.setTitle('Bulunduğum Serverler')
      embed.setDescription(`Bulunduğum ve beni kullanan serverler **${bot.guilds.size}** kadar sunucu var ! (T R A S H Bot)`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}