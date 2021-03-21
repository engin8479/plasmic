client.on("messageDelete", async message => {
  let engin = db.fetch(`mesajlog_${message.guild.id}`)
  if(!engin) return;
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Bir mesaj silindi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Silen kişi: <@${message.author.id}> \n Silen kişinin idi: ${message.author.id} \n \n __**Kanal Bilgileri**__ \n Silinen Kanal: <#${message.channel.id}> \n Silinen Kanalın idi: ${message.channel.id} \n \n __**Mesaj Bilgileri**__ \n Silinen mesaj: ${message.content} \n Silinen Mesajın İdi: ${message.id}`)
  .setColor('RANDOM')
 client.channels.cache.get(engin).send(embed2)
})

//
client.on("messageUpdate", async (oldMessage, newMessage) => {
  let engin = db.fetch(`mesajlog_${oldMessage.guild.id}`)
  if(!engin) return;
  if(oldMessage.author.bot) return;
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir mesaj düzenlendi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Düzenleyen kişi: <@${oldMessage.author.id}> \n Düzenleyen kişinin idi: ${oldMessage.author.id} \n \n __**Kanal Bilgileri**__ \n Düzenlenen Kanal: <#${oldMessage.channel.id}> \n Düzenlenen kanalın idi: ${oldMessage.channel.id} \n \n __**Mesaj Bilgileri**__ \n Düzenlenen mesaj: ${oldMessage.content} \n Düzenlenen mesajın yeni hali: ${newMessage.content} \n Düzenlenen mesajın idi: ${oldMessage.id} \n [Düzenlenen mesaja gitmek için tıkla](${oldMessage.url})`)
  .setColor('RANDOM')
  client.channels.cache.get(engin).send(embed)
  

});
//
const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
    let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen Mesaj log kanalını belirt!')
    db.set(`mesajlog_${message.guild.id}`, enginar.id)
    return message.channel.send(`Mesaj log kanalı başarı ile <#${enginar.id}> olarak ayarlandı!`)

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 2


};
exports.help = {
    name : "mesaj-log"
    
    };
