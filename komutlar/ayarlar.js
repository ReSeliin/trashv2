const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require("../ayarlar/ayar.json")

exports.run = (client, message) => {
  let prefixes = JSON.parse(fs.readFileSync("./ayarlar/prefixes.json", "utf8"));
  let welcomes = JSON.parse(fs.readFileSync("./ayarlar/welcome_leave.json", "utf8"));
  let autorole = JSON.parse(fs.readFileSync("./ayarlar/autorole.json", "utf8"));
  let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));
  
  let Prefix;
  if(!prefixes[message.guild.id]) { Prefix = `${ayarlar.prefix}`} else { Prefix = prefixes[message.guild.id].prefixes };

  let Autorole;
  if(!autorole[message.guild.id]) { Autorole = 'Ayarlanmamış' } else { Autorole = `<@&${autorole[message.guild.id].autorole}>` }
  
  let Welcome;
  if(!welcomes[message.guild.id]) { Welcome = 'Ayarlanmamış' } else { Welcome = `<#${welcomes[message.guild.id].welcomes}>` }
  
  let Logging;
  if(!logging[message.guild.id]) { Logging = 'Ayarlanmamış' } else { Logging = `<#${logging[message.guild.id].logging}>` }
  
  let setEmbed = new Discord.RichEmbed()
    .setTitle(`Settings for ${message.guild.name}`)
    .setThumbnail(message.guild.iconURL)
    .setColor('#0000000')
    .addField('Prefix', `\`${Prefix}\``)
    .addField('Giriş/Çıkış', Welcome)
    .addField('Log', Logging)
    .addField('Otorol', Autorole)
  
  message.channel.send(setEmbed)
}