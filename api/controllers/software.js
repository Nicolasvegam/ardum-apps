const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var software = models.software
    .create({
            foto: req.params.foto
    })
    return software.then(software => res.status(200).send(software)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.software.findAll()
        .then(software => res.status(200).send(software))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.software.findAll({
         where: {
             foto: req.params.foto,
         }
     })
     .then(software => res.status(200).send(software))
     .catch(error => res.status(400).send(error))
  },
};
