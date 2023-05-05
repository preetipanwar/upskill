// customer - function
function customer(name, username, password, email, phone_no) {
  return {
    name,
    username,
    password,
    email,
    phone_no,
    cart: [],
    cartTotal() {
      let total = 0;
      for (let item of this.cart) {
        total = total + item.qty * item.price;
      } // forloop end
      return total;
    }, //method ends
  };
}

const nykaa = [];

// 1. createUser() -> push[]
function createUser(name, username, password, email, phone_no) {
  const c = customer(name, username, password, email, phone_no);
  nykaa.push(c);
}

// 2. addToCart(userObject, itemObject)
function addToCart(userObject, itemObject) {
  userObject.cart.push(itemObject);
}

// 3. deleteUser(username)
function deleteUser(username) {
  for (let index in nykaa) {
    if (nykaa[index].username === username) {
      // user delete
      nykaa.splice(index, 1);
    }
    console.log(nykaa);
  }
}

module.exports = { nykaa, addToCart, createUser, deleteUser };
