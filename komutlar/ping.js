exports.run = (client, message, args) => {
  const then = Date.now();
  message.channel.send("Pinging...").then(m => {
    const time = Date.now() - then; 
    m.edit(`Pingin : ${time}ms mesaj atıyorsun \nDiscord Heartbeat :heart:: ${Math.round(client.ping)}ms`)
  });
}