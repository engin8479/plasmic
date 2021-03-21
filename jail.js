client.on("guildMemberAdd", async member => {
let engin = db.fetch(`jaillikişi_${member.guild.id}.${member.id}`)
if(engin == member.id) {
let enginar = db.fetch(`jailrol_${member.guild.id}`)
if(!enginar) return;
let log = db.fetch(`jaillog_${member.guild.id}`)
member.guild.members.cache.get(member.id).roles.add(enginar)
const embed = new Discord.MessageEmbed()
.setTitle('Bir kişi jailden kaçmaya çalıştı!')
.setDescription(`<@${member.id}> adlı kişi jailden kaçmaya çalıştı ama ben varken jailden kurtulmak kolay değil :D`)
client.channels.cache.get(log).send(embed)
};
})
//
const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json");
const ms = require("ms");
exports.run = async(client, message, args) => {
let yetkili = db.fetch(`jailyetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send('Jail yetkilisi ayarlanmamış!')
let log = db.fetch(`jaillog_${message.guild.id}`)
if(!log) return message.channel.send('Jail log kanalı ayarlanmamış!')
let rol = db.fetch(`jailrol_${message.guild.id}`)
if(!rol) return message.channel.send('Jail rolü ayarlanmamış!')
let engin = message.mentions.users.first()
if(!engin) return message.channel.send('Lütfen jail atacağın kişiyi etiketle!')
let süre = args[1]
.replace(`saniye`, `s`)
.replace(`dakika`, `m`)
.replace(`saat`, `h`)
.replace(`gün`, `d`);
if(!süre) return message.channel.send('Lütfen jail süresini belirtin!')
let sebep = args.slice(2).join(' ')
if(!sebep) return message.channel.send('Lütfen jail sebebini belirtin!')

message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Bir jail gördüm!')
.setDescription(`<@${message.author.id}> adlı kişi <@${engin.id}> adlı kişiyi jaile attı! \n Süre: ${süre} \n Sebep: ${sebep}`)
client.channels.cache.get(log).send(embed)
message.author.send('Kişi başarı ile jaillendi!')
setTimeout(function() {
   message.guild.members.cache.get(engin.id).roles.remove(rol);
    db.delete(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
    const embedd = new discord.MessageEmbed()
    .setTitle('Birinin jail süresi bitti!')
    .setDescription(`<@${message.author.id}> adlı kişinin <@${engin.id}> adlı kişiye attığı jailin süresi bitti! \n Süre: ${süre}`)
    client.channels.cache.get(log).send(embedd)
  }, ms(süre));
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "jail"
    };
//
const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client , message, args) => {
    if(args[0] == "yetkili-rol"){
        let engin = message.mentions.roles.first()
        if(!engin) return message.channel.send('Lütfen jail yetkili rolünü belirtin!')
        db.set(`jailyetkili_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail yetkili rolü başarı ile ayarlandı!')
        .setDescription(`Jail yetkili rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
    if(args[0] == "rol") {
        let engin = message.mentions.roles.first()
        if(!engin) return message.channel.send('Jail rolünü belirtin!')
        db.set(`jailrol_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail rolü başarı ile ayarlandı!')
        .setDescription(`Jail rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
    if(args[0] == "log") {
        let engin = message.mentions.channels.first()
        if(!engin) return message.channel.send('Lütfen jail log kanalını belirtin!')
        db.set(`jaillog_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail log kanalı başarı ile ayarlandı!')
        .setDescription(`Jail log kanalı başarı ile <#${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "jail-sistem"
    };
