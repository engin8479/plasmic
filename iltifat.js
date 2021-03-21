const Discord = require('discord.js');
 
exports.run = async(client, message, args) => {
    var saane = ["Mucizelerden bahsediyordum. Tam o sırda gözlerin geldi aklıma.", "çok güzelsin","çok yakışıklısın","Seni gördüm günüm aydı.","Sen gülünce gülmemek elde değil.","Yağmurdan sonra açan gök kuşağı gibisin, öyle güzel ve özel","Işığınla gecemi aydınlatıyorsun.","Sen bu hayatta güvendiğim nadir insanlardan bir tanesisin. Senin söylediğin her söze itimadım var."]
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
  name: 'iltifat'
};
