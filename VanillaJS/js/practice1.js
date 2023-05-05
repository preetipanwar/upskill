// 1. change image
function changeImage() {
  let img = document.querySelector("img");
  let hritik =
    "https://i.pinimg.com/originals/7f/74/5f/7f745f29f812ba281d1b6ed78798be28.jpg";
  let rock =
    "https://i.pinimg.com/originals/bd/af/27/bdaf274f7590b6b075457a693d4d8a6c.jpg";

  if (img.src == hritik) {
    img.src = rock;
  } else {
    img.src = hritik;
  }
}

function changecolor() {
  let allParagraph = document.querySelectorAll("p");

  for (let p in allParagraph) {
    if (allParagraph[p].style.color === "white") {
      allParagraph[p].style.color = "black";
    } else {
      allParagraph[p].style.color = "white";
    }
  }
}

function changebackground() {
  let body = document.querySelector("body");
  let bodyClasses = body.classList;

  if (bodyClasses.contains("green")) {
    bodyClasses.replace("green", "gray");
  } else {
    bodyClasses.replace("gray", "green");
  }
}

// 4. flip
function flip() {
  let flipbox = document.querySelector(".flip-box");
  let flipboxClasses = flipbox.classList;

  if (flipboxClasses.contains("click")) {
    flipboxClasses.remove("click");
  } else {
    flipboxClasses.add("click");
  }
}

function showhide() {
  let flipbox = document.querySelector(".flip-box");

  if (flipbox.style.display === "none") {
    flipbox.style.display = "block";
  } else {
    flipbox.style.display = "none";
  }
}
