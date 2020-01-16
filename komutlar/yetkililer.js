const Discord = require('discord.js');

exports.run = async (client, message) => {
 message.delete()
  var str = ''
for(var i = 0; i < message.guild.members.size; i++) {
   if(message.guild.members.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.array()[i].presence.status === "dnd" && !message.guild.members.array()[i].user.bot) {
      str += `<:dnd:572160230775848961> ${message.guild.members.array()[i].user.tag}\n`
    }
    else if(message.guild.members.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.array()[i].presence.status === "online" && !message.guild.members.array()[i].user.bot){
      str += `<:online:572160231153598464> ${message.guild.members.array()[i].user.tag}\n`
    }
    else if(message.guild.members.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.array()[i].presence.status === "idle" && !message.guild.members.array()[i].user.bot){
      str += `<:idle:572160231472234589> ${message.guild.members.array()[i].user.tag}\n`
    }
      else if (message.guild.members.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.array()[i].presence.status === "offline" && !message.guild.members.array()[i].user.bot){
      str += `<:invisible:572160231493206016> ${message.guild.members.array()[i].user.tag}\n`
    }
}

  var embed = new Discord.RichEmbed()
  .setColor("#080000")
  .setAuthor(`${message.guild.name} - Sunucu Yöneticileri`)
  .setDescription(str.replace(message.guild.owner.user.tag, `**${message.guild.owner.user.tag} - [Sunucu Sahibi]**`))
  .setThumbnail(message.guild.iconURL)
  .setFooter("NOT: Bu komut sunucudaki \"Yönetici\" iznine sahip kullanıcıları listeler.")
message.channel.send(embed)
  
};