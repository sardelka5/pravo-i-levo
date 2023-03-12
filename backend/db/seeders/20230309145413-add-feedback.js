'use strict';
const { Feedback } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Feedback.bulkCreate([
      {
        lawyer_id: 1,
        accepted: true,
        content:
          'Никакой транспорт не будет попутным, если не знаешь, куда идти.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 2,
        accepted: true,
        content: 'Если человек не понимает твои мечты – он не твой человек.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 3,
        accepted: true,
        content: 'Невозможно победить того, кто не сдается.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 4,
        accepted: true,
        content:
          'Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 5,
        accepted: true,
        content:
          'Не стоит принимать доброту за слабость, грубость за силу, а подлость за умение жить.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 6,
        accepted: true,
        content:
          'Ты можешь сказать всё, что угодно, но твои действия показывают твоё настоящее отношение.',
        full_name: 'Павел',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },

      {
        lawyer_id: 5,
        accepted: false,
        content: 'Test',
        full_name: 'Nikita',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },
      {
        lawyer_id: 6,
        accepted: false,
        content: 'Test',
        full_name: 'Nikita',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },
      {
        lawyer_id: 6,
        accepted: true,
        content:
          'Однажды Чак Норрис съел именинный торт, прежде чем друзья успели сказать, что внутри сидит стриптизерша.',
        full_name: 'Nikita',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },
      {
        lawyer_id: 6,
        accepted: true,
        content:
          'Чак Норрис перемалывает кофейные зерна зубами и кипятит воду на внутренней ярости.',
        full_name: 'Nikita',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },
      {
        lawyer_id: 6,
        accepted: true,
        content:
          'Клонирование запретили, поскольку если клонировать Чака Норриса, то появится вероятность, что удар ногой с разворота одного Чака столкнется с ударом ногой с разворота другого. Физики утверждают, что это станет концом Вселенной.',
        full_name: 'Nikita',
        date: new Date('2023-03-28T00:00:00.000+0000'),
        phone: '89005551212',
        email: 'aaa@mail.ru',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Feedback.destroy({ truncate: { cascade: true } });
  },
};
