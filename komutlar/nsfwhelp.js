const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  let helpEmbed = new Discord.RichEmbed()
.setColor("#080000") 
.setTitle('NSFW Yardım || NSFW Komutlar') 
.addField("/nsfwass","Göt fotoğrafları atar.") 
.addField("/nsfwpussy","Am fotoğrafları atar.") 
.addField("/nsfwhentai","Hentai fotoları atar.") 
.addField("/nsfwgif","Porno gif atar.") 
.addField("/nsfwanal","Anal fotosu atar.") 
.setFooter("T R A S H BOT | NSFW Yardım komutları |Tüm hakları saklıdır (2019-2020)")
  
  message.channel.send(helpEmbed);
  
  message.delete(2000);
}