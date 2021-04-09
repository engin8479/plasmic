const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen boost log kanalını belirtiniz!')
db.set(`boostlog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Boost log kanalını <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`boostlog_${message.guild.id}`)
return message.channel.send('boost log kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'boost-log'
};
//
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu boost seviyesi atladı!')
  .setDescription(`Sunucumuz ${guild.name} artık ${newLevel} boost seviyesinde tebrikler!`)
client.channels.cache.get(log).send(embed)
});
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu boost seviyesi düştü!')
  .setDescription(`Sunucumuz ${guild.name} artık ${newLevel} boost seviyesinde üzdü :(`)
client.channels.cache.get(log).send(embed)
});
client.on("guildMemberBoost", (member) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuza boost basıldı!')
  .setDescription(`<@${member.id}> adlı kullanıcı sunucumuza boost bastı teşekkürler!`)
client.channels.cache.get(log).send(embed)
});
client.on("guildMemberUnboost", (member) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`boostlog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuzdan boost çekildi!')
  .setDescription(`<@${member.id}> adlı kullanıcı sunucumuzdan boostunu çekti üzdü :(`)
client.channels.cache.get(log).send(embed)
})
