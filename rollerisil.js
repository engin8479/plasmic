const discord = require('discord.js');
exports.run = async(message) => {
message.guild.roles.cache.forEach(enginarr => {
    enginarr.delete()
});
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 2
    };
    exports.help = {
        name : "rollesi-sil"
        };
