// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');

// Créer une instance d'Express
const app = express();

// Middleware pour analyser les corps de requête JSON
app.use(bodyParser.json());

// Route de base pour tester le serveur
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur web !');
});

// Exemple de route pour ajouter un utilisateur à la base de données
app.post('/utilisateurs', (req, res) => {
    const { nom, email } = req.body;
    console.log("hey", nom, email);
  
    // Simule une opération réussie, vous devriez ajouter ici la logique pour ajouter l'utilisateur à la base de données
    // En cas de succès, renvoyer une réponse avec un code de statut 201 (Créé)
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', nom, email });
  });

// Port d'écoute du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
