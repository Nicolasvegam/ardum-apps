const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var association = models.association
    .create({
            service_id: req.params.service_id,
            content: req.params.content
    })
    return association.then(association => res.status(200).send(association)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.association.findAll()
        .then(association => res.status(200).send(association))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.association.findAll({
         where: {
             foto: req.params.foto,
         }
     })
     .then(association => res.status(200).send(association))
     .catch(error => res.status(400).send(error))
  },
};
