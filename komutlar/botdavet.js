const Discord = require('discord.js');

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle(`Davet ${client.user.tag}`)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor('#000000000')
    .setDescription(`Beni discord sunucuna eklediğin için teşekkür ederim **${message.author.username}**! \nUmarım başkalarıda eder \nŞimdi serverine gelebilirim **${(client.guilds.size) + 1}** tane serverde bulunuyorum! \n\nBuyur, haz cat! :cat2:`);
  
  message.channel.send(embed);
}