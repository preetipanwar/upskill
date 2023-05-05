// Object creation ki machine - factory
function student(firstName, lastName, age, section) {
  return {
    firstName,
    lastName,
    age,
    section,
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
      const arr = value.split(' ');
      this.firstName = arr[0];
      this.lastName = arr[1];
    },
  };
}

const yana = student('yana', 'panwar', '4', 'ukg');

yana.fullName = 'yashu panwar';
console.log(yana.fullName);

const school = [];

function addStudent(firstName, lastName, age, section) {
  const s = student(firstName, lastName, age, section); // object create
  school.push(s); // school enter
}

addStudent('yana', 'panwar', '4', 'ukg');
addStudent('yashu', 'panwar ', '4', 'ukg');
addStudent('shalu', 'goyal', '5', '1');

// read
for (let student of school) {
  // console.log('student: \t', student.getName());
  // console.log('age: \t\t', student.age);
  // console.log('section: \t', student.section, '\n');
}

module.exports = student;
