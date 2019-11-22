const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("647398030479458307")
setInterval(function() {
channel.send(`lodydoma is the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);