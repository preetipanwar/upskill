// Factory function
function visitor(name, phone, vehicle, tower, flatNo) {
  return {
    name,
    phone,
    vehicle,
    address: {
      tower,
      flatNo,
    },
    getaddress() {
      console.log(this.address.tower + this.address.flatNo);
    },
    date: Date.now(),
  };
}

if ('name' in visitor) console.log('yes');

const v1 = visitor('preeti', '9203984024', 'bike', 'G', 302);
const v2 = visitor('ajay', '92121303984', 'car', 'G', 302);
const v3 = visitor('ankit', '92121303984', 'pedistrian', 'G', 302);

const visited = [v1, v2, v3];

for (let visitor of visited) {
  console.log(visitor.name);
  console.log(visitor.phone);
  console.log(visitor.getaddress());
}

v4 = { ...v1 };
console.log(v4);

module.exports = visitor;
