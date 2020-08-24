const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var bulletpoint = models.bulletpoint
    .create({
            service_id: req.params.service_id,
            content: req.params.content
    })
    return bulletpoint.then(bulletpoint => res.status(200).send(bulletpoint)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.bulletpoint.findAll()
        .then(bulletpoint => res.status(200).send(bulletpoint))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.bulletpoint.findAll({
         where: {
             foto: req.params.foto,
         }
     })
     .then(bulletpoint => res.status(200).send(bulletpoint))
     .catch(error => res.status(400).send(error))
  },
};
