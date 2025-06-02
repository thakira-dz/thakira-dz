const fs = require('fs');
const translate = require('@vitalets/google-translate-api');

// Read the original TODO.md
const input = fs.readFileSync('TODO.md', 'utf8');

// Translate content to Arabic
translate(input, { to: 'ar' })
  .then(res => {
    fs.writeFileSync('TODO.ar.md', res.text, 'utf8');
    console.log('✅ Translated file saved as TODO.ar.md');
  })
  .catch(err => {
    console.error('❌ Translation failed:', err);
    process.exit(1);
  });

