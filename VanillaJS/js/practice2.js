console.log("practice2.js loaded\n");

// 1. hide the .shape
function hide() {
  let shape = document.querySelector(".shape");
  // console.log(shape);
  // shape.style.display = "block";
  if (shape.style.display == "block") {
    shape.style.display = "none";
  } else {
    shape.style.display = "block";
  }
}

// 2. change the .shape to circle using .circle class
function changeshape() {
  let shape = document.querySelector(".shape");
  let shapeclass = shape.classList;
  // console.log(shape);
  if (shapeclass.contains("circle")) {
    shapeclass.replace("circle", "square");
  } else {
    shapeclass.replace("square", "circle");
  }
}

// 3. change .shape to rectangle using .rectangle
function changetorectangle() {
  let shape = document.querySelector(".shape");
  let shapeclass = shape.classList;
  // console.log(shape);
  if (shapeclass.contains("rectangle")) {
    shapeclass.replace("rectangle", "square");
  } else {
    shapeclass.replace("square", "rectangle");
  }
}

// 4. change the bg-color of the #left di
function changebgcolor() {
  let left = document.querySelector(".left");

  let leftclass = left.classList;
  if (leftclass.contains("blue")) {
    leftclass.remove("blue");
  } else {
    leftclass.add("blue");
  }
}

// 5. change the color of the li tags
function changecolor() {
  let li = document.querySelectorAll("li");

  for (let item of li) {
    item.style.color = "white";
  }
}

// 6.add input in li
function addListItem() {
  let input = document.querySelector("input");
  let li = document.querySelector("li");
  li.innerText = input.value;
}

function addNewListItem() {
  let input = document.querySelector("input");
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = li.innerHTML + input.value;
  ul.appendChild(li);
}

// if (night ? console.log("night") : console.log("day"));
