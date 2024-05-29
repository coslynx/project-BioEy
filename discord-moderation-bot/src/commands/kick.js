const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick a member from the server',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply('You do not have permission to kick members.');
        }

        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        message.reply('I was unable to kick the member');
                        console.error(err);
                    });
            } else {
                message.reply('That user is not in this server');
            }
        } else {
            message.reply('You need to mention a user to kick');
        }
    },
};