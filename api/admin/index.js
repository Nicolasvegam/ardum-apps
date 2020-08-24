const AdminBro = require('admin-bro');
const AdminBroSequelizejs = require('admin-bro-sequelizejs')
const sequelize = require('sequelize')
AdminBro.registerAdapter(AdminBroSequelizejs)

const {association, bulletpoint, certification, client, equipo, project, service, software} = require('../models');
const adminBro = new AdminBro({
   rootPath: '/admin',
   loginPath: '/admin/login',
   resources: [association, certification, client, equipo, project, software, service, bulletpoint],
   branding: {
     companyName: 'ARDUM INGENIERÍA',
     softwareBrothers: false,
   }
});
module.exports = adminBro;
