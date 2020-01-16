const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Reklam Engel için Doğru Kullanım: *reklam aç / *reklam kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Reklam Engel başarıyla açıldı! Artık reklamlar silinecek.")
    
    db.set(`reklam_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Reklam engel kapatıldı! Bundan sonra reklamlar serbest.")
    
    db.set(`reklam_${message.guild.id}`, "kapali")
  }
}