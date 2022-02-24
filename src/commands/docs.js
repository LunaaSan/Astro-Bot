const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'docs',
    description: "docs menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("Error!")
  .setDescription(`
It looks like Astro-Bot doesn't have this command yet, please check back later!
`)
        .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
.setColor("65409d")
.setThumbnail("https://i.ibb.co/HNf3QhW/astro-Error.png")
         message.channel.send( { embeds:[ embed ] } )
    }
}
