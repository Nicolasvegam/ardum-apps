const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var certification = models.certification
    .create({
            foto: req.params.foto
    })
    return certification.then(certification => res.status(200).send(certification)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.certification.findAll()
        .then(certification => res.status(200).send(certification))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.certification.findAll({
         where: {
             foto: req.params.foto,
         }
     })
     .then(certification => res.status(200).send(certification))
     .catch(error => res.status(400).send(error))
  },
};
