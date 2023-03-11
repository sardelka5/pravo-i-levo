'use strict';
const { Event } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Event.bulkCreate([
      {
        date: new Date('2023-06-10T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, ул. Рентгена, д. 9, литер Б',
        title:
          'Договор без дефектов: юридические техники составления и оформления',
        description:
          'От понимания своих прав и того, как их защитить, зависит комфорт вашей жизни. К каким источникам обратиться, кому звонить, что можно сделать в разных жизненных ситуациях.',
        photo:
          'https://img.dmclk.ru/s960x640q80/blog/61780bde8f43fe00241fc360-%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80.png',
      },
      {
        date: new Date('2023-04-21T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, Щербаков пер., д. 17/3, стр. 2',
        title:
          'БАНКРОТСТВО В 2023 ГОДУ: НОВЕЛЛЫ ЗАКОНОДАТЕЛЬСТВА, ПРАВОПРИМЕНИТЕЛЬНАЯ И СУДЕБНАЯ ПРАКТИКА',
        description:
          'От понимания своих прав и того, как их защитить, зависит комфорт вашей жизни. К каким источникам обратиться, кому звонить, что можно сделать в разных жизненных ситуациях.',
        photo:
          'https://fincult.info/upload/als-property-editorblock/97b/Image_04.jpg',
      },
      {
        date: new Date('2023-03-28T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, ул. Профессора Качалова, д. 9',
        title:
          'ПРОЦЕССУАЛЬНЫЕ ПРАВИЛА СУДЕБНОГО РАЗБИРАТЕЛЬСТВА И КАК ИХ ИСПОЛЬЗОВАТЬ НА ПРАКТИКЕ',
        description:
          'От понимания своих прав и того, как их защитить, зависит комфорт вашей жизни. К каким источникам обратиться, кому звонить, что можно сделать в разных жизненных ситуациях.',
        photo:
          'https://legalacademy.ru/images/lfa/ARTICLE/3550335/COVER_LIST/3550348.jpg',
      },
      {
        date: new Date('2023-05-05T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, Выборгское шоссе, д. 5, к. 1, литера И',
        title: 'Лекция',
        description:
          'От понимания своих прав и того, как их защитить, зависит комфорт вашей жизни. К каким источникам обратиться, кому звонить, что можно сделать в разных жизненных ситуациях.',
        photo:
          'https://static.tildacdn.com/tild3937-3637-4336-b363-633639396264/3.jpg',
      },
      {
        date: new Date('2022-05-05T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, Выборгское шоссе, д. 5, к. 1, литера И',
        title: 'Лекция',
        description: 'прошлая дата',
        photo:
          'https://yandex-images.clstorage.net/10dyZ0318/f45974ADfS/8UoPeAGUhYvRwvsy0kyc8myqEFcgGRb2_ck8phPfpuKvOAFRZBEcAOMlkX9z0O1rDXor3Womr8PepAgaBxZ61bVOTjRF1JnXg4jlZtpPmfBx91NGPEMSq-eLYPMG1PG8rz1BVGsEQVGrNJwtTuydGCsSB7oXU4O-lfFQSFBXNsHydCQ5KZ7Pk_zFvR_cd5zDe_QwfgVhCpHY3VfnN4jI29ldAkxDGBR-nzXmd1f4tj0TCD2aMFedsaD0XW1CXk7HzmoXTAWD6ozCwKQZ4UW38FHwOWAabimB28dL2Tec1tLGTSFwYSY5UZgl1Gp9_4wcJyYkiRNXoZ-J3k1dVEFZ1s9aGFUFocWFwvaCLv1mqfBg0j9kJUY4nPbZVdsliNXu00otfkkhK1meJdlyU8W0GwMvHaQ8U4echulmQ297VsXRbDFYI4Putt3QvCngV5blfPUxVxxQGL_Q52_dOp3wy_pJKkdHJjd8qS3HU3rKqj4QCx6EBm2On5z-S2hyaWzlyk0aQSCh2IHF2o8gx2Wf1EHLBkogXAWG8t9C0TCo0dT2WzJUcgM4UacV6Ulp_IowDysYii5ViZap2FpVW2Ba5_1CAVM0rfiu9uCGJ9xUgMdn1zJdIVoup9redvIRpN3y83ckQ2QfO2eqFftKfdKeCAA0PpAnQ5O1v_VSS39sUf_uUyN4EKbJo-bHjA3wY6vVUNw2RxhVOKDe7mb3EJ3pxOdcI2ZCJwNguQXWe3TlmTAMKC6vEWeBp53TXGpzSXHL9mgObTax-Iz595YJ8HK_80H8E3oyRzqI1_1i6B2I3cj5YQ1zXzAZeaMX2HdAw4wSMwQkkjN4mpiBxXhEXnpg8eRgPH05ic6i59mfAuN2utVEyipEAVkqhu3iY_MhpM7K830oc2U4NUaAFNF_SfC_PyECC5wPTb-IpPZqSlh7adbBUgxTFb3SrdvWnzjDY5zfZcYTVx5BPKb--1vTIaI',
      },
      {
        date: new Date('2023-03-12T00:00:00.000+0000'),
        address: 'г. Санкт-Петербург, Выборгское шоссе, д. 5, к. 1, литера И',
        title: 'Лекция',
        description: 'прошлая дата',
        photo:
          'https://yandex-images.clstorage.net/10dyZ0318/f45974ADfS/8UoPeAGUhYvRwvsy0kyc8myqEFcgGRb2_ck8phPfpuKvOAFRZBEcAOMlkX9z0O1rDXor3Womr8PepAgaBxZ61bVOTjRF1JnXg4jlZtpPmfBx91NGPEMSq-eLYPMG1PG8rz1BVGsEQVGrNJwtTuydGCsSB7oXU4O-lfFQSFBXNsHydCQ5KZ7Pk_zFvR_cd5zDe_QwfgVhCpHY3VfnN4jI29ldAkxDGBR-nzXmd1f4tj0TCD2aMFedsaD0XW1CXk7HzmoXTAWD6ozCwKQZ4UW38FHwOWAabimB28dL2Tec1tLGTSFwYSY5UZgl1Gp9_4wcJyYkiRNXoZ-J3k1dVEFZ1s9aGFUFocWFwvaCLv1mqfBg0j9kJUY4nPbZVdsliNXu00otfkkhK1meJdlyU8W0GwMvHaQ8U4echulmQ297VsXRbDFYI4Putt3QvCngV5blfPUxVxxQGL_Q52_dOp3wy_pJKkdHJjd8qS3HU3rKqj4QCx6EBm2On5z-S2hyaWzlyk0aQSCh2IHF2o8gx2Wf1EHLBkogXAWG8t9C0TCo0dT2WzJUcgM4UacV6Ulp_IowDysYii5ViZap2FpVW2Ba5_1CAVM0rfiu9uCGJ9xUgMdn1zJdIVoup9redvIRpN3y83ckQ2QfO2eqFftKfdKeCAA0PpAnQ5O1v_VSS39sUf_uUyN4EKbJo-bHjA3wY6vVUNw2RxhVOKDe7mb3EJ3pxOdcI2ZCJwNguQXWe3TlmTAMKC6vEWeBp53TXGpzSXHL9mgObTax-Iz595YJ8HK_80H8E3oyRzqI1_1i6B2I3cj5YQ1zXzAZeaMX2HdAw4wSMwQkkjN4mpiBxXhEXnpg8eRgPH05ic6i59mfAuN2utVEyipEAVkqhu3iY_MhpM7K830oc2U4NUaAFNF_SfC_PyECC5wPTb-IpPZqSlh7adbBUgxTFb3SrdvWnzjDY5zfZcYTVx5BPKb--1vTIaI',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Event.destroy({ truncate: { cascade: true } });
  },
};
