const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const engin = new Discord.MessageEmbed()
    .setDescription("Saat şu an ↓")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`→`)
  message.channel.send(engin);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"saat"
}
