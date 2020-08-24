const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

//admin bro dependencies
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs')
const AdminBroOptions = require(__dirname + '/admin')
const adminBro = new AdminBro(AdminBroOptions)

AdminBro.registerAdapter(AdminBroSequelize);

const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
})

// end of admin bro dependencies

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;


app.use(adminBro.options.rootPath, router)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);
require(__dirname + '/routes')(app);


app.get('/', (req, res) => res.status(200).send({
     message: 'Welcome to the beginning of nothingness.',
}));


const server = http.createServer(app);
server.listen(port);
module.exports = app;
