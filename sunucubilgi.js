const discord = require('discord.js');
exports.run = async(client, message, args) => {   
 const embed = new discord.MessageEmbed()
    .setTitle(`${message.guild.name} sunucusunun bilgileri`)
    .addField(`Kişi sayısı:`, message.guild.memberCount)
    .addField(`Kuruluş tarihi:`, message.guild.createdAt)
    .addField(`Topluluk güncellemeleri kanalı:`, message.guild.systemChannel)
    .addField(`Kurallar kanalı:`, message.guild.rulesChannel)
    .addField(`Sunucunun idi:`, message.guild.id)
    .addField(`Afk zaman aşımı:`, message.guild.afkTimeout)
    .addField(`Sunucu sahibi idi:`, message.guild.owner.id)
    .addField(`Moderasyon seviyesi:`, message.guild.verificationLevel)
    .addField(`Sunucu bölgesi:`, message.guild.region)
message.channel.send(embed)
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "sunucu-bilgi"
        };
