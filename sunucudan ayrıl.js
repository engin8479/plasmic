const Discord = require("discord.js");
exports.run = async(client, message, args) => {
  let enginar = "649169975269130275"
  if(message.author.id !== enginar) return message.channel.send('Bu sahibimin komutu!')
let engin = args[0]
if(!engin) return message.channel.send('Lütfen çıkmamı istediğiniz sunucunun idini girin.')
client.guilds.cache.get(engin).leave()
return message.channel.send('Sunucudan başarı ile ayrıldım!')
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sunucudan-ayrıl"
};
