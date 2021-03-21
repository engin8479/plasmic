const discord = require('discord.js');
exports.run = async(message) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
message.guild.channels.cache.forEach(enginarr => {
    enginarr.delete()
});
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "kanalları-sil"
        };
