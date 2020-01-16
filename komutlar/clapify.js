  const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
const ayarlar = require("../ayarlar/ayar.json")

  exports.run = (bot, message, args) => {
      message.delete();

      if (args.length < 1) return message.channel.send(`**Birşeyler yazınız.** \`${ayarlar.prefix}clapify <sentence>\``)
      message.channel.send(args.map(randomizeCase).join(':clap:'));
  }