let p = new Promise((resolve, reject) => {
  let night = false;
  if (night) {
    resolve("Success: our night club is open");
  } else {
    reject("Failed: our night club is closed");
  }
})
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
