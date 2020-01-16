const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Caps engel için doğru kullanım: *caps aç / *caps kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send('Caps engel başarılı bir şekilde açıldı :white_check_mark: Şimdi caps içeren mesajlar silinecek !!!')
    db.set(`caps_${message.guild.id}`, "acik")
    message.delete(2000)
  }
  if (args[0] === 'kapat'){
    message.channel.send("Caps engel başarılı bir şekilde kapatıldı :white_check_mark: Bundan sonra caps serbest !!!")
    
    db.set(`caps_${message.guild.id}`, "kapali")
  }
}