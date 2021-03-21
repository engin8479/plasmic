client.on("message", async msg => {
  const Database = require("plasma-db");
  const db = new Database("./database.json"); 
    const gereksiz = await db.fetch(`komutsistem_${msg.guild.id}`);
    let engin = db.fetch(`komut_${msg.guild.id}`)
    let enginar = db.fetch(`komutrol_${msg.guild.id}`)
    if (gereksiz === "aktif") {
      if (
        msg.content.toLowerCase() == `!${engin}`
      )
      {
  msg.channel.send('Rolü verdim!')
  msg.member.roles.add(enginar)
      }
      } else if (gereksiz === "deaktif") {
    }
    if (!gereksiz) return;
  });
//
const discord = require('discord.js');
const Database = require("plasma-db"); 
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
if(args[0] == "rol-ayarla") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen rol belirt!')
db.set(`komutrol_${message.guild.id}`, engin.id)
return message.channel.send('Komut rol ayarlandı!')
}
if(args[0] == "ayarla") {
let engin = args[1]
if(!engin) return message.channel.send('Lütfen komut ismini belirt!')
db.set(`komut_${message.guild.id}`, engin)
return message.channel.send(`${engin} olarak ayarlandı!`)
}
if(args[0] == "aç") {
    let engin = db.fetch(`komutrol_${message.guild.id}`)
    if(!engin) return message.channel.send('Sistem ayarlı değil lütfen komut rol ayarla!')
   let enginar = db.fetch(`komut_${message.guild.id}`)
    if(!enginar) return message.channel.send('Sistem aktif değil lütfen komut ismini ayarla!')
db.set(`komutsistem_${message.guild.id}`, "aktif")
return message.channel.send('Başarı ile açıldı!')
}
if(args[0] == "sıfırla") {
    let engin = db.fetch(`komutsistem_${message.guild.id}`)
    if(!engin) return message.channel.send('sistem zaten kapalı!')
db.delete(`komutsistem_${message.guild.id}`)
db.delete(`komut_${message.guild.id}`)
db.delete(`komutrol_${message.guild.id}`)
return message.channel.send('Sıfırlandı!')
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permlvl: 0
}

exports.help = {
    name: "komut"
}
