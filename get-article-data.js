const fetch = require('node-fetch');

const regex = /^https:\/\/en\.wikipedia\.org\/wiki\/(.+)$/i;
const API_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=';

const getArticleData = url => {
  return new Promise((resolve, reject) => {
    const matches = url.match(regex);
    const articleName = matches[1] || null;

    if (articleName) {
      return fetch(API_URL + articleName)
        .then(res => res.json())
        .then(json => {
          const {
            query: {
              pages
            }
          } = json;

          const ids = Object.keys(pages);
          const id = ids[0];

          if (id) {
            const page = pages[id];
            return resolve(page.extract);
          }

          return reject(`No article found.`);
        })
        .catch(err => reject(err));
    }

    reject(`Article name ${articleName} invalid`);
  });
};

module.exports = {getArticleData};
