// List GET /api/contacts
// Create POST /api/contacts {"prenom": "Romain"}
// delete DELETE /api/contact/123

// Exercice créer les controllers et routes suivantes
// Show GET /api/contacts/123
// replace PUT /api/contact/123
// update PATCH /api/contact/123

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

const port = 8000;

const server = http.createServer(app);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Erreur : le port ${port} est déjà occupé`);
  }
  else {
    console.log(err.message);
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
