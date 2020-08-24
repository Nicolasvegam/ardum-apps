const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
var fs = require('fs');
const mail = require(__dirname + '/mail');
var es6Renderer = require('express-es6-template-engine')
const app = express();
const port = parseInt(process.env.PORT, 10) || 7000;

/* https */
const httpsOptions = {
  cert: fs.readFileSync(__dirname +'/options/certificate.crt'),
  ca: fs.readFileSync(__dirname + '/options/certificateca.ca-bundle'),
  key: fs.readFileSync(__dirname + '/options/privatekey.key')
}
/* end https */


/* Controllers */
const models = require(__dirname + '/models/index');
const Sequelize = require('sequelize');
/* End Controllers */

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.set('port', port);
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//servicios , projects , clientes, (software and certification PENDIENTE)

app.get('/', function(req, res) {
  models.certification.findAll().then((certificaciones) => {
  models.client.findAll().then((clientes) => {
  models.project.findAll().then((proyectos) => {
  models.service.findAll().then((servicios) => {
  models.software.findAll().then((software) => {
  models.association.findAll().then((asociaciones) => {
  res.render('index', {locals: {certificaciones: certificaciones,
  clientes: clientes, proyectos: proyectos, servicios: servicios,
  software: software, asociaciones: asociaciones}});});});});});});})
});

app.get('/proyecto/:id', function(req, res) {
  models.project.findByPk(req.params.id).then((proyecto) => {
        res.render('proyecto', {locals: {proyecto: proyecto }});
      })
});

app.get('/servicio/:id', function(req, res) {
    models.service.findByPk(req.params.id).then((servicio) => {
        models.bulletpoint.findAll({where: {service_id:parseInt(req.params.id)}}).then((bulletpoints) => {
          res.render('servicio', {locals: {servicio: servicio, bulletpoints: bulletpoints }});
        })
    });
});

app.get('/equipo', function(req, res) {
  models.equipo.findAll()
        .then((team) => {res.render('equipo', {locals: {team: team }});});
});


//app.post('/', function(req, res){
//    const output = `
//       <p>Hola ARDUM tienes un nuevo mensaje !</p>
//       <h3>Detalles del contacto</h3>
//       <ul>
//         <li>Name: ${req.body.cname}</li>
//         <li>Email: ${req.body.cemail}</li>
//       </ul>
//       <h3>Message</h3>
//       <p>${req.body.cmessage}</p>
//      `;
//    let mailOptions = {
//        from: "Bot <bot@ardum.cl>",
//        to: "contacto@ardum.cl",
//        subject: "[CONTACTO] Nuevo mensaje enviado desde wwww.ardum.cl",
//        text: "",
//        html: output
//      }
    //mail.sendMail(mailOptions)
    //.then(function (email) {
    // res.status(200).json({ success: true, msg: 'Mail sent' });
    //}).catch(function (exception) {
    // res.status(200).json({ success: false, msg: exception });
    //});
    //res.status(200).send({
    //     message: req,
    //})
    //res.redirect('/');
//});

const server = http.createServer(app);
server.listen(port);
module.exports = app;
