const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'funnsfw',
    description: "fun menu NSFW",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
  .setTitle("Fun Commands NSFW")
  .setDescription(`
**Penis**        
<:discordreply:933536614582480897>Displays a users penis size.      
**Fuck**          
<:discordreply:933536614582480897>Fuck a user from the back.        
`)
 .setThumbnail("https://i.ibb.co/1XqNzHD/astro-Fun2.png")
 .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
