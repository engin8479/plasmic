const Discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Kayıt kanalını etiketler misin?')

db.set(`kayıtk_${message.guild.id}`, kanal.id)
return message.channel.send(`Kayıt kanalı başarı ile <#${kanal.id}> olarak ayarlandı.`)

};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['kayıtkanal'],
permLevel: 4

};
exports.help = {
name : "kayıt-kanal"

};
//
const discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Lütfen kullanıcının kaydı yapılınca verilecek rolü etiketler misin?')
db.set (`kayıtrol_${message.guild.id}`, rol.id)
 return message.channel.send(`Kayıt verilecek rol başarı ile <@&${rol.id}> olarak ayarlandı!`)


};

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 4,
aliases: ['kayıtrol']



};
exports.help = {
name: "kayıt-rol"



};
//
const Discord = require('discord.js');
const db = require('narcos-db');

exports.run = async(client, message, args) => {
    var prefix = ayarlar.prefix
let kanal = db.fetch (`kayıtk_${message.guild.id}`)
if(!kanal) return message.channel.send('Lütfen kayıt kanalını ayarla!')
let rol = db.fetch (`kayıtrol_${message.guild.id}`)
if(!rol) return message.channel.send('Lütfen kayıt rolünü ayarla!')
if(kanal == null) return message.channel.send('');
if (message.channel.id !== kanal) return message.channel.send(`Sadece Kayıt Kanalından Kayıt Olabilirsiniz.`);
if (kanal == true) return;


let oo = message.member
let guild = message.guild
let isim = args[0];
let yas = args[1];
if (!isim) return message.channel.send(`İsmini girmelisin.`)
if (!yas) return message.channel.send(`Yaşını girmelisin.`)
setTimeout(function(){oo.roles.add(db.fetch(`kayıtrol_${message.guild.id}`))},5000)
 oo.setNickname(`${isim} ${yas}`)

}
exports.conf =  {
permLevel: 4,
aliases: []


};
exports.help = {
name: "kayıt"



}
