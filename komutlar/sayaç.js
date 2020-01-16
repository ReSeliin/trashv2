const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let sayi = args[0];
  let kanal = message.mentions.channels.first();
  
  if (!sayi) return message.reply('Lütfen sayı belirtin!')
  if (!kanal) return message.reply('Lütfen kanal etiketleyin!')
  
  db.set(`sayac_${message.guild.id}`, sayi);
  db.set(`sayacK_${message.guild.id}`, kanal.id);
  
  message.channel.send(`Sayaç **${sayi}** Kanalı ${kanal} olarak ayarlandı!`)
}