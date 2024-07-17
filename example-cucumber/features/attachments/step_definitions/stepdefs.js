const fs = require('fs');
const path = require('path');
const { When } = require('@cucumber/cucumber');

When('I report attachment with type {string} and {string}', function(type, filePath, callback) {
  fs.readFile(path.resolve(__dirname, '../files', filePath), (err, data) => {
    if (err) {
      throw err;
    }
    // add attachment for step
    this.attach(
      JSON.stringify({
        message: `Attachment with ${type}`,
        level: 'INFO',
        data: data.toString('base64'),
      }),
      type,
    );
    // add attachment for launch
    this.attach(
      JSON.stringify({
        message: `Attachment with ${type}`,
        level: 'INFO',
        data: data.toString('base64'),
        entity: 'launch',
      }),
      type,
    );
    // add attachment for scenario
    this.attach(
      JSON.stringify({
        message: `Attachment with ${type}`,
        level: 'INFO',
        data: data.toString('base64'),
        entity: 'scenario',
      }),
      type,
    );
    callback();
  });
});
