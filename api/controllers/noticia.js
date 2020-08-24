const Sequelize  = require('sequelize');
const models = require(__dirname + '/../models/index');



module.exports = {
 create(req, res) {
    var noticia = models.Noticia
    .create({
            author: req.params.author,
            title: req.params.title,
            description: req.params.description,
            n_date: req.params.n_date,
            category: req.params.category
    })
    return noticia.then(noticia => res.status(200).send(noticia)).catch(error => res.status(400).send(error))

 },
 list(_, res) {
     return models.Noticia.findAll()
        .then(noticia => res.status(200).send(noticia))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return models.Noticia.findAll({
         where: {
             title: req.params.title,
         }
     })
     .then(noticia => res.status(200).send(noticia))
     .catch(error => res.status(400).send(error))
  },
};
