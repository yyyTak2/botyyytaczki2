var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '〽️Bot do Testów〽️',
            type: 0
        }
    });
});	

bot.login(process.env.B0T_T0KEN);
