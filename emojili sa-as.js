client.on("message", async msg => {
    const gereksiz = await db.fetch(`saase_${msg.guild.id}`);
    if (gereksiz === "aktif") {
      if (
        msg.content.toLowerCase() == "selam" ||
        msg.content.toLowerCase() == "selamun aleyküm" ||
        msg.content.toLowerCase() == "s.a" ||
        msg.content.toLowerCase() == "sea" ||
        msg.content.toLowerCase() == "sa" ||
        msg.content.toLowerCase() == "selamm" ||
        msg.content.toLowerCase() == "saa" ||
        msg.content.toLowerCase() == "saaa"
      )
      await msg.react('🇦');
      await msg.react('🇸');
    } else if (gereksiz === "deaktif") {
    }
    if (!gereksiz) return;
  });
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`saase_${message.guild.id}`, 'aktif')
    message.channel.send(`Emojili sa-as açıldı.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saase_${message.guild.id}`, 'deaktif')
    message.channel.send(`Emojili sa-as kapatıldı.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'emojili-sa-as'
};
