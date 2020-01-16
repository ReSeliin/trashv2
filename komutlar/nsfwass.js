const Discord = require('discord.js')
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
   let embed = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  }else{
       msg.channel.send({embed: {
color: Math.floor(Math.random() * (0x00000)),
description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil!')
}})
}
};