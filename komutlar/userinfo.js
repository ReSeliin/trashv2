const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first() || message.author); 
  let kickable = user.kickable ? "✅" : "❎";
  let bannable = user.bannable ? "✅" : "❎";
  let icon = user.user.displayAvatarURL;

  let nickname = user.nickname;
  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = 'None'
  };

  let createdAtRaw = user.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let joinedAtRaw = user.joinedAt.toDateString();
  let joinedAt = joinedAtRaw.split(" ");

  let playingStatus = user.presence.game;
  if (playingStatus) {
    playingStatus = user.presence.game.name;
  } else {
    playingStatus = 'None'
  }

  let embed = new Discord.RichEmbed()
    .setTitle(`Information about ${nickname}`)
    .setColor('#000000')
    .setThumbnail(icon)
    .addField('Kullanıcı adı', user.user.tag, true)
    .addField('Takma ad', nickname, true)
    .addField('Kullanıcının ID si', user.id, true)
    .addField('Stat', user.presence.status, true)
    .addField('Oynuyor', playingStatus, true)
    .addField('Hesabın açıldığı tarih', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
    .addField('Servere katıldığı zaman', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
    .addField('Banlanabilir', bannable, true)
    .addField('Kicklenebilir', kickable, true);
  message.channel.send(embed);
}