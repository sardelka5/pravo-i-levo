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
          'За время работы выиграл больше 530 судебных дел. Специалист по досудебным переговорам —  умеет доводить дело по победы без длительных судебных разборов.',
        speciality: 'Страховые споры, Наследство',
        experience: 2013,
        photo: 'https://юрист-услуги.рф/wp-content/uploads/2020/07/kotov1.jpg',
        phone: '+7(921)-355-00-55',
        email: 'kotov_ne@mail.ru',
      },
      {
        id: 2,
        full_name: 'Соловьев Игорь Алексеевич',
        price: 3000,
        description:
          'За время работы более 100 судебных дел. Подготовленно более 650 документов.',
        speciality: 'Уголовные и гражданские дела, Трудовое право',
        experience: 1998,
        photo: 'https://юрист-услуги.рф/wp-content/uploads/2020/07/solovev.jpg',
        phone: '8(958)-588-82-22',
        email: 'soloviev_ne@mail.ru',
      },
      {
        id: 3,
        full_name: 'Сергеева Ирина Юрьевна',
        price: 2800,
        description: 'Всё знаю, всё умею',
        speciality: 'Потребительское право, Наследство',
        experience: 2009,
        photo: 'https://klike.net/uploads/posts/2023-01/1674373217_3-32.jpg',
        phone: '8(812)-910-10-31',
        email: 'sergeeva_ne@mail.ru',
      },
      {
        id: 4,
        full_name: 'Одинцова Наталья Алексеевна',
        price: 4000,
        description:
          'Большой опыт в делах по защите прав военнослужащих, делах об административных правонарушениях, семейных, жилищных делах',
        speciality: 'Воинский учет, Уголовные и гражданские дела',
        experience: 2012,
        photo:
          'https://juristpomog.com/wp-content/uploads/2016/10/48085-1100x619.jpg',
        phone: '8(812)-920-32-32',
        email: 'odincova_ne@mail.ru',
      },
      {
        id: 5,
        full_name: 'Демин Фёдор Сергеевич',
        price: 3600,
        description: 'Красавчик по жизни',
        speciality: 'Наследство, Воинский учет',
        experience: 2003,
        photo:
          'https://avatars.mds.yandex.net/get-altay/1773749/2a0000016a4df4f81e603531537840de10f6/XXL',
        phone: '8(964)-612-07-07',
        email: 'demin_ne@mail.ru',
      },
      {
        id: 6,
        full_name: 'Андреев Юрий Михайлович',
        price: 2900,
        description:
          'Возьмусь за дело любой сложности, но не факт что выйграем в суде',
        speciality: 'Трудовое право, Потребительское право',
        experience: 2007,
        photo:
          'https://avatars.mds.yandex.net/i?id=a39f9ef5d3e01c1d5422e3d4d5e960d3_l-4055835-images-thumbs&ref=rim&n=13&w=1068&h=1335',
        phone: '8(906)315-26-74',
        email: 'andreev_ne@mail.ru',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Lawyer.destroy({ truncate: { cascade: true } });
  },
};
