const Discord = require('discord.js');

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('Oylama')
    .setColor('#0000000')
    .setTimestamp()
    .addField('how are you', 'hi')
    .addField('hello', 'havargi')
  message.channel.send(embed);
}