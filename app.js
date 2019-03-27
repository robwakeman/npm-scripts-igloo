// who studies what

const wswForm = document.getElementById('wsw');
const inputName = document.getElementById('wsw-name');
const inputGender = document.getElementById('wsw-gender');
const inputAge = document.getElementById('wsw-age');
const inputSubject = document.getElementById('wsw-subject');
const formFields = document.querySelectorAll('#wsw .who__input');
const statementContainer = document.getElementById('output-wsw-statement');
const studentCountContainer = document.getElementById('output-wsw-count');
const studentList = document.getElementById('output-wsw');
const studentOutputBoxes = document.querySelectorAll('.output-wsw__box');

class PersonClass {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.gender} and is ${this.age} years old.`;
  }
}

// sub class
class Student extends PersonClass {
  constructor(name, gender, age, subject) {
    super(name, gender, age);
    this.subject = subject;
  }

  study() {
    return `${this.name} is aged ${this.age}. ${this.gender === 'male' ? 'He' : 'She'} is studying ${this.subject}.`;
  }
}

const students = [];
let studentCount = 0;

const showStudentCount = () => {
  studentCount = 0;
  for (let student of students) {
    studentCount++;
  }
  studentCountContainer.innerHTML = `Number of students: ${studentCount}`;
};

const printStatement = student => {
  statementContainer.innerHTML = student.study();
  showStudentCount();
  studentOutputBoxes.forEach(box => {
    box.classList.add('withcontent');
  });
};

const addTableRow = (...args) => {
  // Insert a row at the end of the table
  let newRow = studentList.insertRow(-1);
  let newCell;
  let newText;
  for (let i = 0; i < args.length; i++) {
    // Insert a cell in the row
    newCell = newRow.insertCell(i);

    // Append a text node to the cell
    newText = document.createTextNode(args[i]);
    newCell.appendChild(newText);
  }
};

const clearFields = () => {
  formFields.forEach(field => {
    field.value = '';
  });
};

const makeStudent = e => {
  e.preventDefault();
  const name = inputName.value;
  const gender = inputGender.value;
  const age = inputAge.value;
  const subject = inputSubject.value;

  let studentObj = new Student(name, gender, age, subject);
  students.push(studentObj); // studentObj to be used for a future use
  printStatement(studentObj);
  addTableRow(name, gender, age, subject);
  clearFields();
};

wswForm.addEventListener('submit', makeStudent);
