const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('codeclanercise');
    const exercisersCollection = db.collection('exercisers');
    const exercisersRouter = createRouter(exercisersCollection);
    app.use('/api/exercisers', exercisersRouter);
  })
  .catch(err => console.error(err));
app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port}`);
});
