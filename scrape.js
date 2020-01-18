
const axios = require('axios');
const cheerio = require('cheerio');
const SCRAPING_URL = 'https://stats.nba.com/scores/01/15/2020';

(async () => {
  const response = await axios.get(SCRAPING_URL)
    .then(res => res.data)
    .catch(err => console.log(err));

  const results = [];

  if (response) {
    const $ = cheerio.load(response);

    $('div[class="game post"]').each(function() {
      results.push($(this).text());
    });
  }

  console.log(results);
})();