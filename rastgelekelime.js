const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    var kelime = require('rastgelekelime');

message.channel.send(kelime())
};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0


};
exports.help = {
    name : "rastgele-kelime"
    
    };
