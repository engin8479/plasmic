const Discord = require('discord.js');
 
exports.run = async(client, message, args) => {
    var saane = ["Bacaktaki 10' a ne denir? \n Pantolon", "Yıkanan ton balığına ne denir? \n Washington","Gülen ördeğe ne denir? \n Kıkır-duck","Örümcek adam ağ atamıyormuş neden? \n ÇÜNKÜ AĞ BAĞLANTISI KOPMUŞ.","En çok eşek yavrusu nerde bulunur? \n SPA MERKEZİNDE","Kırmızı giyen erkeğe ne denir? \n ALBAY","İneklerin sevmediği element? \n AZ-OT","Dört tarafı suyla çevrili çaya ne denir? \n ADAÇAYI", "Pişmemiş burgere ne denir?","HAMBURGER"]
    var enginarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr = saane[Math.floor(Math.random() * saane.length)];
      message.channel.send(`${enginarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'espri'
};
