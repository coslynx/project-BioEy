const Discord = require('discord.js');

module.exports = {
  assignRole: function (member, role) {
    if (!member || !role) {
      return console.error('Invalid member or role provided');
    }

    if (member.roles.cache.has(role.id)) {
      return console.log('Member already has the role');
    }

    member.roles.add(role)
      .then(() => console.log(`Role ${role.name} added to ${member.user.tag}`))
      .catch((error) => console.error('Error assigning role:', error));
  },

  removeRole: function (member, role) {
    if (!member || !role) {
      return console.error('Invalid member or role provided');
    }

    if (!member.roles.cache.has(role.id)) {
      return console.log('Member does not have the role');
    }

    member.roles.remove(role)
      .then(() => console.log(`Role ${role.name} removed from ${member.user.tag}`))
      .catch((error) => console.error('Error removing role:', error));
  },

  modifyRole: function (member, oldRole, newRole) {
    if (!member || !oldRole || !newRole) {
      return console.error('Invalid member or roles provided');
    }

    if (!member.roles.cache.has(oldRole.id)) {
      return console.log('Member does not have the old role');
    }

    member.roles.remove(oldRole)
      .then(() => console.log(`Role ${oldRole.name} removed from ${member.user.tag}`))
      .then(() => {
        member.roles.add(newRole)
          .then(() => console.log(`Role ${newRole.name} added to ${member.user.tag}`))
          .catch((error) => console.error('Error adding new role:', error));
      })
      .catch((error) => console.error('Error removing old role:', error));
  }
};