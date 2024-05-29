const Discord = require('discord.js');

class VerificationSystem {
  constructor(client) {
    this.client = client;
  }

  init() {
    this.client.on('message', (message) => {
      if (message.content === '!verify') {
        this.verifyUser(message.author);
      }
    });
  }

  verifyUser(user) {
    const verificationRole = user.guild.roles.cache.find(role => role.name === 'Verified');
    if (!verificationRole) {
      return console.log('Verification role not found');
    }

    user.roles.add(verificationRole)
      .then(() => console.log(`Verified user: ${user.username}`))
      .catch(error => console.error(`Error verifying user: ${error}`));
  }
}

module.exports = VerificationSystem;