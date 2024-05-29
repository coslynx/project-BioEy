const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: 'Warn a user for their behavior.',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply('You do not have permission to use this command.');
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('You need to mention a user to warn.');
        }

        const reason = args.slice(1).join(' ');
        if (!reason) {
            return message.reply('You need to provide a reason for the warning.');
        }

        const warnEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('User Warned')
            .setDescription(`**${user.tag}** has been warned by **${message.author.tag}**`)
            .addField('Reason', reason);

        const warnChannel = message.guild.channels.cache.find(channel => channel.name === 'warnings');
        if (!warnChannel) {
            return message.reply('Could not find a channel for warnings. Please create a channel named "warnings"');
        }

        warnChannel.send(warnEmbed);
    }
};