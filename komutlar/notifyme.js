const Discord = require('discord.js');

exports.run = (client, message, tools) => {
  let role = message.guild.roles.find("name", "Notify");
  if(!role) return message.channel.send("Notify rolünü verebilmem için Notify adında rol oluşturmanız gerekmektedir.")
  let member = message.member;
  
  if (!member.roles.has(role.id)) {
    member.addRole(role).catch(console.error);
    message.channel.send(`Rol verildi, ${message.author.tag}!`);
  } else if (member.roles.has(role.id)) {
    member.removeRole(role).catch(console.error);
    message.channel.send(`Rol alındı, ${message.author.tag}!`);
  }
  
}