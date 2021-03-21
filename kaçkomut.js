const discord = require('discord.js');
exports.run = async(client, message, args) => {
message.channel.send(`${client.commands.size} komutum var!`)  
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
    name : "kaç-komut"
    };
