const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {

  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, 'aktif')
    message.channel.send(`sa-as sistemi başarı ile açıldı bundan sonra biri sa diyince as şeklinde cevap vereceğim kapatmak istersen m.sa-as kapat`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saas_${message.guild.id}`, 'deaktif')
    message.channel.send(`sa-as sistemi başarı ile kapatıldı artık biri sa diyince as şeklinde cevap vermeyeceğim geri açmak istersen m.sa-as aç.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['saas'],
  permLevel: 0
};
 
exports.help = {
  name: 'sa-as'
};
//
client.on("message", async msg => {
const Database = require("plasma-db");
const db = new Database("./database.json"); 
  const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
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
        return msg.reply("Aleyküm selam hoşgeldin nasılsın?");
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});
