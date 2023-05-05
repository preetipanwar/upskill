// function declaration
function hello1() {
  console.log(this);
}

// function expression
const hello2 = function () {
  console.log(this);
};

// method
const obj = {
  name: function () {
    console.log(this);
  },
};

obj.name();

// function -> window obj
// method -> obj

// factory function
function video(name) {
  return {};
}

// constructor function
function Video(name) {
  this.name = name;
}
Video.call();

const tags = ['a', ' b', 'c'];

tags.forEach(function (tag) {
  console.log(this);
}, this);
