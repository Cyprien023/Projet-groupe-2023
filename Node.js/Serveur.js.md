```javascript
const express = require('express');
const bodyParser = require('body-parser');
  
const app = express();
const port = 3000;
  
// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());
  
// Endpoint pour recevoir les données du capteur
app.post('/data', (req, res) => {
  const sensorData = req.body;
  console.log('Données reçues du capteur:', sensorData);
  // Traitement des données ici, par exemple, stockage en base de données
  res.status(200).send('Données reçues avec succès.');
});
  
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
```