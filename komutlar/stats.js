const Discord = require('discord.js');
const { version } = require('discord.js');
const fs = require('fs');
const si = require('systeminformation');
const commandsDir = "./komutlar"

exports.run = (client, message, args) => {
  fs.readdir(commandsDir, async (error, files) => {
    
    let totalSeconds = (Math.round(client.uptime / 1000));
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;  
    
    let uptime = `${days}:${hours}:${minutes}:${seconds}`;
    
    
    si.cpu(function(data) {
    
      const InfoEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.tag}`)
        .setThumbnail(`${client.user.avatarURL}`)
        .addField("Sürüm", "2.0.0", true)
        .addField("Komut Sayısı", `**${files.length}**`, true)
        .addField("Hafıza Kullanımı", `**\`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}\`** MB`, true)
        .addField("CPU Kullanım", `**${Math.round(process.cpuUsage().system / 1000000)}**%`, true)
        .addField("CPU Bilgi", `İşlemci: \`${data.brand}\` \nHız: \`${data.speed}\`GHz \nÇekirdek: \`${data.cores}\``, true)
        .addField("Sunucular", `**${client.guilds.size}**`, true)
        .addField("Kullanıcılar", `**${client.users.size}**`, true)
        .addField("Uptime", `${uptime}`, true)
        .addField("Discord.js V.:", `v${version}`, true)
        .addField("Node.js V.", `${process.version}`, true)
        .addField("Geliştirici", "*ReSeliin#8888*", false)
      message.channel.send(InfoEmbed);
    });
    });
}