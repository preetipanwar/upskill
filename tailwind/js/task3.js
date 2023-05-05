function increment() {
  let counter = document.querySelector(".counter");
  counter.value = parseInt(counter.value) + 1;
}

function decrement() {
  let counter = document.querySelector(".counter");
  if (counter.value > 0) {
    counter.value = parseInt(counter.value) - 1;
  }
}

function replace() {
  let flip = document.querySelector(".flip");
  console.log(flip.style);
  flip.style.backgroundImage =
    "url(https://th.bing.com/th/id/R.c61cce5b2cf97ba544fece82d979a5b3?rik=SqJwelyTRmTrKg&riu=http%3a%2f%2fwww.alberteinsteinonline.com%2fimages%2falbert-einstein.jpg&ehk=tDXfaFJsd5S2e%2fHggndRJTmA7UTXupGvuPX7EMjY0fw%3d&risl=&pid=ImgRaw&r=0)";
}
