const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'credits',
    description: "credits menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("Bot Credits")
 .setDescription(`

**Bot Coder**
<:discordreply:933536614582480897> Not Lunaa#4776
**Helper**
<:discordreply:933536614582480897> offtop#5704

**Discord Server**
<:discordreply:933536614582480897> https://discord.gg/k2vJM5NvXa
ㅤ
`)
.setThumbnail("https://i.ibb.co/tJKBThB/iangoing.png")
.setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
