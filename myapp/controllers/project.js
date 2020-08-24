const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var project = models.project
    .create({
        nombre:req.params.nombre,
        descripcion:req.params.descripcion,
        foto:req.params.foto
    })
    return project.then(project => res.status(200).send(project)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.project.findAll()
        .then(project => res.status(200).send(project))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.project.findAll({
         where: {
             nombre:req.params.nombre,
         }
     })
     .then(project => res.status(200).send(project))
     .catch(error => res.status(400).send(error))
  },
};
