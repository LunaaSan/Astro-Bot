const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'fun',
    description: "fun menu SFW",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("Fun Commands SFW")
 .setDescription(`

**.iq**
<:discordreply:933536614582480897> Displays a users IQ.
**.rate**
<:discordreply:933536614582480897> Shows a users attractiveness.
**.lovecalc**
<:discordreply:933536614582480897> Displays love % between users.
**.kiss**
<:discordreply:933536614582480897> Kiss a user.
**.hug**
<:discordreply:933536614582480897> Hug a user.
**.slap**
<:discordreply:933536614582480897> Slap a user.
**.feed**
<:discordreply:933536614582480897> Feed a user.
**.pet**
<:discordreply:933536614582480897> Pet a user.
**.gay**
<:discordreply:933536614582480897> See how gay a user is.

For NSFW do **.funnsfw**`)
.setThumbnail("https://i.ibb.co/CmYYSFf/astrofun.png")
.setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
 .setColor("65409d")
         message.channel.send( { embeds:[ embed ] } )
    }
}
