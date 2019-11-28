const Discord = require(`discord.js`);
const token = `NjQ4MjkyMTU2NDgxNzMyNjI5.XeASXg.9_tIzp9Q8Pg9XkCYFFY1-KC2i-w`;
const prefix = `$`
const client = new Discord.Client();

//Status
client.on("ready", () => {
    client.user.setPresence({
        game: {
            name: 'Vexer | $help',
            type: 'WATCHING'
        },
        status: 'Online'
    })
})

//CUSTOM MESSAGES
client.on(`message`, (msg) => {
  if (msg.content === `$test`) {
    msg.channel.send(`Hello ${msg.author}!`)
  }
});






//SERVERINFO
client.on(`message`, (msg) => {
if(msg.content === `${prefix}serverinfo`) {
  let sEmbed = new Discord.RichEmbed()
  .setColor(colours.cyan)
  .setTitle("Server Info")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
  .addField("**Guild Name**", `${message.guild.name}`, true)
  msg.channel.send({embed: sEmbed});
}




//MODERATION MODULE
client.on('message', message => {
    if(message.content.startsWith(`${prefix}mute`)) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
    let role = message.guild.roles.find(r => r.name === "Muted");
    let member = message.mentions.members.first();
    if(member) {
        member.removeRoles(member.roles)
        member.addRole(role).catch(console.error);
        message.channel.send(`${member} has been muted!`)
} else {
    message.channel.send("You need to mention a user!")
}
} else {
    message.channel.send("You are not a high enough rank!")
}
}
});
client.on('message', message => {
    if(message.content.startsWith(`${prefix}unmute`)) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
    let member = message.mentions.members.first();
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(member) {
    member.removeRole(role).catch(console.error);
    message.channel.send(`${member} has been unmuted!`)
    } else {
        message.channel.send('You need to mention a user!')
    }
    } else {
        message.channel.send("You are not a high enough rank.")
    }
}
});
client.on('message', message => {
   if(message.content.startsWith(`${prefix}kick`)) {
       if(message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first();
    if(member) {
        member.kick('Optional reason for the audit logs').then(() => {
            message.channel.send(`Successfully kicked ${member}`);
          }).catch(err => {
            message.channel.send('I was unable to kick this user. Please check my permmisions.');
            console.error(err);
          });
    } else {
        message.channel.send("You need to mention a user!")
    }
}
   }
});
client.on('message', message => {
    if(message.content.startsWith(`${prefix}ban`)) {
        if(message.member.hasPermission("BAN_MEMBERS")) {
     let member = message.mentions.members.first();
     if(member) {
         member.ban('Optional reason for the audit logs').then(() => {
             message.channel.send(`Successfully banned ${member}`);
           }).catch(err => {
             message.channel.send('I was unable to ban this user. Please check my permmisions.');
             console.error(err);
           });
     } else {
         message.channel.send("You need to mention a user!")
     }
 }
    }
 });











//CLIENT START
client.on(`ready`, () => {
  console.log(`Vexer is Ready!`);

  client.channels.get("649685583236694020").send(`**🏁 Vexer is back online! Updates may be found #change-logs**`);

});

client.login(token);
