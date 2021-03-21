const Discord = require('discord.js');
const db = require('narcos-db');
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`everhere_${message.guild.id}`, 'aktif')
    message.channel.send(`Ever here engel sistemi başarı ile açıldı!`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`everhere_${message.guild.id}`, 'deaktif')
    message.channel.send(`Ever here engel sistemi başarı ile kapatıldı!`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'ever-here-engel'
};
//
client.on("message", async msg => {
  const gereksiz = await db.fetch(`everhere_${msg.guild.id}`);
  if (gereksiz === "aktif") {
    if (
      msg.content.toLowerCase() == "@here" ||
      msg.content.toLowerCase() == "@everyone"
    )
        msg.delete()
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});
