// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware simple pour afficher les requêtes entrantes
app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next();
});

// Route principale
app.get('/', (req, res) => {
  res.send('✅ Pleinchamp Scraper est en ligne !');
});

// Exemple de route pour lancer le scraping (à adapter selon ton besoin)
app.get('/scrape', async (req, res) => {
  try {
    console.log('🔍 Démarrage du scraping...');
    // Ton code de scraping ici (axios, cheerio, puppeteer, etc.)
    res.send('Scraping terminé avec succès.');
  } catch (error) {
    console.error('❌ Erreur pendant le scraping :', error);
    res.status(500).send('Erreur serveur');
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
<<<<<<< HEAD
});
