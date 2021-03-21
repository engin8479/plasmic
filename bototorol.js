const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
if(args[0] == "otorol"){
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen bot otorolünü belirtin!')
db.set(`bototorol_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile ayarlandı!')
.setDescription(`Bot otorolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
return message.channel.send(embed)
};
if(args[0] == "otorol-log") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen otorol log kanalını belirtiniz!')
db.set(`bototorollog_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile ayarlandı!')
.setDescription((`Otorol log kanalı başarı ile <#${engin.id}> olarak ayarlandı!`))
return message.channel.send(embed)
};
if(args[0] == "otorol-aç") {
let engin = db.fetch(`bototorol_${message.guild.id}`)
if(!engin) return message.channel.send('Otorol rolü ayarlanmamış \n Ayarlamak için: !bot otorol @rol')
let enginar = db.fetch(`bototorollog_${message.guild.id}`)
if(!enginar) return message.channel.send('Otorol log kanalı ayarlanmamış \n Ayarlamak için: !bot otorol-log #kanal')
db.set(`bototoroll_${message.guild.id}`, "aktif")
return message.channel.send('Sistem başarı ile aktif edildi!')
};
if(args[0] == "kapat") {
let engin = db.fetch(`bototoroll_${message.guild.id}`)
if(!engin) return message.channel.send('Bot otorol sistemi ayarlanmamış bu yüzden kapatılamaz!')
db.delete(`bototorol_${message.guild.id}`)
db.delete(`bototoroll_${message.guild.id}`)
db.delete(`bototorollog_${message.guild.id}`)
return message.channel.send('Sistem başarı ile sıfırlandı!')
};
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    karaliste: true
    };
    exports.help = {
        name : "bot"
        };
//
client.on("guildMemberAdd", member => {
  if (member.user.bot !== true) {

  } else {
let engin = db.fetch(`bototoroll_${member.guild.id}`)
if(!engin) return;
let enginar = db.fetch(`bototorol_${member.guild.id}`)
if(!enginar) return;
let enginn = db.fetch(`bototorollog_${member.guild.id}`)
if(!enginn) return;
setTimeout(function(){member.roles.add(db.fetch(`bototorol_${member.guild.id}`))},100)
const embed = new Discord.MessageEmbed()
.setDescription(`<@${member.id}> adlı kişiye başarı ile otorol rolünü verdim!`)
.setColor('RANDOM')
let enginnn = db.fetch(`bototorollog_${member.guild.id}`)
client.channels.cache.get(enginnn).send(embed)
};
});
