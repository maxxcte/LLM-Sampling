const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});


// écoute de l'url "/api/artists"
app.get('/api/artists', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from artists', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des artistes');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

// écoute de l'url "/api/shows"
app.get('/api/showsSoon', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from shows LIMIT 4', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des shows récents');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});


// écoute de l'url "/api/shows"
app.get('/api/shows', (req, res) => {

  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from shows LIMIT 14', (err, results) => {

    if (err) {

      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des shows');
    } else {

      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

app.put('api/artist/update', (req, res) => {
  connection.query("UPDATE artists SET name=?, type = ?, photo = ? WHERE id = ?",
      [req.body.name, req.body.type, req.body.photo, req.params.artists_id],
      (err, results) => {
          if (err) {
              res.status(500).send();
              return;
          }
          connection.query("SELECT * FROM artists WHERE id = ? LIMIT 1", [req.params.artists_id], (err, results) => {
              res.status(200).send(results[0]);
          })
      })
})


// 11) DELETE - Suppression de toutes les entités dont le booléen est false
app.delete('/show/delete/:id', (req, res) => {
  
  const idUser = req.params.id;
  
  // connexion à la base de données, et suppression de l'employé
  connection.query('DELETE FROM shows WHERE id = ?', [idUser], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la suppression des user où le premium est à false");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});
