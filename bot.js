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

bot.on('message', message => {
if(message.content.toLowerCase() === 'asddsaaw23')
   message.channel.send('Przyjdę do cb zaraz i zgwałce ci dom ❤️');
    
if (command === '!play') {
 const voiceChannel = msg.member.voiceChannel;
 if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
}
	    
});	

bot.login(process.env.B0T_T0KEN);
