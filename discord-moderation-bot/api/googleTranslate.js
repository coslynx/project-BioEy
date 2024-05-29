const googleTranslate = require('google-translate-api');

module.exports = {
  translateText: async (text, targetLanguage) => {
    try {
      const res = await googleTranslate(text, { to: targetLanguage });
      return res.text;
    } catch (error) {
      console.error('Error translating text:', error);
      return null;
    }
  }
};