client.on("message", msg => {
const db = require("quick.db");
  let enginar= db.fetch(`onaylıcanlıdestek_${msg.author.id}`)
  if(!enginar) return;
  let engin = db.fetch(`canlıdestekkanal_${msg.author.id}`)
  var dm = client.channels.cache.get(engin)
  if(msg.channel.type === "dm") {
  if(msg.author.id === client.user.id) return;
  const botdm = new Discord.MessageEmbed()
  .setTitle(`CANLI DESTEK MESAJI`)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(`${msg.author.avatarURL()}`)
  .setDescription(`<@${msg.author.id}> adlı kişi ile başlattığınız destek talebinden yeni mesaj! \n \n  Mesaj: **${msg.content}** \n \n Sizde mejaj göndermek istiyorsanız !canlı-mesaj-yolla id mesaj \n\n Bitirmek için: !canlı-destek-bitir id`)
.setFooter('Plasmic code - Enginar')
  
  dm.send(botdm)
  
  }
  if(msg.channel.bot) return;
  });
//
const discord = require('discord.js');
const db = require("quick.db");
const bt = require('best-tools');
exports.run = async(client, message, args) => {
let id = args[0]
if(!id) return message.channel.send('Lütfen bir canlı destek idi belirtiniz!')
let enginar = db.fetch(`canlıdestek_${id}`)
if(!enginar) return message.channel.send('Böyle bir canlı destek idi yok!')
let enginn = db.fetch(`onaylıcanlıdestek_${enginar}`)
if(!enginn) return message.channel.send('Bu canlı destek talebi onaylı değil!')
let mesaj = args.slice(1).join(' ')
if(!mesaj) return message.channel.send('Lütfen bir mesaj belirtin!')
client.users.cache.get(enginar).send(mesaj)
return message.channel.send('mesaj gönderildi!')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 5 // sahip perime ayarlayın yoksa çalışmaz
  };
  
  exports.help = {
    name: 'canlı-mesaj-yolla' 
  };
//
const discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
let engin = args[0]
if(!engin) return message.channel.send('Lütfen id belirtin!')
let enginar = db.fetch(`canlıdestek_${engin}`)
db.delete(`onaylıcanlıdestek_${enginar}`)
db.delete(`canlıdestekkanal_${enginar}`)
db.delete(`canlıdestek_${engin}`)
return message.channel.send('Canlı destek bitirildi!')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'canlı-destek-bitir' 
  };
//
const discord = require('discord.js');
const db = require('quick.db');
const bt = require('best-tools');
exports.run = async(client, message, args) => {
let id = args[0]
if(!id) return message.channel.send('Lütfen bir canlı destek idi belirtiniz!')
let enginar = db.fetch(`canlıdestek_${id}`)
if(!enginar) return message.channel.send('Böyle bir canlı destek idi yok!')
const embed = new discord.MessageEmbed()
.setTitle(`Canlı destek onaylandı!`)
.setDescription(`${id} idli canlı destek <@${message.author.id}> tarafından onaylandı! \n\n Sohbet başarı ile başlatıldı! \n <@${enginar}> dm bekleniyosunuz :D`)
client.channels.cache.get("kanalid").send(embed)
db.set(`onaylıcanlıdestek_${enginar}`, enginar)
db.set(`canlıdestekkanal_${enginar}`, message.channel.id)
client.users.cache.get(enginar).send(`${id} idli canlı desteğiniz <@${message.author.id}> tarafından başlatıldı! \n Lütfen sorunuzunu buraya yazınız :D \n Bitirmek için: !canlı-destek-bitir id`)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 5 // sahip perime ayarlayın yoksa çalışmaz
  };
  
  exports.help = {
    name: 'canlı-destek-onayla' 
  }
//
const discord = require('discord.js');
const db = require('quick.db');
const bt = require('best-tools');
exports.run = async(client, message, args) => {
    let id = bt.rastgele('50000', 'pozitif')
message.channel.send(`Canlı destek talebiniz başarı ile destek sunucumuzda oluşturuldu! \n Destek idi: ${id}`)
const embed = new discord.MessageEmbed()
.setTitle('Destek sunucumuz!')
.setDescription('[Destek sunucumuz için tıkla!](https://discord.gg/p7bx7A4B)')
.setFooter('Plasmic code - Enginar')
message.channel.send(embed)
db.set(`canlıdestek_${id}`, message.author.id)
const embedd = new discord.MessageEmbed()
.setTitle('Canlı destek talebi geldi!')
.setDescription(`**__Kişi Bilgileri__** \n \n Kişi: <@${message.author.id}> \n İdi: ${message.author.id} \n \n **__CANLI DESTEK__** \n \n Canlı destek idi: ${id} \n Kabul etmek için !canlı-destek-onayla ${id}`)
client.channels.cache.get("kanalid").send(embedd)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'canlı-destek' 
  };
