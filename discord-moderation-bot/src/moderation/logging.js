const fs = require('fs');

const logAction = (action, user, reason) => {
    const logEntry = `${new Date().toLocaleString()} - ${action} by ${user} - Reason: ${reason}\n`;
    
    fs.appendFile('moderation.log', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file: ', err);
        }
    });
};

module.exports = {
    logAction
};