const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen sahip log kanalını belirtiniz!')
db.set(`sahiplog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Sahip log kanalı <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`sahiplog_${message.guild.id}`)
return message.channel.send('Sahip log başarı ile sıfırlandı!')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sahip-log'
};
//
client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
  const { Database } = require('nukleon');
const db = new Database("plasmic.json")
    let log = db.fetch(`sahiplog_${oldGuild.id}`)
    if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu sahibi değişti!')
  .setDescription(`<@${oldGuild.owner.id}> adlı kişi sunucu sahipliğini ${oldGuild.name} adlı sunucuda <@${newGuild.owner.id}> adlı kişiye devretti!`)
  client.channels.cache.get(log).send(embed)

});
