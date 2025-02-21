const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ Configuration CORS (autorise le domaine frontend)
app.use(cors({
    origin: 'http://20.65.144.83', // Remplacez par l'IP publique du frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// 📢 Endpoint API
app.get('/api', (req, res) => {
    res.send('Je suis le backend 1');
});

// 🚀 Démarrage du serveur
app.listen(PORT, '10.2.0.4', () => {
    console.log(`Backend API disponible sur http://10.2.0.4:${PORT}/api`);
});
