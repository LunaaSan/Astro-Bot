const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

// <:discord_reply_continue:933538509904551987>
// <:discordreply:933536614582480897>

module.exports = {
    name: 'help',
    description: "Help menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#65409d")
      .setTitle("General Help") 
      .setDescription(` 

**.help**
<:discordreply:933536614582480897> Displays the bots commands (current command)
**.fun**
<:discordreply:933536614582480897> Displays all Fun commands
**.moderation**
<:discordreply:933536614582480897> Displays all Moderation commands
**.tools**
<:discordreply:933536614582480897> Displays all Tool commands
**.misc**
<:discordreply:933536614582480897> Displays all Misc commands
**.botinfo**
<:discordreply:933536614582480897> Displays information about the bot (recommended)

───────────── ⋆⋅☆⋅⋆ ───────────── 
View the changelog on our github repo`)
      .setThumbnail("https://i.ibb.co/d2cDffy/astrologo.png")
      .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}
