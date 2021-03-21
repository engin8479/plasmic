const Discord = require('discord.js')
exports.run = async(client, message, args) => {
    let engin = args[0]
    if(!engin) return message.channel.send('Lütfen mesaj atmak istediğin kişinin idini belirt!')
    let enginar = args[1]
    if(!enginar) return message.channel.send('Lütfen mesajı belirt!')
    const embed = new Discord.MessageEmbed()
    .setTitle('Sahibimden bir mesaj geldi!')
    .setDescription(`Sahibim <@${message.author.id}> sana bir mesaj gönderdi! \n \n Mesaj: ${enginar}`)
    client.users.cache.get(engin).send(embed)
    return message.channel.send('Mesaj başarı ile gönderildi!')
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mesajat'],
    permlvl: 5 // sahip permi ayarlayın
}

exports.help = {
    name: "mesaj-at"
}
