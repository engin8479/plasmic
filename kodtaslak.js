const discord = require('discord.js') //discordu tanımladık
const db = require('quick.db') //kullanacağımız verileri kaydedecek db yi tanımladık

exports.run = async(client, message,args) => { / yazdık ve koda başlayalım

//taslak

const embed = new discord.MessageEmbed() //embedi tanımladık
.setTitle('başlık')
.setDescription('açıklama')
.addField('içerik')
.setColor('#f000') //renk kodu RANDOM da yazabilirsiniz
.setİmage('link') //resim
.setURL('başlığa url vermek için url yazın')
message.channel.send(embed) // bu şekilde embedi atmasını sağladık
//sırada kodun bilgileri
};
exports.conf = {
enabled: true, //komutun aktifliği(true/false)
guildOnly: false, //sunucuya özel mi (true/false)
permLevel: 0,  //kimler kullanabilir message.js de ya da main dosyanızda permler yazar herkesin kullanmasını isterseniz 0 yazın
aliases: ["komutun 2. isminı yazın", "3.isim diye gidiyor"]
};
exports.help = {
name: "komutun ismi"
};
//kolay gelsin
