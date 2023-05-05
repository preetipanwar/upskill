function addlist() {
  let ul1 = document.querySelector('#todo-items ul');
  let input = document.querySelector('input');
  let inputValue = input.value;
  let li = document.createElement('li');

  li.innerHTML = `
    <span class="item-name" style="flex-grow: 1">${inputValue}</span>
    <span class="item-buttons">
      <button class="btnDone" onclick="done(this)">Done</button>
      <button onclick="deletebtn(this)">Delete</button>
    </span>
  `;
  if (inputValue) ul1.appendChild(li);
  input.value = '';
}

function done(btn) {
  let ul2 = document.querySelector('#todo-done ul');
  let li = btn.parentElement.parentElement;
  ul2.appendChild(li);
}

function deletebtn(btn) {
  let li = btn.parentElement.parentElement;
  li.remove();
}
