// 1. on click of the + button on left, the pane should expand (use
//   .expand class to make it expand)
function expand() {
  let textitem = document.querySelector(".text-item");
  let button = document.querySelector(".left button");
  let textitemclass = textitem.classList;
  if (textitemclass.contains("expand")) {
    textitemclass.remove("expand");
  } else {
    textitemclass.add("expand");
  }
  // 2. replace + to - when the pane is in expanded state
  // button.innerText = "-";
  if (textitemclass.contains("expand")) {
    button.innerText = "-";
  } else {
    button.innerText = "+";
  }
}

// 3. make copy of .text-item (that blue pane on left) and add it below
//    the previous one

function copytextitem() {
  let left = document.querySelector(".left");
  let textItem = document.querySelector(".text-item");
  let cloneTextItem = textItem.cloneNode(true);

  left.appendChild(cloneTextItem);
}

// 4. change bg color of .text-item by clicking button below
function changebgcolor() {
  let textItem = document.querySelectorAll(".text-item");
  // textItem.style.backgroundColor = "pink";
  //   if (textItem.style.backgroundColor == "pink") {
  //     textItem.style.backgroundColor = "purple";
  //   } else {
  //     textItem.style.backgroundColor = "pink";
  //   }
  // }
  console.log(textItem);
  for (let item of textItem) {
    if (item.style.backgroundColor == "palevioletred") {
      item.style.backgroundColor = "#80253ff8";
    } else {
      item.style.backgroundColor = "palevioletred";
    }
  }
  // let textitemclass = textItem.classList;
  // textitemclass.contains("pink");
  // if (textitemclass.contains("pink")) {
  //   textitemclass.remove("pink");
  // } else {
  //   textitemclass.add("pink");
  // }
}

// 5. remove .text-item by the delete button
function removetextitem() {
  let textItem = document.querySelector(".text-item");
  console.log(textItem);
  textItem.remove();
}
