const fetch = require('node-fetch');

const RANDOM_URL = 'https://en.wikipedia.org/wiki/Special:Random';

const getArticle = () => {
  return new Promise((resolve, reject) => {
    fetch(RANDOM_URL)
      .then(({url, status}) => {
        if (status === 200) {
          return resolve(url);
        }

        return reject(`Errored with code ${status}`);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {getArticle};
