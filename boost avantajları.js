const Discord = require("discord.js");

exports.run = async (client, message, args) => {//enginar
  
  let embed = new Discord.MessageEmbed()
  .addField(':beginner: **BOOST AVANTAJLARI :beginner:**',`
  **\n AVANTAJ**
  **\n AVANTAJ**
  **\n AVANTAJ**
  **\n AVANTAJ**
  **\n AVANTAJ**
  **\n AVANTAJ**
  **\n AVANTAJ**`)
  .setColor("RANDOM")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boost-avantajları",
  description: "",
  usage: ""
};
