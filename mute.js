const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message,args) => {
    var kontrol = message.guild.roles.cache.get(db.fetch(`muteyetkili_${message.guild.id}`))
if(!kontrol) return message.channel.send('Mute yetkilisi değilsin :d')
    let muterol = db.fetch(`muterol_${message.guild.id}`)
let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Lütfen unmute atılacak kişiyi etiketleyin')
    message.guild.members.cache.get(enginar.id).roles.remove(muterol);
return message.channel.send('Kişinin mute rolü kaldırıldı!')
};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "unmute"
};
//
const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message,args) => {
    var kontrol = message.guild.roles.cache.get(db.fetch(`muteyetkili_${message.guild.id}`))
if(!kontrol) return message.channel.send('Mute yetkilisi değilsin :d')
    let log = db.fetch(`mutelog_${message.guild.id}`)
    let muterol = db.fetch(`muterol_${message.guild.id}`)
let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Lütfen mute atılacak kişiyi etiketleyin')
let sebep = args.slice(1).join(' ')
    const embed = new discord.MessageEmbed()
    .setTitle('Yeni bir mute işlemi!')
    .setDescription(`<@${message.author.id}> adlı kişi <@${enginar.id}> adlı kişiyi muteledi! \n \n Sebep: ${sebep} \n \n Süre: sınırsız!`)
client.channels.cache.get(log).send(embed)
    message.guild.members.cache.get(enginar.id).roles.add(muterol)
    return message.channel.send('Kişi başarı ile mutelendi!')
}
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "süresiz-mute"
};
//
const discord = require('discord.js')
const sayıyo = require("ms");
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message,args) => {
    var kontrol = message.guild.roles.cache.get(db.fetch(`muteyetkili_${message.guild.id}`))
if(!kontrol) return message.channel.send('Mute yetkilisi değilsin :d')
    let log = db.fetch(`mutelog_${message.guild.id}`)
    let muterol = db.fetch(`muterol_${message.guild.id}`)
let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Lütfen mute atılacak kişiyi etiketleyin')
let sebep = args.slice(2).join(' ')
let engin = args[1]
.replace(`saniye`, `s`)
.replace(`dakika`, `m`)
.replace(`saat`, `h`)
.replace(`gün`, `d`);
const embed = new discord.MessageEmbed()
.setTitle('Yeni bir mute işlemi!')
.setDescription(`<@${message.author.id}> adlı kişi <@${enginar.id}> adlı kişiyi muteledi! \n \n Sebep: ${sebep} \n \n Süre: ${engin}!`)
client.channels.cache.get(log).send(embed)
message.guild.members.cache.get(enginar.id).roles.add(muterol)
return message.channel.send('Kişi başarı ile mutelendi!')
setTimeout(function() {
    message.guild.members.cache.get(enginar.id).roles.remove(muterol);
  }, sayıyo(engin));

};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "mute"
};
//
const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {

if(args[0] == "log") {
let enginarr = message.mentions.channels.first()
if(!enginarr) return message.channel.send('Lütfen mute log kanalını belirtin!')
db.set(`mutelog_${message.guild.id}`, enginarr.id)
return message.channel.send(`Mute log kanalı <#${enginarr.id}> olarak ayarlandı!`)
}
if(args[0] == "yetkili-rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen mute yetkili rolünü belirt!')
db.set(`muteyetkili_${message.guild.id}`, engin.id)
return message.channel.send(`Mute yetkili rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
}
if(args[0] == "rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen mute rolünü belirtin!')
db.set(`muterol_${message.guild.id}`, engin.id)
return message.channel.send(`Mute rolü başarı ile <@&{engin.id}> olarak ayarlandı!`)
}
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "mute-ayarla"
    };
