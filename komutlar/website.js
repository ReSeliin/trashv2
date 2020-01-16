exports.run = (client, message) => {
  message.delete(2000);
  message.channel.send("Web Sitemiz aktiftir herkesi bekleriz ...");
  message.channel.send("https://trash-bot-v2.glitch.me/");
  message.channel.send("@everyone");
}