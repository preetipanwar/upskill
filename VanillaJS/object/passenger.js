function passenger(destination, origin, name, age, phoneNo, email) {
  return {
    destination,
    origin,
    name,
    age,
    phoneNo,
    email,
  };
}

const p1 = passenger(
  'goa',
  'delhi',
  'ankit',
  '30',
  '6553629084',
  'ank@gjaj.com'
);

const p2 = passenger(
  'goa',
  'noida',
  'preeti',
  '30',
  '973545274',
  'pre@gmail.com'
);
const p3 = passenger(
  'shimla',
  'dehradun',
  'kunnu',
  '13',
  '093657483',
  'kunn@gmail.com'
);
console.log(p1.name);
console.log(p2.age);
console.log(p3.destination);

module.exports = passenger;
