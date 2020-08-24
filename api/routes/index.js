/* Controllers */
const bulletpointController = require(__dirname + '/../controllers/bulletpoint');
const certificationController = require(__dirname + '/../controllers/certification');
const clientController = require(__dirname + '/../controllers/client');
const equipoController = require(__dirname + '/../controllers/equipo');
const projectController = require(__dirname + '/../controllers/project');
const serviceController = require(__dirname + '/../controllers/service');
const softwareController = require(__dirname + '/../controllers/software');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
  //app.get('/api/bulletpoint/list', clientController.list);
  //app.get('/api/certification/list', certificationController.list);
  //app.get('/api/client/list', clientController.list);
  //app.get('/api/equipo/list', equipoController.list);
  //app.get('/api/project/list', projectController.list);
  //app.get('/api/service/list', serviceController.list);
  //app.get('/api/software/list', softwareController.list);

};
