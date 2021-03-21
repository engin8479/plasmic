const discord = require('discord.js');
const { Database } = require("oasis.db");
const db = new Database("database");

exports.run = async(client, message, args) => {
let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen bir kanal belirt!')

db.set(`hgmesaj_${message.guild.id}`, enginar.id)

const embed = new discord.MessageEmbed()
.setTitle('Başarılı!')
.setDescription(`Hoşgeldin mesajı kanalı başarılı ile <#${enginar.id}> olarak ayarlandı!`)
return message.channel.send(embed)




};
exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  
  exports.help = {
    name: 'hg-mesajı',
    description: 'taslak', 
    usage: 'captcha'
  };
  
//
client.on("guildMemberAdd", async member => {
    var engin = await db.fetch(`hgmesaj_${member.guild.id}`)
    if(!engin) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Merhaba!')
    .setDescription(`<@${member.id}> sunucumuza katıldı hoşgeldin aramıza!`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed);
  })
