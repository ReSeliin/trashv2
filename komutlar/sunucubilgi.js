const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    let large = message.guild.large ? "✅" : "❎";
    let icon = message.guild.iconURL;


    let textChannels = 0;
    let voiceChannels = 0;
    guild.channels.forEach(channel => {
    channel.type === "text" ? textChannels++ : voiceChannels++;
    });

    let emojis = [];
    guild.emojis.forEach(emoji => {
    emojis.push(`\`${emoji.name}\``);
    });
    emojis.length === 0 ? emojis = "Bulunmamakta" : emojis = emojis.join(", ");
  
    let roles = [];
    guild.roles.forEach(role => {
      roles.push(`\`${role.name}\``);
    });
    roles = roles.join(", ");

    console.log(guild.verificationLevel);
  
    let vLevel = guild.verificationLevel;
    if ( vLevel === 0 ) { vLevel = "Seçilmemiş \n***0***" };
    if ( vLevel === 1 ) { vLevel = "Düşük \n***1***" };
    if ( vLevel === 2 ) { vLevel = "Orta \n***2***" };
    if ( vLevel === 3 ) { vLevel = "(╯°□°）╯︵ ┻━┻ \n***3***" };
    if ( vLevel === 4 ) { vLevel = "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻ \n***4***" };
  
    let serverEmbed = new Discord.RichEmbed()
        .setTitle(`Information about ${message.guild.name}`)
        .setColor(0x000000)
        .setThumbnail(icon)
        .addField('Sunucu İsmi', guild.name, true)
        .addField('Sunucu ID', guild.id, true)
        .addField('Sunucu Sahibi', guild.owner, true)
        .addField('Sunucu Bölgesi', guild.region.toUpperCase(), true)
        .addField('Toplam Üye:', guild.memberCount, true)
        .addField('Büyük Topluluk mu?', large, true)
        .addField('Doğrulama Seviyesi', vLevel, true)
        .addField('Yazı Kanalları', textChannels, true)
        .addField('Ses Kanalları', voiceChannels, true)
        .addField('Roller', `${guild.roles.size}`, true)
        .addField('Emojiler', `${guild.emojis.size}`, true)
    message.channel.send(serverEmbed)
}