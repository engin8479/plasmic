const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen rol log kanalını belirtiniz!')
db.set(`rollog_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Rol log kanalını <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`rollog_${message.guild.id}`)
return message.channel.send('Rol log kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-log'
};
//
client.on("guildMemberRoleAdd", (member, role) => {
const { Database } = require('nukleon');
const db = new Database("plasmic.json")

  let log = db.fetch(`rollog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle(member.user.username + ' adlı kişiye rol verildi!')
  .setDescription(`__**KİŞİ BİLGİLERİ**__ \n \n Kişi: <@${member.id}> \n \n idi: ${member.id}  \n \n __**ROL BİLGİLERİ**__ \n \n Rol: <@&${role.id}> \n \n Rol id: ${role.id} \n \n Rol ismi: ${role.name}`) 
  client.channels.cache.get(log).send(embed)
});
client.on("guildMemberRoleRemove", (member, role) => {
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
  let log = db.fetch(`rollog_${member.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle(member.user.username + ' adlı kişiden rol alındı!')
  .setDescription(`__**KİŞİ BİLGİLERİ**__ \n \n Kişi: <@${member.id}> \n \n idi: ${member.id}  \n \n __**ROL BİLGİLERİ**__ \n \n Rol: <@&${role.id}> \n \n Rol id: ${role.id} \n \n Rol ismi: ${role.name}`) 
  client.channels.cache.get(log).send(embed)
});
