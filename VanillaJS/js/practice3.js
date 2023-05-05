// 1. change the background color of .shape

function changebgcolor() {
  let shape = document.querySelector(".shape");
  // console.log(shape);
  // shape.style.backgroundColor = "red";
  let shapeclass = shape.classList;
  if (shapeclass.contains("red")) {
    shapeclass.remove("red");
  } else {
    shapeclass.add("red");
  }
}

// 2. add an image to the .shape

function addimage() {
  let shape = document.querySelector(".shape");
  let img = document.createElement("img");
  let picture =
    "https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg";
  img.src = picture;
  img.setAttribute("height", 200);
  if (!shape.hasChildNodes()) {
    shape.appendChild(img);
  }
}

// 3. change the shape of image to circle
function changeshapeofimage() {
  let img = document.querySelector("img");
  let imgclass = img.classList;
  if (imgclass.contains("circle")) {
    imgclass.remove("circle");
  } else {
    imgclass.add("circle");
  }
}

// 4. add an input below .shape using JS
function addinput() {
  let left = document.querySelector(".left");
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.placeholder = "Enter a text here";
  left.appendChild(input);
}

// 5. add a "delete" button after the input using JS
function adddeletebutton() {
  let left = document.querySelector(".left");
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.onclick = deleteInputText;
  del.className = "deletebtn";
  // del.setAttribute("height", 70);
  left.appendChild(del);
}
// 6. Delete button should delete the input
// let deletebtn = document.querySelector(".deletebtn");
// console.log(deletebtn);
// let input = document.querySelector("input");
// deletebtn.addEventListener("click", function () {
//   console.log(click);
//   // input.foreach((input) => (input.value = ""));
// });

function deleteInputText() {
  let input = document.querySelector("input");
  input.value = "";
}
