const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu Komutu Kullanabilmek İçin **KANALLARI YÖNET** Yetkisine Sahip Olman Gerek.");
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir kanal patladı!')
.setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif')
.setFooter(`Nuke atan: ${message.author.id}`)
knl.send(embed)
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturur.',
  usage: 'nuke'
};
[15:33]
