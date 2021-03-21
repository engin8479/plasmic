const Discord = require('discord.js');
const db = require('narcos-db');

exports.run = async (client, message, args) => {

     

let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Jailleyeceğim kişiyi yaz!')

let oo = message.member
setTimeout(function(){oo.roles.add(db.fetch(`jailrol_${message.guild.id}`))},5000)
oo.setNickname(`JAİLLENMİŞ`)
return message.channel.send('Kullanıcı başarı ile jaillendi!')
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
}

exports.help = {
  name: 'jail',

}
//
const discord = require('discord.js');
const db = require('narcos-db');
exports.run = async(client, message, args) =>  {
let jailrol = message.mentions.roles.first()
if(!jailrol) return message.channel.send('Lütfen bir rol belirt!')

db.set(`jailrol_${message.guild.id}`, jailrol.id)
return message.channel.send(`Jail rolü başarı ile <@&${jailrol.id}> olarak ayarlandı`)


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 4,
    aliases: ["jailrol"]
     };
     exports.help = {
    name: "jail-rol"
     };
