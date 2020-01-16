const Discord = require("discord.js");
const ms = require("ms");
const fs = require('fs');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You do not have sufficient permissions to use this command.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: The user you are trying to mute is either the same, or higher role than you.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Zamanı Belirtmedin!");
  
    let embed = new Discord.RichEmbed()
    
      .setTitle('Mutelenen biri var!')
      .setColor('#000000000')
      .addField('Mutelenen user', `${tomute}`, true)
      .addField('Hangi yetkili tarafından mutelendi', `${message.author}`, true)
      .addField('Hangi kanalda mutelendi', message.channel, true)
      .addField('Mutelendiği süre', ms(ms(mutetime)))
      .setTimestamp();
  
    let logging = JSON.parse(fs.readFileSync("./ayarlar/logging.json", "utf8"));

	  let logC = logging[message.guild.id].logging;
    let rChan = client.channels.get(logC);
  
    if (!rChan) return message.channel.send('**Burada bir log kanalı yok\nLog kanalı nasıl ayarlanır = *logs <log kanal id>**');
  
    await (tomute.addRole(muterole.id));
    message.delete().catch(O_o=>{});
    rChan.send(embed);
}