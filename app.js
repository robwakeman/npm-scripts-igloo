// test babel and const transpiling

function logPet(petName, petType = 'dog') {
  console.log(`${petName} is a ${petType}`);
}

logPet('snickers');

const array = [1, 2, 3, 4, 5];
const [first, second] = array;

// who studies what

const wswForm = document.getElementById('wsw-form');
const inputName = document.getElementById('wsw-name');
const inputGender = document.getElementById('wsw-gender');
const inputAge = document.getElementById('wsw-age');

class PersonClass {
  constructor(_name, _gender, _age) {
    this.name = _name;
    this.gender = _gender;
    this.age = _age;
  }

  describe() {
    return `${this.name} is ${this.gender} and is ${this.age} years old.`;
  }
}

const bobby = new PersonClass('Bobby', 'male', '31');
const lucy = new PersonClass('Lucy', 'female', '24');

// console.clear();
console.log(bobby.describe());
console.log(lucy.describe());

// sub class
class Student extends PersonClass {
  constructor(_name, _gender, _age, _subject) {
    super(_name, _gender, _age);
    this.subject = _subject;
  }

  study() {
    return `${this.name}, aged ${this.age}, is studying ${this.subject}`;
  }
}

const printStatement = student => {
  console.log(student.name);
  console.log(student.study());
};

const makeStudent = e => {
  e.preventDefault();
  const nameValue = inputName.value;
  const genderValue = inputGender.value;
  const ageValue = inputAge.value;
  const nameValueLower = nameValue.toLowerCase();
  console.log('nameValue is ', nameValue);
  console.log('nameValueLower is ', nameValueLower);

  // const nameValueLower = new Student(nameValue, genderValue, ageValue, 'Maths');
  // console.log(nameValueLower.study());

  // jack works
  let jack = new Student('Jack', 'male', '55', 'Physics');
  // console.log(jack.study());

  let studentObj = new Student(nameValue, genderValue, ageValue, 'Maths');
  // let studentStudy = studentObj.study();
  console.log(studentObj);
  printStatement(studentObj);
};

// this IIFE works
(() => {
  let tim = new Student('Tim', 'male', '19', 'Economics');
  // console.log(tim.study());
})();

wswForm.addEventListener('submit', makeStudent);
