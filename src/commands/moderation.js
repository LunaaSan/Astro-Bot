const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

// <:discord_reply_continue:933538509904551987>
// <:discordreply:933536614582480897>


module.exports = {
    name: 'moderation',
    description: "moderation menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("<:modbadge:941084498525823017> Moderation Commands")
 .setDescription(`
These commands are in beta!
`)

.addFields(
		{ name: 'ㅤ', value: ` 
   **.ban**
  <:discordreply:933536614582480897> Ban a member. 
  **.case**
  <:discordreply:933536614582480897> Show a single moderation case. 
  **.clean**
  <:discordreply:933536614582480897> Cleanup the bot responses.  
  **.clearnotes**
  <:discordreply:933536614582480897> Cleans amount of notes. 
  **.deafen**
  <:discordreply:933536614582480897> Deafen a member.                       
  **.delnote**
  <:discordreply:933536614582480897> Delete a single note about a member.    
  **.diagnose**
<:discordreply:933536614582480897> Diagnose any command or module in the bot to determine if there are any problems.`, inline: true },

{ name: 'ㅤ', value: `**.duration**
<:discordreply:933536614582480897> Change the duration of a timed punishment.  
**.editnote**
<:discordreply:933536614582480897> Edit a note about a member.               
**.ignored**
<:discordreply:933536614582480897> List ignored channels, roles and users. 
**.kick**
<:discordreply:933536614582480897> Kick a member.                                
**.lock**          
<:discordreply:933536614582480897> Lock a channel. 
**.nembers**       
<:discordreply:933536614582480897> List members in a role or roles.   
**.moderations**   
<:discordreply:933536614582480897> Get a list of active timed moderations and remaining time.   `, inline: true },
{ name: 'ㅤ', value: `**.modlogs**       
<:discordreply:933536614582480897> Get a list of moderation logs for a user.                                        
**.modstats**      
<:discordreply:933536614582480897> Get moderation statistics for a mod/admin (may take up to 30 minutes to update). 
**.rolepersist**   
<:discordreply:933536614582480897> Assign/unassign a role that persists if the user leaves and rejoins.             
**.softban **      
<:discordreply:933536614582480897> Softban a member (ban and immediately unban to delete their messages).           
`, inline: true },
{ name: 'ㅤ', value: `**.mute**          
<:discordreply:933536614582480897> Mute a member so they cannot type.                                               
**.note**          
<:discordreply:933536614582480897> Add a note about a member.                                                    
**.notes**         
<:discordreply:933536614582480897> Get notes for a user.                                                            
**.reason**        
<:discordreply:933536614582480897> Supply a reason for a moderation log case.`, inline: true },
{ name: 'ㅤ', value: `**.star**          
<:discordreply:933536614582480897> View Starboard stats for a message.                                            
**.temprole**      
<:discordreply:933536614582480897> Assign/unassign a role for a limited time that persists if the user leaves and rejoins.	
**.unban**         
<:discordreply:933536614582480897> Unban a member.	       `, inline: true },
{ name: 'ㅤ', value: `**.undeafen**      
<:discordreply:933536614582480897> Undeafen a member. 	                                                             
**.unlock**       
<:discordreply:933536614582480897> Unlock a channel. 	                                                            
**.unmute**        
<:discordreply:933536614582480897> Unmute a member. 	                                                              
**.warn**          
<:discordreply:933536614582480897> Warn a member. 	                                                                  
**.warninglogs**   
<:discordreply:933536614582480897> Get warnings for a user. 	      `, inline: true },
)

.setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setThumbnail("https://i.ibb.co/6P32VkJ/admin.png")
 .setColor("65409d")
         message.channel.send( { embeds:[ embed ] } )
    }
}

