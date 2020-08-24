const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var service = models.service
    .create({
        nombre:req.params.nombre,
        descripcion:req.params.descripcion,
        foto:req.params.foto
    })
    return service.then(service => res.status(200).send(service)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.service.findAll()
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.service.findAll({
         where: {
             nombre:req.params.nombre,
         }
     })
     .then(service => res.status(200).send(service))
     .catch(error => res.status(400).send(error))
  },
};
