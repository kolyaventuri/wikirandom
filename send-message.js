const sendkeys = require('sendkeys');

const sendMessage = text => {
  sendkeys(text)
    .then(() => {
      sendkeys('{ENTER}');
    });
};

module.exports = {sendMessage};
