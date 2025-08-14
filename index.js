const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const url = 'https://www.pleinchamp.com/recherche?type_de_contenu=actualites';
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const articles = [];

    $('.card-article').each((i, el) => {
      articles.push({
        titre: $(el).find('h2').text().trim(),
        lien: `https://www.pleinchamp.com${$(el).find('a').attr('href')}`,
        description: $(el).find('p').text().trim(),
        image: $(el).find('img').attr('src'),
        date: $(el).find('time').attr('datetime')
      });
    });

    console.log(articles);
  } catch (err) {
    console.error('Erreur :', err.message);
  }

})();
