const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    var options = {
        maxAge: 0
    };
    const useruser = "Oluşturan: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#080000")
        .setDescription(`:information_source:  Oluşturuluyor......`)
        .setTimestamp()
    message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("#080000")
        botembed.setDescription(`Buyrun Davet kodu ${usermade}. \n https://discord.gg/${i.code}`)
        botembed.setFooter(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed)
        })
    })
}