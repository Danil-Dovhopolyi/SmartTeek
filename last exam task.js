const friends = [
  {
    name: 'Kelly',
    hasMoney: false,
    friends: [
      { name: 'Artem', hasMoney: false, friends: [] },
      { name: 'Toma', hasMoney: false, friends: [] },
    ],
  },

  {
    name: 'Alice',
    hasMoney: false,
    friends: [
      { name: 'Jimmy', hasMoney: false, friends: [] },
      { name: 'Benoit', hasMoney: false, friends: [] },
    ],
  },

  {
    name: 'Anna',
    hasMoney: false,
    friends: [{ name: 'Frank', hasMoney: false, friends: [] }],
  },

  { name: 'Ali', hasMoney: false, friends: [] },

  {
    name: 'Mike',
    hasMoney: false,
    friends: [
      {
        name: 'Stiven',
        hasMoney: true,
        friends: [{ name: 'Carlos', hasMoney: true, friends: [] }],
      },
    ],
  },
];

/*

   * You need to find a person to borrow some money.

   * You should not use stack.

   */

function findGuyWithMoney(arr) {}

const result = findGuyWithMoney(friends);
