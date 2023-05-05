// 1. create ticket - factory function
// properties - name, phoneNo, seatNo
// methods - get passengerName(), set passengerName() - getter and setter to update name

// 2. create irctc array

// 3. createTicket(parameters ......)
// Now create tickets using ticket function
// and add it to irctc[]

// 4. deleteTicket(parameters ......)
// find the ticket Object using phoneNo. and delete it from the irctc[]

function ticket(name, phoneNo, seatNo) {
  return {
    name: name,
    phoneNo,
    seatNo,
    get passengerName() {
      console.log(this.name);
    },
    set passengerName(name) {
      this.name = name;
    },
  };
}

// 2. create irctc array
const irctc = [];

// 3. createTicket
function createTicket(name, phoneNo, seatNo) {
  const t = ticket(name, phoneNo, seatNo);
  irctc.push(t);
}
createTicket('preeti', '987293847', '12D');
createTicket('ankit', '9374643654', '65');

// 4. deleteTicket
function deleteTicket(phoneNo) {
  for (let index in irctc) {
    if (irctc[index].phoneNo === phoneNo) {
      irctc.splice(index, 1);
    }
  }
}
