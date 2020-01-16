const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Küfür Engel için Doğru Kullanım: *küfür aç / küfür kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Küfür engel başarıyla açıldı! Artık küfürler silinecek.")
    
    db.set(`küfür_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Küfür engel kapatıldı! Bundan sonra küfürler serbest.")
    
    db.set(`küfür_${message.guild.id}`, "kapali")
  }
}