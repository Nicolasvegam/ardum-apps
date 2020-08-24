'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    const testUsers = [];
    testUsers.push({
      name: 'admin',
      email: 'admin@ardum.cl',
      encryptedPassword: bcrypt.hashSync('ardumardum123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert('Users', testUsers, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
