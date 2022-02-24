const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lunaa',
    description: "lunaas menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("<:discord_ownerbadge:942309281594753097> Abt Lunaa")
  .setDescription(`
       **Discord**
       <:discord_reply_continue:933538509904551987> Not Lunaa#4776 
       <:discordreply:933536614582480897> ID > 929840249348190340

       **Server** 
       <:discordreply:933536614582480897> https://discord.gg/k2vJM5NvXa

`)
   .addField("ㅤ ㅤ", `
      **Doxbin**
      <:discord_reply_continue:933538509904551987> https://doxbin.com/user/values
      <:discordreply:933536614582480897> https://doxbin.com/user/maisan
       **Github** 
        <:discordreply:933536614582480897> https://github.com/LunaaSan
       **Website**
       <:discordreply:933536614582480897> https://bit.ly/LunaaPortfolio `)

        .setTimestamp()
         .setFooter({ text: 'Made with ♡ by Lunar Network', iconURL: '' })
.setThumbnail("https://i.ibb.co/hgRW3qR/astro-Owner1.png")
.setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
