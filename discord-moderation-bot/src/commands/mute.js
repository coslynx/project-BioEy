const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'Mute a user in the server',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.reply('You do not have permission to use this command');
        }

        const target = message.mentions.users.first();
        if (!target) {
            return message.reply('Please specify a user to mute');
        }

        const member = message.guild.members.cache.get(target.id);
        if (member) {
            let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if (!mutedRole) {
                mutedRole = message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: []
                    }
                });
            }

            member.roles.add(mutedRole).then(() => {
                message.channel.send(`${target} has been muted`);
            });
        } else {
            message.reply('That user is not in this server');
        }
    },
};