const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen ses log kanalını belirtiniz!')
db.set(`Seslog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Ses log kanalını <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`seslog_${message.guild.id}`)
return message.channel.send('Ses log kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ses-log'
};
//
client.on("voiceChannelJoin", (member, channel) => {
  const { Database } = require('nukleon');
const db = new Database("plasmic.json")
let log = db.fetch(`seslog_${member.guild.id}`)
if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir kullanıcı ses kanalına katıldı!')
  .setDescription(`<@${member.id}> adlı kullanıcı <#${channel.id}> adlı ses kanalına katıldı!`)
client.channels.cache.get(log).send(embed)
});
client.on("voiceChannelLeave", (member, channel) => {
  const { Database } = require('nukleon');
const db = new Database("plasmic.json");
let log = db.fetch(`seslog_${member.guild.id}`)
if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir kullanıcı ses kanalından ayrıldı!')
  .setDescription(`<@${member.id}> adlı kullanıcı <#${channel.id}> adlı ses kanalından ayrıldı!`)
client.channels.cache.get(log).send(embed)
});
