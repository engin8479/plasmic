const discord = require('discord.js');
const bt = require('best-tools');
exports.run = async(client, message, args) => {
  let plasmic = args[0]
  if(!plasmic) return message.channel.send('Lütfen en yüksek sayısı belirtiniz(Arada boşluk bırakmayın)')
  let engin = args[1]
  if(!engin) return message.channel.send('Sayı **pozitif** mi olsun **negatif** mi?')
message.channel.send(bt.rastgele(plasmic, engin))


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sayı-öner' 
  };
