const Discord = require( 'discord.js' );
const fs = require('fs');
const db = require('quick.db');
const sneckfetch = require('snekfetch');
const client = new Discord.Client();

// Bot Bilgi
const ayarlar = require("./ayarlar/ayar.json");
client.login(ayarlar.token);
let owners = [`${ayarlar.sahip}`];
//Kurucu 

//const active = new Map();

/* BOT DURUM */
client.on('ready', () => {
  client.user.setActivity(`${ayarlar.prefix}yardım | Web Sitemiz açılmıştır https://trash-bot-v2.glitch.me/ | ${client.guilds.size} Sunucu | ${client.users.size} Kullanıcı`,{ type: 'Playing' });
  console.log ('________________T R A S H___________________');
  console.log (`Kullanıcı İsmi     : ${client.user.username}`);
  console.log (`Sunucular          : ${client.guilds.size}`);
  console.log (`Kullanıcılar       : ${client.users.size}`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : Hazır! :)`);
  console.log ('________________T R A S H___________________');
});


// Bot Sunucu Giriş Çıkış
client.on("guildCreate", async guild => {
client.user.setActivity(`${ayarlar.prefix}yardım | ${client.guilds.size} Sunucu | ${client.users.size} Kullanıcı`, { type: 'Playing' });
  
  let guildCreateChannel = client.channels.get(ayarlar.eklendim);
  
  let general = guild.channels.find('name', 'genel');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Sunucuya Eklendim')
      .setThumbnail(guild.iconURL || `https://cdn.discordapp.com/embed/avatars/0.png`)
      .addField(invite.url || "Davet Alamadım")
      .setDescription('Yeni sunucuya giriş yaptım')
      .addField('Sunucu Bilgisi', `İsim: **${guild.name}** \nID: **${guild.id}**`)
      .setColor('#0000000000')  
    
    guildCreateChannel.send(joinEmbed);
  });
}); 

client.on("guildDelete", async guild => {
  client.user.setActivity(`${ayarlar.prefix}yardım | ${client.guilds.size} Sunucu | ${client.users.size} Kullanıcı`, { type: 'Playing' });
  
  let guildCreateDelete = client.channels.get(ayarlar.atıldım);
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Sunucudan Atıldım')
    .setThumbnail(guild.iconURL || `https://cdn.discordapp.com/embed/avatars/0.png`)
    .addField('Sunucu Bilgisi', `İsim: **${guild.name}** \nID: **${guild.id}**`)
    .setColor('#000000000')
  
  guildCreateDelete.send(leaveEmbed);
});



// Otorol
client.on("guildMemberAdd", function(member) {
  // Custom Role
  let autoroles = JSON.parse(fs.readFileSync("./ayarlar/autorole.json", "utf8"));
  if (!autoroles[member.guild.id]) {
    return;
  };
  let role = autoroles[member.guild.id].autorole;
  
  if (!role) return;
  member.addRole(role).catch(console.error);
  
  // Custom Channel
  let welcomes = JSON.parse(fs.readFileSync("./ayarlar/welcome_leave.json", "utf8"));
  if(!welcomes[member.guild.id]) {
    return;
  };
	let welcomeC = welcomes[member.guild.id].welcomes;

  let welcomeChannel = welcomeC;
  
  var welcomeMessages = [
    `Sunucumuza Hoşgeldin ***${member}*** İyi eğlenceler! :wave:https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif**BetaT**
 `
  ];
  let result = Math.floor((Math.random() * welcomeMessages.length));
  
  let newWelcome = client.channels.get(welcomeChannel);
  if (!newWelcome) return;
  newWelcome.send(welcomeMessages[result]);
});

client.on("guildMemberRemove", function(member) {
  // Custom Channel
  let welcomes = JSON.parse(fs.readFileSync("./ayarlar/welcome_leave.json", "utf8"));
  if(!welcomes[member.guild.id]) {
    return;
  };
	let welcomeC = welcomes[member.guild.id].welcomes;
  
  let newLeave = client.channels.get(welcomeC);
  if (!newLeave) return;
  newLeave.send(`***${member}*** :sob: Geri gelmen dileyi ile :sob:  https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif`);
});





/* Event */
client.on('message', async message => {
  
  // Variables
  let msg = message.content.toUpperCase();
  let sender = message.author;
  
  // Custom Prefix
  let prefixes = JSON.parse(fs.readFileSync("./ayarlar/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: ayarlar.prefix
    };
  };
	let prefix = prefixes[message.guild.id].prefixes;

  // Vars cont
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  
  // Return Statements
  if (!msg.startsWith(prefix)) return;
  if (message.author.bot) return;
  
  // Command Handler
  try {
    let userCommandFile = require(`./komutlar/${cmd}.js`);
    userCommandFile.run(client, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.tag} Komut kullandı kullanılan komut: ${cmd}`);
  }
});


// Sayaç

client.on('guildMemberAdd', async member => {
  let sayi = await db.fetch(`sayac_${member.guild.id}`)
  let kanal = await db.fetch(`sayacK_${member.guild.id}`)
  
  if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:loudspeaker: :inbox_tray: ${member} Hoşgeldin otorol verildi **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** kişi kaldı sayende 🤗`)
})
client.on('guildMemberRemove', async member => {
  let sayi = await db.fetch(`sayac_${member.guild.id}`)
  let kanal = await db.fetch(`sayacK_${member.guild.id}`)
  
  if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:loudspeaker: :outbox_tray: ${member} Sunucudan ayrıldı! **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** kişi kaldı 🤔!`)
})

// Website
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.engine("html", require("ejs").renderFile)
app.set("view engine", "ejs")
app.get("/", function (request, response) {
    response.render(__dirname + '/views/index.ejs');
});

// listen for requests :)
var listener = app.listen(/*process.env.PORT*/ 8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// sa-as

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam, Hoş geldin :wave:');
  }
  else if(msg.content.toLowerCase() === "selamun aleyküm") {
    msg.reply('Aleyküm Selam, Hoş geldin :wave: ');
  }
});

// reklam engelle

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = [".com", ".press", ".xyz", ".online", ".best", ".club", ".website", ".fun", ".baby" ,".art", ".kim", ".me", ".host", ".rent", ".college", ".net", ".org", ".info","https","http"] //by yolla istediğiniz kadar reklam ekleyebilirsiniz.
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Reklam yapmak yasak kardeşim!")
        message.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
     
  }
  
});

// küfür engelle

client.on('message', async message => {
  let ke = await db.fetch(`küfür_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["sikeyim","sikik","oç","oc","göt","piç","yarak","aptal","götveren","amcık","sikerim","amına","amına koyim","amk","orospu","oğospu","Oğospu","Orospu","am","yarrak","Oç","Amk","ananı sikeyim","Sikeyim","sikik","goyam","Goyim","sg","Sg","SG","Siktir","siktir","SİKTİR"] //by yolla istediğiniz kadar reklam ekleyebilirsiniz.
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete(); 
        message.channel.send("Küfür etmek yasak kardeşim!")
      }
    }
     
  }
  
});

// caps engelleme

client.on('message', async message => {
  let ke = await db.fetch(`caps_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z","X"] //by yolla istediğiniz kadar reklam ekleyebilirsiniz.
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete(); 
        message.channel.send("Caps kullanmak yasak kardeşim!")
      }
    }
     
  }
  
});