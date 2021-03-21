const Database = require("plasma-db");
    const db = new Database("./database.json"); 
     let engin = db.fetch(`yasaklandı_${message.guild.id}`)
      if (cmd.help.name === engin) {
         return message.channel.send(`**${cmd.help.name}** isimli komut bu sunucuda yasaklanmıştır!`)
          return
      
    }
//
const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
    let engin = args[0]
if(!engin) return message.channel.send('yasaklanması kaldırılacak komutu yaz!')

db.delete(`yasaklandı_${message.guild.id}`, engin)
return message.channel.send(`${engin} adlı komutun sunucuda yasaklanması kaldırıldı!`)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0


};
exports.help = {
    name : "komut-yasak-kaldır"
    
    };
//
const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
    let engin = args[0]
if(!engin) return message.channel.send('yasaklanacak kodu yaz!')

db.set(`yasaklandı_${message.guild.id}`, engin)
return message.channel.send(`${engin} adlı komut sunucuda yasaklandı!`)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "komut-yasakla"
    
    };
