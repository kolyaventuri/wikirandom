const {getArticle} = require('./get-article');
const {getArticleData} = require('./get-article-data');
const {getFirstSentence} = require('./get-first-sentence');
const {sendMessage} = require('./send-message');

const errorOut = err => {
  console.error(err);
  process.exit(1);
};

getArticle()
  .then(url => {
    getArticleData(url)
      .then(data => {
        const result = getFirstSentence(data);
        sendMessage(result);
      })
      .catch(errorOut);
  })
  .catch(errorOut);
