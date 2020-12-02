'use strict';

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'JUI',
      password: bcrypt.hashSync('JUI', salt),
      name: 'Sarit',
      lname: 'Plewma',
      gender: 'male',
      email: 'splewma200@hotmail.com',
      profile_url: '1604569113391.jpg',
      current_point: '20',
      phone_number: '0951945595',
      birth_date: '1996-08-15',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'TAWAN',
      password: bcrypt.hashSync('TAWAN', salt),
      name: 'PTAWAN',
      lname: 'DROPBALL',
      gender: 'male',
      email: 'TAWAN@gmail.com',
      profile_url: '1604569113391.jpg',
      current_point: '40',
      phone_number: '0964512323',
      birth_date: '1992-01-13',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'JUMP',
      password: bcrypt.hashSync('JUMP', salt),
      name: 'PJUMP',
      lname: 'SENPAIMAN',
      gender: 'male',
      email: 'JUMP@gmail.com',
      profile_url: '1604569113391.jpg',
      current_point: '10',
      phone_number: '0912223333',
      birth_date: '1992-10-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'OS',
      password: bcrypt.hashSync('OS', salt),
      name: 'POS',
      lname: 'HOOKSHOT',
      gender: 'male',
      email: 'OS@gmail.com',
      profile_url: '1604569113391.jpg',
      current_point: '60',
      phone_number: '091555333',
      birth_date: '1990-9-11',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'NAT',
      password: bcrypt.hashSync('NAT', salt),
      name: 'PNAT',
      lname: 'HOOKSHOT',
      gender: 'female',
      email: 'NAT@gmail.com',
      profile_url: '1604567832095.jpg',
      current_point: '100',
      phone_number: '0916565555',
      birth_date: '1990-9-10',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
