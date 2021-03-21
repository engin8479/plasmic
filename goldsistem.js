const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
if(args[0] == "ekle") {
let enginar = db.fetch(`goldlog`)
if(!enginar) return message.channel.send('Gold log ayarlı değil.')
let engin = args[1]
if(!engin) return message.channel.send('Lütfen gold üyeye eklemek istediğiniz kişinin idini girin!')
const embed = new discord.MessageEmbed()
.setTitle('Gold üye eklendi!')
.setDescription(`Sahibim<@${message.author.id}>, <@${engin}> adlı kişiyi gold üye listesine ekledi!`)
db.set(`golduye_${engin}`, engin)
client.channels.cache.get(enginar).send(embed)
return message.channel.send('Kişi başarı ile gold üyeliğe eklendi!')
};
if(args[0] == "log") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen log kanalını belirtiniz!')
db.set(`goldlog`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Sahibim gold kanalını ayarladı!')
.setDescription(`<@${message.author.id}> bu kanalı gold log kanalı ayarladı!`)
client.channels.cache.get(engin.id).send(embed)
return message.channel.send('Gold log kanalı başarı ile ayarlandı!')
};
if(args[0] == "çıkar") {
    let enginar = db.fetch(`goldlog`)
if(!enginar) return message.channel.send('Gold log ayarlı değil.')
let engin = args[1]
if(!engin) return message.channel.send('Lütfen gold üyelikten çıkarmak istediğiniz kişinin idini girin!')
db.delete(`golduye_${engin}`)
const embed = new discord.MessageEmbed()
.setTitle('Gold üye çıkarıldı!')
.setDescription(`Sahibim <@${message.author.id}>, <@${engin}> adlı kişiyi gold üyelikten çıkardı`)
client.channels.cache.get(enginar).send(embed)
return message.channel.send('Kişi başarı ile gold üyelikten çıkarıldı!')
};
if(args[0] =="log-sıfırla") {
    let engin = db.fetch(`goldlog`)
    if(!engin) return message.channel.send('Sistem ayarlı değil.')
    const embed = new discord.MessageEmbed()
    .setTitle('Gold sistemi sıfırlandı!')
    .setDescription(`Sahibim <@${message.author.id}>, gold log kanalını sıfırladı ve sistem kapandı!`)
    client.channels.cache.get(engin).send(embed)
db.delete(`goldlog`)
return message.channel.send('Sistem sıfırlandı!')
};
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "gold"
        };
