const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                      .setDescription('Bu komuTu kullanmak için **Yönetici** yetkisine sahip olmalısın.')
                                                                                      .setColor(10038562));
     message.guild.owner.send('Sunucu Kurulumu Başladı')
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
     
    
    message.guild.createRole({
        name: `👑 | Kurucu`,
        color: "#80000", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
      
        }).then(kurucurol => {
    message.guild.createRole({
        name: `🚨 | Admin`,
        color: "RED",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: `🛡️ | Moderatör`,
        color: "#f1c40f" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `📔 | Destek Ekibi`,
        color: '#f1c40f',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: `❤️ | Özel Kişi`,
        color: "#ee77ff" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `😊 | Partner`,
        color: "GREEN" 
        }).then(partnerrol => {
    message.guild.createRole({
        hoist: true,
        name: `🤖 | Botlar`,
        color: "#413FEE" 
        }).then(botrol => {
    message.guild.createRole({
        hoist: true,
        name: `👥 | Üye`,
        color: "#00fff5" 
        }).then(üyerol => {
      
      
    })})})})})})})})
  // message.guild.members.get(message.guild.owner).addRole(message.guild.roles.find("name", "👑 | Kurucu"))
    
     message.guild.createChannel(`●▬▬▬๑ 💼Yönetim 💼 ๑▬▬▬●`, "Category").then(YetkiliKategori => {  
     message.guild.createChannel(`●▬▬▬๑❗Önemli Kanallar❗๑▬▬▬●`, "Category").then(duyurukategorisi => {
     message.guild.createChannel(`●▬▬▬๑ 🔊 GENEL 🔊  ๑▬▬▬●`, "Category").then(sohbetkategori => {
     message.guild.createChannel(`●▬▬▬๑ 💬 Sohbet 💬 ๑▬▬▬●`, "Category").then(SesKategori => {
     message.guild.createChannel(`●▬▬▬๑🎶Müzik Kanalları🎶๑▬▬▬●`,"Category").then(müzikKategori => {
     message.guild.createChannel(`●▬▬▬๑🎮Lol Oyun Kanalları🎮๑▬▬▬●`, "Category").then(lolKategori => {
     message.guild.createChannel(`●▬▬▬๑🔫CS:GO Oyun Kanalları🔫๑▬▬▬●`, "Category").then(csKategori => {  
     message.guild.createChannel(`●▬▬▬๑😊Eğlence😊๑▬▬▬●`, "Category").then(OyunKategori => {
     message.guild.createChannel(`●▬▬▬๑💤[A]way [F]rom [K]eyboard💤๑▬▬▬●`, "Category").then(AFKkategori => {  
        
     message.guild.createChannel(`「📜」Kurallar`, "text").then(kuralkanal => {
     message.guild.createChannel(`「📢」duyurular`, "text").then(duyurukanal => {
     message.guild.createChannel(`「📢」Partnerler`, "text").then(partnerkanal => {
     message.guild.createChannel(`「📢」Partner Reklam`, "text").then(partnersartkanal => {
     message.guild.createChannel(`「💬」sohbet`, "text").then(sohbetkanal => {
     message.guild.createChannel(`「🤖」Bot-Komut`, "text").then(botkomutkanal => {
     message.guild.createChannel(`「🎵」Müzik 1`, "voice").then(müzik1kanal => { 
     message.guild.createChannel(`「🎵」Müzik 2`, "voice").then(müzik2kanal => {
     message.guild.createChannel(`「🔊」Sesli Sohbet 1`, "voice").then(ses1kanal => {
     message.guild.createChannel(`「🔊」Sesli Sohbet 2`, "voice").then(ses2kanal => {
     message.guild.createChannel(`「🔊」Sesli Sohbet 3`, "voice").then(ses3kanal => {
     message.guild.createChannel(`「🎮」Lol Tek/Çift 1`,"voice").then(lol1kanal => {
     message.guild.createChannel(`「🎮」Lol Tek/Çift 2`,"voice").then(lol2kanal => {
     message.guild.createChannel(`「🎮」Lol Esnek 1`,"voice").then(lol3kanal => {
     message.guild.createChannel(`「🔫」CS:GO Ranked 1`,"voice").then(cs1kanal => {
     message.guild.createChannel(`「🔫」CS:GO Ranked 2`,"voice").then(cs2kanal => {
     message.guild.createChannel(`「🔫」CS:GO Yoldaş 1`,"voice").then(cs3kanal => {
     message.guild.createChannel(`「🔫」CS:GO Yoldaş 2`,"voice").then(cs4kanal => {
     message.guild.createChannel(`「🎮」Sesli Oyun Odası「🔊」`, "voice").then(oyunseskanal => { 
     message.guild.createChannel(`「👄」Kelime-Türetmece`, "text").then(kelimetüretme => { 
     message.guild.createChannel(`「🔢」Sayı-Sayma`, "text").then(sayısayma => {
     message.guild.createChannel(`「👑」KURUCU`,"voice").then(kurucu => {  
     message.guild.createChannel(`「🔊」Yönetim Sohbet`,"voice").then(yönetimses => {
     message.guild.createChannel(`「🔊」Yönetim Toplantı`,"voice").then(yönetimtoplantı => {  
     message.guild.createChannel(`「📝」kayıt-log`, "text").then(kayıtlar => {
     message.guild.createChannel(`「📝」giriş-çıkış`, "text").then(girişçıkış => { 
     message.guild.createChannel(`「📷」foto-sohbet`, "text").then(medyakanal => {
     message.guild.createChannel(`「📞」destek`, "text").then(destekkanal => { 
     message.guild.createChannel(`「⏲」sayaç`, "text").then(sayaçkanal => {
     message.guild.createChannel(`「✅」yönetim-sohbet`,"text").then(yönetimsohbet => {
     message.guild.createChannel(`「✅」yönetim-duyuru`,"text").then(yönetimduyuru => {  
     message.guild.createChannel(`「💤AFK」`, "voice").then(afkkanal => { 
      
      let role4 = message.guild.roles.find("name", "🛡️ | Moderatör");
      let role3 = message.guild.roles.find("name", "🚨 | Admin");
      let role1 = message.guild.roles.find("name", "👑 | Kurucu");
      let role2 = message.guild.roles.find("name", "@everyone");
      YetkiliKategori.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliKategori.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      kayıtlar.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      kayıtlar.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      sayaçkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      sayaçkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      girişçıkış.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      girişçıkış.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////      
      
      duyurukategorisi.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      duyurukanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      kurucu.overwritePermissions(role2, {
          VIEW_CHANNEL: false,
          CONNECT: false
      });
      kurucu.overwritePermissions(role1, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      kurucu.overwritePermissions(role3, {
          VIEW_CHANNEL: true,
          CONNECT: false
      });
      kurucu.overwritePermissions(role4, {
          VIEW_CHANNEL: true,
          CONNECT: false
      }); 
      ////////////////////////////////////////////////////////////////////////////// 
      yönetimsohbet.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      yönetimsohbet.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      yönetimsohbet.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      yönetimsohbet.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
       //////////////////////////////////////////////////////////////////////////////  
      yönetimses.overwritePermissions(role2, {
          VIEW_CHANNEL: false,
          CONNECT: false
      });
      yönetimses.overwritePermissions(role1, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      yönetimses.overwritePermissions(role3, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      yönetimses.overwritePermissions(role4, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
       ////////////////////////////////////////////////////////////////////////////// 
      yönetimtoplantı.overwritePermissions(role2, {
          VIEW_CHANNEL: false,
          CONNECT: false
      });
      yönetimtoplantı.overwritePermissions(role1, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      yönetimtoplantı.overwritePermissions(role3, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      yönetimtoplantı.overwritePermissions(role4, {
          VIEW_CHANNEL: true,
          CONNECT: true
      });
      //////////////////////////////////////////////////////////////////////////////      
      yönetimduyuru.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      yönetimduyuru.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      yönetimduyuru.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      yönetimduyuru.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      ////////////////////////////////////////////////////////////////////////////// 
      partnerkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
          
      kuralkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////      
      
      partnersartkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      kuralkanal.setParent(duyurukategorisi)
      duyurukanal.setParent(duyurukategorisi)
      partnerkanal.setParent(duyurukategorisi)
      partnersartkanal.setParent(duyurukategorisi)
      sohbetkanal.setParent(sohbetkategori)
      botkomutkanal.setParent(sohbetkategori)
      müzik1kanal.setParent(müzikKategori)
      müzik2kanal.setParent(müzikKategori)
      ses1kanal.setParent(SesKategori)
      ses2kanal.setParent(SesKategori)
      ses3kanal.setParent(SesKategori)
      lol1kanal.setParent(lolKategori)
      lol2kanal.setParent(lolKategori)
      lol3kanal.setParent(lolKategori)
      cs1kanal.setParent(csKategori)
      cs2kanal.setParent(csKategori)
      cs3kanal.setParent(csKategori)
      cs4kanal.setParent(csKategori) 
      oyunseskanal.setParent(SesKategori)
      kelimetüretme.setParent(OyunKategori)
      sayısayma.setParent(OyunKategori)
      yönetimsohbet.setParent(YetkiliKategori)
      kurucu.setParent(YetkiliKategori)
      yönetimses.setParent(YetkiliKategori)
      yönetimtoplantı.setParent(YetkiliKategori)
      yönetimduyuru.setParent(YetkiliKategori) 
      kayıtlar.setParent(YetkiliKategori)
      girişçıkış.setParent(YetkiliKategori)
      medyakanal.setParent(sohbetkategori)
      destekkanal.setParent(sohbetkategori)
      sayaçkanal.setParent(YetkiliKategori)
      afkkanal.setParent(AFKkategori)
       
      kuralkanal.send(`:tools: <@${message.guild.owner.id}> bu kanala sunucunuzun kurallarını yazınız!`)
      partnersartkanal.send(`:tools: <@${message.guild.owner.id}> bu kanala sunucunuzun partnerlik şartlarını yazınız!`)
      sayısayma.send(`Bu Kanalda 1 Sayısından İtibaren Gidebildiğimiz kadar sayarak uzaklara gideceğiz\n**Örneğin**\n1\n2\n3\n4\n**Kurallar!**\nHerkes alt alta sadece 1 sayı yazabilir\nİlk sayıyı söylüyorum; 1`)
      kelimetüretme.send(`Bu kanalda ünlü bir oyun olan kelime türetmeceyi oynayacaksınız.\n**Örneğin;**\nKelime\nEmek\nKutu\nUsta\n**Kurallar**\nHerkes alt alta sadece *1* kelime yazmalıdır.\nİlk kelimeyi söylüyorum; Pasta`)
       
      message.guild.owner.send(":white_check_mark: Sunucu rolleri ve kanalları ayarlandı.\nEğer donma vb. olaylar yaşıyorsanız Discord'a tekrar girmeniz tavsiye edilir.")
      
      
      
      
      
      
    })})})})})})})})})})})})})})})})})})})}) 
    })})})})})})})})})})})})})})})})})})})})
    })   
  } 