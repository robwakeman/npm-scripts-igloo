// who studies what
const formWsw = document.getElementById('wsw');
const nameWsw = document.getElementById('wsw-name');
const genderWsw = document.getElementById('wsw-gender');
const ageWsw = document.getElementById('wsw-age');
const subjectWsw = document.getElementById('wsw-subject');
const formFieldsWsw = document.querySelectorAll('#wsw .who__input');
const statementContainerWsw = document.getElementById('output-wsw-statement');
const countContainerWsw = document.getElementById('output-wsw-count');
const outputBoxesWsw = document.querySelectorAll('.output-wsw__box');

// who teaches what
const formWtw = document.getElementById('wtw');
const nameWtw = document.getElementById('wtw-name');
const departmentWtw = document.getElementById('wtw-department');
const subjectWtw = document.getElementById('wtw-subject');
const formFieldsWtw = document.querySelectorAll('#wtw .who__input');
const statementContainerWtw = document.getElementById('output-wtw-statement');
const countContainerWtw = document.getElementById('output-wtw-count');
const outputBoxesWtw = document.querySelectorAll('.output-wtw__box');

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

// sub class Student
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

// shared function printStatement
const printStatement = (personType, personObj) => {
  if (personType === 'typestudent') {
    statementContainerWsw.innerHTML = personObj.study();
    showStudentCount();
    outputBoxesWsw.forEach(box => {
      box.classList.add('withcontent');
    });
  } else if (personType === 'typeteacher') {
    statementContainerWtw.innerHTML = personObj.teach();
    showTeacherCount();
    outputBoxesWtw.forEach(box => {
      box.classList.add('withcontent');
    });
  }
};

// shared function addTableRow
const addTableRow = (selectorTable, ...args) => {
  // Insert a row at the end of the table
  let list = document.getElementById(selectorTable);

  let newRow = list.insertRow(-1);
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

// shared function clearFields
const clearFields = inputFieldsSelector => {
  const inputFields = document.querySelectorAll(inputFieldsSelector);
  inputFields.forEach(field => {
    field.value = '';
  });
};

const makeStudent = e => {
  e.preventDefault();
  const name = nameWsw.value;
  const gender = genderWsw.value;
  const age = ageWsw.value;
  const subject = subjectWsw.value;
  const selectorTable = 'output-wsw';
  const selectorInputFields = '#wsw .who__input';

  let studentObj = new Student(name, gender, age, subject);
  students.push(studentObj);
  printStatement('typestudent', studentObj);
  addTableRow(selectorTable, name, gender, age, subject);
  clearFields(selectorInputFields);
};

formWsw.addEventListener('submit', makeStudent);

// sub class Teacher
class Teacher extends PersonClass {
  constructor(name, department, subject) {
    super(name);
    this.department = department;
    this.subject = subject;
  }

  teach() {
    return `${this.name} teaches ${this.subject} and works in the ${this.department} department.`;
  }
}

const teachers = [];
let teacherCount = 0;

const showTeacherCount = () => {
  teacherCount = 0;
  for (let teacher of teachers) {
    teacherCount++;
  }
  countContainerWtw.innerHTML = `Number of teachers: ${teacherCount}`;
};

const makeTeacher = e => {
  e.preventDefault();
  const name = nameWtw.value;
  const department = departmentWtw.value;
  const subject = subjectWtw.value;
  const selectorTable = 'output-wtw';
  const selectorInputFields = '#wtw .who__input';

  let teacherObj = new Teacher(name, department, subject);
  teachers.push(teacherObj);
  printStatement('typeteacher', teacherObj);
  addTableRow(selectorTable, name, department, subject);
  clearFields(selectorInputFields);
};

formWtw.addEventListener('submit', makeTeacher);
