const discord = require('discord.js');
const talkedRecently = new Set();
exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Sunucu tanıt komutunu 24 saatte bir kullanabilirsiniz!");
} else {
message.channel.createInvite({maxAge: 0}).then((invite) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Bir kişi sunucusunu tanıttı!')
    .setDescription(`[Sunucuya girmek için tıkla!](${invite}) \n \n Üye sayısı: ${message.guild.memberCount} \n İsmi: ${message.guild.name} \n Tanıtım sahibi: <@${message.author.id}>`)
    client.channels.cache.get("815875272247083029").send(embed)
    return message.channel.send(`Sunucunu destek sunucumda tanıttım => (https://discord.gg/javascript)`)
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 86400000); // yanlışsa düzeltin internete bakıp saniye cinsinden 1 günü yazın qweqwe

})}};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "sunucu-tanıt"
        };
