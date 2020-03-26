module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 'd0e38767-de61-43ef-b442-d0fca525acfa',
        firstName: 'Jane',
        lastName: 'Doe',
        language: 'English',
        displayName: 'janedoe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '436e49ad-3b04-40d6-b8da-f6d26f45ed17',
        firstName: 'Test',
        lastName: 'Member',
        language: "German",
        displayName: 'testMember',
        createdAt: '1988-01-08 04:05:06',
        updatedAt: '1999-01-08 04:05:06'
      }
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};