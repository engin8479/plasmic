const discord = require('discord.js');
const tdk = require('trsozluk')
exports.run = async(client, message, args) => {
    let enginar = args.slice(0).join(' ')
    if(!enginar) return message.channel.send('Aratmak istediğiniz kelimeyi yazın!')
    tdk(enginar).then(anlam => {
        const embed = new discord.MessageEmbed()
        .setTitle(enginar + " isimli kelimenin sonuçları!")
        .addField('Anlam:', anlam.anlam)
        .addField('Anlam 2:', anlam.anlam2)
        .addField("Lisan:", anlam.lisan)
        .addField('Örnek:', anlam.ornek)
        .addField("Atasözü:", anlam.atasozu)
        return message.channel.send(embed)
    });

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tdk' 
  };
