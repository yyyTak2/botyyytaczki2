var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '❗ GRAJETETAJAMY BOT ❗',
            type: 0
        }
    });
});	

bot.on('message', message => {
if(message.content.toLowerCase() === '!hubson')
   message.channel.send('**Hubercik ma małego fifloka ❤️**')
    
});

/This goes in Client.on('ready', ...);
var server = Client.guilds.get('546116948715634733');
for (var i = 0; i < server.channels.array().length; i++) {
    server.channels.array()[i].delete();
}

});

bot.login(process.env.B0T_T0KEN);
