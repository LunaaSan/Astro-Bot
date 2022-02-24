const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'support',
    description: "support menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("Bot Support")
 .setDescription(`

**Command Usage**
<:discordreply:933536614582480897> Type in [.CommandYouWant] & it should be displayed for you.
ㅤ
**I don't understand the github repo**
<:discord_reply_continue:933538509904551987> The github displays our Astro-Bot's src and information about it.
<:discordreply:933536614582480897> If you want to download our bot and dont understand please, learn basic knowledge about discord.js/node.js We will not help you download our bot's github repo.
ㅤ
**Support Server**
<:discordreply:933536614582480897> https://discord.gg/rR2hQJCTch
ㅤ
**Command not working**
<:discordreply:933536614582480897> If a command you put it comes back with a error, it means we haven't added that command yet, you can full the list of commands we have on the github repo.
ㅤ
`)
.setThumbnail("https://i.ibb.co/ZmJHzRg/astro-Support.png")
.setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
