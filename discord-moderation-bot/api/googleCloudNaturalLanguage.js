const { google } = require('googleapis');

const language = google.language({
  version: 'v1',
  auth: 'YOUR_GOOGLE_CLOUD_API_KEY'
});

function analyzeText(text) {
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  language.documents.analyzeEntities({ document: document }, (err, response) => {
    if (err) {
      console.error('The API returned an error:', err);
      return;
    }
    const entities = response.data.entities;
    if (entities.length) {
      console.log('Entities:');
      entities.forEach(entity => {
        console.log(` - Name: ${entity.name}`);
        console.log(` - Type: ${entity.type}`);
      });
    } else {
      console.log('No entities found.');
    }
  });
}

module.exports = {
  analyzeText,
};