const express = require('express');
const app = express();
const PORT = 3000;

// Tämä on se sun ensimmäinen reitti
app.get('/', (req, res) => {
  res.send('Moikka! Backend toimii! 🚀');
});

// TÄSSÄ ON UUSI REITTI! Tämä palauttaa oikeaa dataa (JSON)
app.get('/api/roast', (req, res) => {
  res.json({ 
    roast: "Sä koodaat paremmin kuin keität kahvia!", 
    score: 10 
  });
});

app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});