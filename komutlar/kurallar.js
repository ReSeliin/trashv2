const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const hayir = "🔥";
  const evet = "😮";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "⚠️ | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!"
    );
  const msg = args.join(" ");
  if (!msg)
  message.delete();
  message.channel
    .send(
      new Discord.RichEmbed()
        .setTitle("Kurallar")
        .setDescription('1. 𝑻𝒆𝒉𝒅𝒊𝒕 𝒆𝒅𝒊𝒄𝒊, 𝒌𝒖̈𝒇𝒖̈𝒓𝒍𝒖̈, 𝒎𝒖̈𝒔𝒕𝒆𝒉𝒄𝒆𝒏, 𝒌𝒂𝒃𝒂, 𝒏𝒆𝒇𝒓𝒆𝒕 𝒅𝒐𝒍𝒖 𝒚𝒂𝒅𝒂 𝒂şı𝒓ı 𝒔𝒂𝒚ı𝒅𝒂 𝒊𝒔𝒕𝒆𝒏𝒎𝒆𝒚𝒆𝒏 𝒎𝒆𝒔𝒂𝒋𝒍𝒂𝒓 𝒈𝒐̈𝒏𝒅𝒆𝒓𝒎𝒆𝒌 𝒗𝒆𝒚𝒂 𝒔𝒆𝒔𝒍𝒊 𝒐𝒅𝒂𝒍𝒂𝒓𝒅𝒂 𝒌𝒐𝒏𝒖ş𝒎𝒂𝒌; 𝒅𝒊𝒏, 𝒅𝒊𝒍, ı𝒓𝒌 𝒂𝒚𝒓ı𝒎ı𝒏𝒂 𝒚𝒐̈𝒏𝒆𝒍𝒊𝒌 𝒊𝒍𝒆𝒕𝒊𝒍𝒆𝒓 𝒈𝒐̈𝒏𝒅𝒆𝒓𝒎𝒆𝒌 𝒗𝒆 𝒎𝒂𝒕𝒆𝒓𝒚𝒂𝒍𝒍𝒆𝒓 𝒌𝒖𝒍𝒍𝒂𝒏𝒎𝒂𝒌 𝒌𝒆𝒔𝒊𝒏𝒍𝒊𝒌𝒍𝒆 𝒚𝒂𝒔𝒂𝒌𝒕ı𝒓.\n\n2. 𝑫𝒊𝒔𝒄𝒐𝒓𝒅𝒅𝒂 𝒅𝒊𝒍, 𝒅𝒊𝒏, ı𝒓𝒌 𝒗𝒆 𝒔𝒊𝒚𝒂𝒔𝒆𝒕 𝒉𝒂𝒌𝒌ı𝒏𝒅𝒂 𝒕𝒂𝒓𝒕ış𝒎𝒂 𝒚𝒂𝒑𝒎𝒂𝒌 𝒌𝒆𝒔𝒊𝒏𝒍𝒊𝒌𝒍𝒆 𝒚𝒂𝒔𝒂𝒌𝒕ı𝒓, 𝒔𝒊𝒚𝒂𝒔𝒊 𝒚𝒂𝒛ı𝒍𝒂𝒓ı𝒏ı𝒛ı 𝒔𝒊𝒚𝒂𝒔𝒊 𝒊ç𝒆𝒓𝒊𝒌𝒍𝒊 𝒔𝒖𝒏𝒖𝒄𝒖𝒍𝒂𝒓𝒂 𝒈𝒊𝒓𝒆𝒓𝒆𝒌 𝒅𝒊𝒍𝒆 𝒈𝒆𝒕𝒊𝒓𝒆𝒃𝒊𝒍𝒊𝒓𝒔𝒊𝒏𝒊𝒛, 𝒔𝒖𝒏𝒖𝒄𝒖𝒚𝒖 𝒔𝒊𝒚𝒂𝒔𝒊 𝒑𝒓𝒐𝒑𝒂𝒈𝒂𝒏𝒅𝒂 𝒊ç𝒊𝒏 𝒌𝒖𝒍𝒍𝒂𝒏𝒂𝒏𝒍𝒂𝒓ı𝒏 𝒉𝒆𝒔𝒂𝒑𝒍𝒂𝒓ı 𝒚𝒂𝒔𝒂𝒌𝒍𝒂𝒏ı𝒓.\n\n3. 𝑺𝒖𝒏𝒖𝒄𝒖𝒅𝒂 𝒖̈𝒚𝒆𝒍𝒆𝒓 𝒂𝒓𝒂𝒔ı𝒏𝒅𝒂 𝒚𝒂𝒑ı𝒍𝒂𝒏 𝒍𝒊𝒏𝒌 𝒗𝒆 𝒑𝒓𝒐𝒈𝒓𝒂𝒎 𝒑𝒂𝒚𝒍𝒂şı𝒎ı𝒏𝒅𝒂, 𝒃𝒊𝒍𝒈𝒊𝒔𝒂𝒚𝒂𝒓ı𝒏ı𝒛𝒅𝒂 𝒐𝒍𝒖ş𝒂𝒃𝒊𝒍𝒆𝒄𝒆𝒌 𝒑𝒓𝒐𝒃𝒍𝒆𝒎𝒍𝒆𝒓𝒅𝒆𝒏 𝒌𝒖𝒍𝒍𝒂𝒏ı𝒄ı𝒍𝒂𝒓 𝒔𝒐𝒓𝒖𝒎𝒍𝒖𝒅𝒖𝒓. 𝑩𝒖 𝒚𝒐𝒍𝒍𝒂 𝒑𝒓𝒐𝒈𝒓𝒂𝒎 𝒊𝒏𝒅𝒊𝒓𝒆𝒏 𝒌𝒖𝒍𝒍𝒂𝒏ı𝒄ı𝒍𝒂𝒓 𝒃𝒊𝒓 𝒗𝒊𝒓𝒖̈𝒔 𝒕𝒂𝒓𝒂𝒎𝒂 𝒑𝒓𝒐𝒈𝒓𝒂𝒎ı𝒏ı 𝒎𝒖𝒉𝒂𝒌𝒌𝒂𝒌 𝒌𝒖𝒍𝒍𝒂𝒏𝒎𝒂𝒍ı𝒅ı𝒓𝒍𝒂𝒓. 𝑨𝒌𝒔𝒊 𝒉𝒂𝒍𝒅𝒆 𝒚𝒐̈𝒏𝒆𝒕𝒊𝒎 𝒔𝒐𝒓𝒖𝒎𝒍𝒖𝒍𝒖𝒌 𝒌𝒂𝒃𝒖𝒍 𝒆𝒕𝒎𝒆𝒛.\n\n4. 𝑩𝒂ş𝒌𝒂𝒔ı𝒏𝒂 𝒂𝒊𝒕 𝒌𝒊ş𝒊𝒔𝒆𝒍 𝒃𝒊𝒍𝒈𝒊𝒍𝒆𝒓 𝒚𝒂𝒚ı𝒏𝒍𝒂𝒎𝒂𝒌 𝒚𝒂𝒔𝒂𝒌𝒕ı𝒓. (𝑻𝒆𝒍𝒆𝒇𝒐𝒏 𝒏𝒖𝒎𝒂𝒓𝒂𝒔ı, 𝑬-𝑷𝒐𝒔𝒕𝒂 𝒂𝒅𝒓𝒆𝒔𝒊, 𝑭𝒐𝒕𝒐ğ𝒓𝒂𝒇 𝒗.𝒃.) @everyone')
        .setColor("#080000")
        .setFooter(
          message.author.tag + "Tarafından yazılmıştır",
          message.author.avatarURL
        )
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hayır Şeklinde Sorar :)
    });
};