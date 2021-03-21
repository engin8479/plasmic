const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
 
  if (args[0] === 'aç') {
    
    db.set(`bakım`, 'aktif')
    message.channel.send(`Bakım modu açıldı!`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`bakım`, 'deaktif')
    message.channel.send(`Bakım modu kapatıldı!`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakımmodu'],
  permLevel: 5 // bot sahibi permine ayarlayın mainde ve ya message.js dedir bende 5 bot sahibi
};
 
exports.help = {
  name: 'bakım-modu'
};
//
   if(db.fetch(`bakım`) == "aktif") return message.channel.send('Bakımdayım!')
