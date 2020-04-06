const express = require('express')
const ObjectId = require('mongodb').ObjectID;
const errorLog = require('./error_log.js')

const createRouter = function (collection) {
  const router = express.Router();
  router.get('/', (req, res) => {
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch(errorLog);
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({_id: ObjectId(id)})
    .then(doc => res.json(doc))
    .catch(errorLog);
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({_id: ObjectId(id)})
    .then(() => collection.find().toArray())
    .then(docs => res.json(docs))
    .catch(errorLog);
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection.insertOne(newData)
    .then(result => res.json(result.ops[0]))
    .catch(errorLog);
  });

  router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const changedData = req.body;
    collection.findOneAndUpdate(
      {_id: ObjectId(id)},
      {$set: changedData},
      {returnOriginal: false}
    )
    .then(result => res.json(result.value))
    .catch(errorLog)
  })
  return router;
};
module.exports = createRouter;
