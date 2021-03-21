const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./yardım.json"); 
exports.run = async(client, message, args) => {
let başlık = db.fetch(`yardımbaşlık`)
let açıklama = db.fetch(`yardımaçıklama`)
let footer = db.fetch(`yardımfooter`)
const embed = new discord.MessageEmbed()
.setTitle(`${başlık}`)
.setDescription(`${açıklama}`)
.setFooter(`${footer}`)
.setColor('RANDOM')
return message.channel.send(embed)
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0


};
exports.help = {
    name : "yardım"
    
    };
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./yardım.json");
exports.run = async(client, message, args) => {
    db.delete(`yardımaçıklama`)
    db.delete(`yardımbaşlık`)
    db.delete(`yardımfooter`)




  message.channel.send('Sıfırlandı!')

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "sahip-yardım-sıfırla"
    
    };
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./yardım.json");
exports.run = async(client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Lütfen footer yaz!');

    db.set(`yardımfooter`, mesaj)
    return message.channel.send('Ayarlandı!')

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "sahip-yardım-footer"
    
    };
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./yardım.json");
exports.run = async(client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Lütfen başlığı yaz!');

    db.set(`yardımbaşlık`, mesaj)
    return message.channel.send('Ayarlandı!')

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "sahip-yardım-başlık"
    
    };
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./yardım.json");
exports.run = async(client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Lütfen açıklamayı yaz!');

    db.set(`yardımaçıklama`, mesaj)
    return message.channel.send('Ayarlandı!')

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "sahip-yardım-açıklama"
    
    };
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`Merhaba botunuzun yardım menüsünü komutla ayarlamak artık çok kolay! \n \n -yardım-başlık ile başlığı ayarla! \n !yardım-açıklama ile açıklamayı ayarla! \n !yardım-footer ile altyazıyı ayarla! \n\n Sıfırlamak için -yardım sıfırla`)
message.channel.send(embed)

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 4


};
exports.help = {
    name : "sahip-yardım"
    
    };
