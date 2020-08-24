const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var equipo = models.equipo
    .create({
        nombre:req.params.nombre,
        cargo:req.params.cargo,
        profesion:req.params.profesion,
        años:req.params.años,
        reseña:req.params.reseña,
        foto:req.params.foto
    })
    return equipo.then(equipo => res.status(200).send(equipo)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.equipo.findAll()
 },
 find (req, res) {
     return models.equipo.findAll({
         where: {
             nombre:req.params.nombre,
         }
     })
     .then(equipo => res.status(200).send(equipo))
     .catch(error => res.status(400).send(error))
  },
};
