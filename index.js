const Discord =require(`discord.js`);
const token = `NjQ4MjkyMTU2NDgxNzMyNjI5.XdvazQ.JKeN_jO5f7KsPxJYCH59kkbIYO8`;
const prefix = "$";
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

client.on(`ready`, () => {
  console.log(`Bot is now connected`);
  client.user.setPresence({
        game: {
            name: 'Wumpus | Type $help',
            type: 'WATCHING'
        },
        status: 'online'
    })
})


client.login(token);
