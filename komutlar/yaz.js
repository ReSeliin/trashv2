const Discord = require("discord.js");
const ayarlar = require("../ayarlar/ayar.json")

exports.run = async (bot, message, args) => {
  
  message.delete();
  if(message.author.id !== ayarlar.sahip) return message.channel.send("Komutu Kullanmak için izniniz bulunmamaktadır..");
  let botmessage = args.join(" ");
  if(!botmessage) return message.channel.send("Mesaj belirtmediniz.!")
  message.channel.send(botmessage);
}