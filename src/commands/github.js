const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

// <:discord_reply_continue:933538509904551987>
// <:discordreply:933536614582480897>

module.exports = {
    name: 'github',
    description: "displays github menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#65409d")
      .setTitle("Github Repo") 
      .setDescription(` 

**Link**
<:discordreply:933536614582480897> 

**!Important!**
<:discordreply:933536614582480897> We will not help you with setting up/hosting Astro-Bot on your own, we will also not help if any errors occur with code or by your own doing!

**Star**
<:discordreply:933536614582480897> If you view or use the src from Astro-Bot make sure to star the repo!

`)
        
      .setThumbnail("https://i.ibb.co/r04fvTr/star.png")
      .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
         message.channel.send( { embeds:[ embed ] } )
    }
}
