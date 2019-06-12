const {split} = require('sentence-splitter');

const getFirstSentence = paragraph => {
  const data = split(paragraph);
  const first = data[0];

  return first.raw.trim();
};

module.exports = {getFirstSentence};
