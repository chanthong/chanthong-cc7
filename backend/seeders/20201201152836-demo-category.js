'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', [{
      type_Restaurant: 'thai',
      type_Category: 'food'
    }, {
      type_Restaurant: 'chinese',
      type_Category: 'food'
    }, {
      type_Restaurant: 'japanese',
      type_Category: 'food'
    }, {
      type_Restaurant: 'fine dining',
      type_Category: 'theme'
    }, {
      type_Restaurant: 'hot cuisine',
      type_Category: 'theme'
    }, {
      type_Restaurant: 'at twilight',
      type_Category: 'theme'
    }, {
      type_Restaurant: 'buffet',
      type_Category: 'theme'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};
