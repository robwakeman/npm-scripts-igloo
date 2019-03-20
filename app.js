// who studies what

const wswForm = document.getElementById('wsw');
const inputName = document.getElementById('wsw-name');
const inputGender = document.getElementById('wsw-gender');
const inputAge = document.getElementById('wsw-age');
const inputSubject = document.getElementById('wsw-subject');
const formFields = document.querySelectorAll('.wsw__input');
const statementContainer = document.getElementById('student-output-statement');
const studentCountContainer = document.getElementById('student-output-count');
const studentList = document.getElementById('student-output-students');
const studentListTable = document.getElementById('student-output-students-table');
const studentOutputBoxes = document.querySelectorAll('.student-output__box');

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

const showStudents = () => {
  console.log('students in showStudents', students);
  // let studentCount = 0;
  // remove all children of student list before adding the new fragment to avoid appending the fragment to the previous fragments
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }

  let frag = document.createDocumentFragment();
  for (let student of students) {
    studentCount++;
    let li = document.createElement('li');
    li.innerHTML = `${student.name} <span class="separator">|</span> ${student.gender} <span class="separator">|</span> ${student.age} <span class="separator">|</span> ${student.subject}`;
    frag.appendChild(li);
    /* let tr = document.createElement('tr');
    tr.innerHTML = `<td> ${student.name} </td><td> ${student.gender} </td><td> ${student.age} </td><td> ${student.subject} </td>`;
    frag.appendChild(tr); */
  }
  studentCountContainer.innerHTML = `Number of students: ${studentCount}`;
  studentList.appendChild(frag);
  // studentListTable.appendChild(frag);
};

const showStudentCount = () => {
  console.log('students in showStudentCount', students);
  for (let student of students) {
    studentCount++;
  }
  studentCountContainer.innerHTML = `Number of students: ${studentCount}`;
};

const printStatement = student => {
  statementContainer.innerHTML = student.study();
  showStudents();
  showStudentCount();
  studentOutputBoxes.forEach(box => {
    box.classList.add('withcontent');
  });
};

const addTableRow = (...args) => {
  // insertRow() into studentListTable
  // Insert a row at the end of the table
  let newRow = studentListTable.insertRow(-1);
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
