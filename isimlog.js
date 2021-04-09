const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen isim log kanalını belirtiniz!')
db.set(`isimlog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`İsim log kanalı <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`isimlog_${message.guild.id}`)
return message.channel.send('İsim log kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'isim-log'
};
//
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`isimlog_${user.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir kullanıcı adını değiştirdi!')
  .setDescription(`__**KİŞİ BİLGİLERİ**__  \n \n Kişi: <@${user.id}> \n \n idi: ${user.id} \n \n __**İSİM BİLGİLERİ**__ \n \n Eski isim: ${oldUsername} \n \n Yeni isim: ${newUsername}`)
client.channels.cache.get(log).send(embed)
});
