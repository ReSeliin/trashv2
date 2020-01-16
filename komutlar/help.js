const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  let helpEmbed = new Discord.RichEmbed()
    .setTitle('Tüm Komutlar')
    .setURL('')
    .setThumbnail(client.user.displayAvatarURL)
    .setColor('BLUE')
    .addField('Şans Komutları', 'qwewqe')
    .addField('Eğlence Komutları', 'qwewq')
    .addField('Araçlar', 'Avatar [Mention] \nBans \nCSGO-Stats <SteamID64> \nEmojis \nFortnite <User> [Platform (PC by Default)] \nGuildInfo \nHelp \nIP <IP> \nMembers \nNotifyMe \nOverwatch <Battletag> <Region [us | eu | asia]> <Gamemode [quickplay | competitive]> <Platform [pc | etc]>\nŞikayet <Kişi> <Sebep> \nSteamUser <Steam ID64> \nTimer <Time> \nUnstats <SteamID64> \nUserInfo [Mention] \nWebsite')
    .addField('Bot Komutları', 'BugReport <Bug> \nÖneri <Gelmesini istediğiniz komut>\nDavet \nPing \nStats')
    .addField('Yetkili Komutları', 'Otorol <Rol ID> \nBan <Kişi> <Sebep> \nKick <Kişi> <Sebep> \nLogs <Kanal ID> \nMute <Kişi> <Süre> \nPrefix <Yeni prefix> \nSil <1-100> \nUnMute <Kişi> \nWarn <Kişi> <Sebep> \nWelcome <Kanal ID>')
    .addField('Bot Sunucusuna Özel', 'Stats \nVote \nWebsite')
    .addField('Kurucu', 'Eval <Kod> \nRestart \nSay <Cümleler>')
  
  message.channel.send(helpEmbed);
}