const Discord = require('discord.js');

const para = [
  "85 Dolar Kazandın!",
  "10 Dolar Kazandın!",
  "Hiç Bir Şey Kazanamadın.",
  "1 Dolar Kazandın!",
  "120 Dolar Kazandın!",
  "250 Dolar Kazandın!",
  "800 Dolar Kazandın!",
  "950 Dolar Kazandın!",
  "1000 Dolar Kazandın!",
  "2500 Dolar Kazandın!",
  "1485 Dolar Kazandın!",
  "6500 Dolar Kazandın!",
  "3585 Dolar Kazandın!",
  "BİNGO! 100.000.000 Euro Kazandın!",
];

exports.run = function(client, message) {
//Komutun Kodları
const para1 = para[Math.floor(Math.random() * para.length)];
  message.channel.send(
  
  "**20 Dolar Para Yatırılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Kumar Oynanıyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Kumar Oynadın**')
    .setDescription('```Kumar Sonuçları```')
      .addField('**Kazanılan Para: **',para1)
    .setColor('GREEN')
    
    
    )
  })
};