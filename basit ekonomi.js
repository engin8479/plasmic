const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
const slots = ['1','10','5','100','5000','3000','2000','1000','360','2670','5100','1670','1690']
exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];


    if (slot1) {
        message.channel.send(`

        ${slot1} Kazandın
        `);
        db.ekle(`para_${message.author.id}`, slot1)
    } else {
        message.channel.send(`
        ${slots}

        Kaybettin
        `);
        db.cikar(`para_${message.author.id}`, slots)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slots'],
  permLevel: 0
};

exports.help = {
  name: 'slots',
  description: 'Slots oyunu oynatır',
  usage: 'slots'
};
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
exports.run = async(client, message, args) => {
let enginar = db.al(`para_${message.author.id}`) 
message.reply(`Toplam paran ${enginar}`); 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'param'
};
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./ekonomi.json"); 
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
if (talkedRecently.has(message.author.id)) {
    return message.reply("``Bu komutu kullanabilmek için 1 gün beklemelisin!``");
} else {
 talkedRecently.add(message.author.id);
 setTimeout(() => {
 message.delete();
   talkedRecently.delete(message.author.id);
 }, 86400);
}
    message.reply('Başarı ile günlük ödülünü aldın!'); 
db.ekle(`para_${message.author.id}`, 3000) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'günlük'
};
