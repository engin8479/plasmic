client.on('message', async msg => {
  let prefix = ayarlar.prefix 
const embed = new discord.MessageEmbed()
.setTitle('Başlık')
.setDescription('ne yazmasını istiyosanız')
.setColor('RANDOM')
  if(msg.content == `<@!botidiburaya>`) return msg.channel.send(embed);
});
//
client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!botidiburaya>`) return msg.channel.send(`Ne yazmasını istiyor iseniz`);
});
[13:16]
