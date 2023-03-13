'use strict';
const { Lawyer } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Lawyer.bulkCreate([
      {
        id: 1,
        full_name: 'Котов Антон Анатольевич',
        price: 1500,
        description:
          'За время работы выиграл больше 530 судебных дел. Специалист по досудебным переговорам —  умею доводить дело по победы без длительных судебных разборов.',
        speciality: 'Уголовные и гражданские дела, Трудовое право',
        experience: 2013,
        photo: '/SVG/lawyer1.jpg',
        phone: '+7(921)-355-00-55',
        email: 'kotov_ne@mail.ru',
      },
      {
        id: 2,
        full_name: 'Сергеева Ирина Юрьевна',
        price: 3000,
        description:
          'За время работы более 100 судебных дел. Подготовленно более 650 документов.',
        speciality: 'Уголовные и гражданские дела, Трудовое право',
        experience: 2018,
        photo: '/SVG/lawyer2.jpg',
        phone: '+7(958)588-82-22',
        email: 'sergeeva_ne@mail.ru',
      },
      {
        id: 3,
        full_name: 'Соловьев Игорь Алексеевич',
        price: 2800,
        description: 'Всё знаю, всё умею',
        speciality: 'Воинский учет, Потребительское право',
        experience: 2013,
        photo: '/SVG/lawyer3.jpg',
        phone: '+7(812)910-10-31',
        email: 'soloviev_ne@mail.ru',
      },
      {
        id: 4,
        full_name: 'Одинцова Наталья Алексеевна',
        price: 4000,
        description:
          'Большой опыт в делах по защите прав военнослужащих, делах об административных правонарушениях, семейных, жилищных делах',
        speciality: 'Воинский учет, Потребительское право',
        experience: 2012,
        photo: '/SVG/lawyer4.jpg',
        phone: '8(812)-920-32-32',
        email: 'odincova_ne@mail.ru',
      },
      {
        id: 5,
        full_name: 'Демина Ирина Сергеевна',
        price: 3600,
        description: 'Веду дела внимательно',
        speciality: 'Наследство',
        experience: 2013,
        photo: '/SVG/lawyer5.jpg',
        phone: '8(964)-612-07-07',
        email: 'demina_ne@mail.ru',
      },
      {
        id: 6,
        full_name: 'Андреева Юлия Михайловна',
        price: 2900,
        description:
          'Возьмусь за дело любой сложности, но не факт что выйграем в суде',
        speciality: 'Трудовое право, Потребительское право',
        experience: 2003,
        photo: '/SVG/lawyer6.jpg',
        phone: '8(906)315-26-74',
        email: 'andreevf_ne@mail.ru',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Lawyer.destroy({ truncate: { cascade: true } });
  },
};
