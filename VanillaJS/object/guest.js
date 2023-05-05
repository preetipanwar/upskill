function guest(name, age, phoneNo, number, infant, roomNo) {
  return {
    name,
    age,
    phoneNo,
    occupants: {
      number,
      infant,
    },
    roomNo,
    isinfant() {
      if (infant === true) {
        return 'infact exist';
      } else {
        return 'does not exist';
      }
    },
  };
}

const g1 = guest('ankit', '30', '93783467435', '2', true, '304');
console.log(g1.isinfant());
console.log(g1.phoneNo);

module.exports = guest;
