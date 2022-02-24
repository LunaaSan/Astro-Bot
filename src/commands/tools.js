const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'tools',
    description: "tools menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
       .setTitle("<:staffbadge:941084559682965504> Tool Commands")
  .setDescription(`
These commands in beta!
`)
.addFields(
  { name: 'ㅤ', value: `
**.afk		**              
<:discordreply:933536614582480897>         Set an AFK status to display when you are mentioned.	       
**.avatar	**
<:discordreply:933536614582480897>           Get the avatar of yourself or another user.	                  
**.botlist**	
<:discordreply:933536614582480897>             Gets the Carbonitex bot list ordered by server counts.        
**.color  **    
<:discordreply:933536614582480897>               Show a color using the hex code.	                            
**.discrim **     
<:discordreply:933536614582480897>                 Gets a list of users matching a discriminator.	              
**.distance **      
<:discordreply:933536614582480897>                   Get the distance between two sets of coordinates.	           
**.emotes **          
<:discordreply:933536614582480897>                     Get a list of server emojis.	          `, inline: true },                     
  { name: 'ㅤ', value: `
**.inviteinfo**         
<:discordreply:933536614582480897>                       Get information about a Discord invite.	                      
**.membercount**        	
<:discordreply:933536614582480897>                         Get the membercount of the current server.	                  
**.randomcolor**        	
<:discordreply:933536614582480897>                           Generates a random hex color with a preview.	  `, inline: true },                
  { name: 'ㅤ', value: `
    **.remindme**           	
<:discordreply:933536614582480897>                             Set a reminder.	                                              
**.roll**              
<:discordreply:933536614582480897>                               Roll a dice.	                                                
**.rps   **             
<:discordreply:933536614582480897>                                 Play rock, papers, scissors with the bot.	                    
**.serverinfo**        
<:discordreply:933536614582480897>                                   Get information about the current server.	                    
**.whois**             
<:discordreply:933536614582480897>                                     Get information about a user.	          `, inline: true }   )                   

        .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setThumbnail("https://i.ibb.co/q7BnS1N/astro-Tools.png")
.setColor("65409d")
         message.channel.send( { embeds:[ embed ] } )
    }
}
