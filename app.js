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
    return `${this.name}, aged ${this.age}, is studying ${this.subject}`;
  }
}

const students = [];

const showStudents = () => {
  console.log(students);
  let studentCount = 0;
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
  }
  studentCountContainer.innerHTML = `Number of students: ${studentCount}`;
  studentList.appendChild(frag);
};

const printStatement = student => {
  statementContainer.innerHTML = student.study();
  showStudents();
};

const clearFields = () => {
  formFields.forEach(field => {
    field.value = '';
  });
};

const makeStudent = e => {
  e.preventDefault();
  const nameValue = inputName.value;
  const genderValue = inputGender.value;
  const ageValue = inputAge.value;
  const subjectValue = inputSubject.value;
  // const nameValueLower = nameValue.toLowerCase();

  let studentObj = new Student(nameValue, genderValue, ageValue, subjectValue);
  students.push(studentObj);
  printStatement(studentObj);
  clearFields();
};

wswForm.addEventListener('submit', makeStudent);
