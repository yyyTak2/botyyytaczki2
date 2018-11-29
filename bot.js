var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '🔥Mokre Chomiczki🔥 👉👌',
            type: "PLAYING",
            url: "https://www.twitch.tv/yyytak32"
            
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === 'asddsaaw23')
   message.channel.send('Przyjdę do cb zaraz i zgwałce ci dom ❤️');
    
});

bot.login(process.env.B0T_T0KEN);
