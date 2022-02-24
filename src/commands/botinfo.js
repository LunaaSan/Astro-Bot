const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'botinfo',
    description: "bot info menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("Bot Information")
 .setDescription(`

**.support**
<:discordreply:933536614582480897> Displays the support menu!
**.docs**
<:discordreply:933536614582480897> Displays documention for the bot!
ㅤ
**.github**
<:discordreply:933536614582480897> Displays the github repo for the bot.
**.credits**
<:discordreply:933536614582480897> Displays the Credits of who made the bot!
**.lunaa**
<:discordreply:933536614582480897> Displays Lunaa personal credit menu!
ㅤ
`)
        .addFields(
        { name: 'Bot language', value: 'JavaScript', inline: true },
        { name: 'Bot Website', value: 'Coming soon...', inline: true },
    )
.setThumbnail("https://i.ibb.co/44M98fs/astro-Docs2.png")
.setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
