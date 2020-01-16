const Discord = require('discord.js');
const ayarlar = require("../ayarlar/ayar.json")

exports.run = async (client, message, args) => {
  if (message.author.id !== ayarlar.sahip) return message.channel.send(":x: Bu komutu kullanmak için yetkiniz bulunmamaktadır.");


    message.channel.send('Yeniden Başlatılıyor...')
      .then(message => client.destroy())
      .then(() => client.login(ayarlar.token))
      .then(message.channel.send('Yeniden Başlatma Başarılı :white_check_mark:'));
}
