client.on("channelDelete", async function(channel) {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const gereksiz = await db.fetch(`kanalkoruma_${channel.guild.id}`);
  if(gereksiz){
    let engin2 = db.fetch(`kanalkorumalog_${channel.guild.id}`)
    let kanal = channel.parentID;
  let position = kanal.position;
  channel.clone().then(engin => {
    engin.setPosition(position);
    channel.guild.owner.send(`<@${user.id}> adlı kişinin sildiği ${engin.name} adlı kanal kanal koruma sisteminin açık olması nedeni ile geri açıldı!`)
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir kanal silindi!')
    .setDescription(`<@${user.id}> adlı kişinin sildiği <#${engin.id}> adlı kanal tekrar açıldı ve bu davranışı güvenlik nedeni ile sunucu sahibine bildirildi!`)
client.channels.cache.get(engin2).send(embed)
    engin.send(`<@${user.id}> adlı kişinin sildiği kanal kanal koruma sisteminin açık olması nedeni ile tekrardan açıldı!`)
  });
  };
  });
//
const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
if(args[0] == "aç") {
let engin = db.fetch(`kanalkorumalog_${message.guild.id}`)
if(!engin) return message.channel.send('Kanal koruma log kanalı ayarlanmamış!')
db.set(`kanalkoruma_${message.guild.id}`, 'aktif')
const embed = new discord.MessageEmbed()
.setTitle('Sistem aktifleştirildi!')
.setDescription(`<@${message.author.id}> kanal koruma sistemini ${message.guild.name} adlı sunucuda aktifleştirdi!`)
.setColor('RANDOM')
client.channels.cache.get(engin).send(embed)
return message.channel.send('Kanal koruma başarı ile aktif edildi!')
};
if(args[0] == "log") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen log kanalını belirtin')
db.set(`kanalkorumalog_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
const embed = new discord.MessageEmbed()
.setTitle('Kanal koruma log kanalı ayarlandı!')
.setDescription(`<@${message.author.id}> bu kanalı kanal koruma log kanalı olarak ayarladı!`)
.setColor('RANDOM')
client.channels.cache.get(engin.id).send(embed)
return message.channel.send(`Kanal koruma log kanalı başarı ile <#${engin.id}> olarak ayarlandı!`)
};
if(args[0] == "sıfırla") {
    let engin2 = db.fetch(`kanalkoruma_${message.guild.id}`)
    if(!engin2) return message.channel.send('Sistem zaten aktif değil!')
    let engin = db.fetch(`kanalkorumalog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle(`Kanal koruma sistemi sıfırlandı!`)
    .setDescription(`<@${message.author.id}> kanal koruma sistemini sıfırladı!`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed)
db.delete(`kanalkoruma_${message.guild.id}`)
db.delete(`kanalkorumalog_${message.guild.id}`)
return message.channel.send('Kanal koruma sistemi başarı ile sıfırlandı!')
};
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "kanal-koruma"
        };
