// who studies what

const formWsw = document.getElementById('wsw');
const nameWsw = document.getElementById('wsw-name');
const genderWsw = document.getElementById('wsw-gender');
const ageWsw = document.getElementById('wsw-age');
const subjectWsw = document.getElementById('wsw-subject');
const formFieldsWsw = document.querySelectorAll('#wsw .who__input');
const statementContainerWsw = document.getElementById('output-wsw-statement');
const countContainerWsw = document.getElementById('output-wsw-count');
const listWsw = document.getElementById('output-wsw');
const outputBoxesWsw = document.querySelectorAll('.output-wsw__box');

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
  countContainerWsw.innerHTML = `Number of students: ${studentCount}`;
};

const printStatement = student => {
  statementContainerWsw.innerHTML = student.study();
  showStudentCount();
  outputBoxesWsw.forEach(box => {
    box.classList.add('withcontent');
  });
};

const addTableRow = (...args) => {
  // Insert a row at the end of the table
  let newRow = listWsw.insertRow(-1);
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
  formFieldsWsw.forEach(field => {
    field.value = '';
  });
};

const makeStudent = e => {
  e.preventDefault();
  const name = nameWsw.value;
  const gender = genderWsw.value;
  const age = ageWsw.value;
  const subject = subjectWsw.value;

  let studentObj = new Student(name, gender, age, subject);
  students.push(studentObj); // studentObj to be used for a future use
  printStatement(studentObj);
  addTableRow(name, gender, age, subject);
  clearFields();
};

formWsw.addEventListener('submit', makeStudent);
