const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen sunucu rozet log kanalını belirtiniz!')
db.set(`sunucurozetlog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Sunucu rozet log kanalını <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`sunucurozetlog_${message.guild.id}`)
return message.channel.send('Sunucu rozet log kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-rozet-log'
};
//
client.on("guildPartnerAdd", (guild) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`sunucurozetlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuz partner oldu!')
  .setDescription('Partnerlik herkese hayırlı olsun!')
  client.channels.cache.get(log).send(embed)
});
client.on("guildPartnerRemove", (guild) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`sunucurozetlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuzdan partnerlik alındı!')
  .setDescription('üzdü :(')
  client.channels.cache.get(log).send(embed)
});
client.on("guildVerificationAdd", (guild) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`sunucurozetlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuz doğrulandı!')
  .setDescription('Herkese hayırlı olsun!')
  client.channels.cache.get(log).send(embed)
});
client.on("guildVerificationRemove", (guild) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`sunucurozetlog_${guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucumuzun doğrulanmış rozeti kalktı!')
  .setDescription('üzdü :(')
  client.channels.cache.get(log).send(embed)
});
