const Discord = require('discord.js');


exports.run = function(client, message) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu işlem için Yetkiniz yetmemektedir.**');

  message.guild.channels.map(m => m.delete());
  message.guild.createChannel('Yeni Sohbet', 'text').then(c => {
    c.send('**Başarıyla bütün kanalları sildim! Tekrar sunucu kurmak için *sunucukur yazabilirsin.**')
  })

};