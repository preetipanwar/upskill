const { nykaa, addToCart, createUser, deleteUser } = require('./nykaa');

createUser('preeti', 'preetipanwar', 'ankit', 'pre@gjgnj.co', '94567454');
createUser('kunnu', 'kunnurawal', '234oiuy', 'kun@jdnjn', '9276354');

addToCart(nykaa[0], {
  name: 'xxx',
  qty: 2,
  price: 200,
});

addToCart(nykaa[1], {
  name: 'zzz',
  qty: 2,
  price: 200,
});

// console.log(nykaa[0].cart);
// console.log(nykaa[1].cart);

// object destructuring
const { name, username } = { name: 'preeti', age: 30, username: 'uname' };

// array destructuring
const [x, y] = [1, 2, 3, 4, 5];

// spread operator
const [a, ...b] = [1, 2, 3, 4, 5];

deleteUser('kunnurawal');
