const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var client = models.client
    .create({
            foto: req.params.foto
    })
    return client.then(client => res.status(200).send(client)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.client.findAll()
        .then(client => res.status(200).send(client))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.client.findAll({
         where: {
             foto: req.params.foto,
         }
     })
     .then(client => res.status(200).send(client))
     .catch(error => res.status(400).send(error))
  },
};
