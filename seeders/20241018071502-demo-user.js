'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        first_name: 'user1',
        last_name: 'user',
        email: 'user1@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user2',
        last_name: 'user',
        email: 'user2@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user3',
        last_name: 'user',
        email: 'user3@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user4',
        last_name: 'user',
        email: 'user4@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user5',
        last_name: 'user',
        email: 'user5@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user6',
        last_name: 'user',
        email: 'user6@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: uuidv4(),
        first_name: 'user7',
        last_name: 'user',
        email: 'user7@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'user8',
        last_name: 'user',
        email: 'user8@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'user9',
        last_name: 'user',
        email: 'user9@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'user10',
        last_name: 'user',
        email: 'user10@gmail.com',
        address: 'anywhere in udaipur',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
