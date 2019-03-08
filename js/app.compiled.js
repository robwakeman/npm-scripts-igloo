'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// who studies what

var wswForm = document.getElementById('wsw');
var inputName = document.getElementById('wsw-name');
var inputGender = document.getElementById('wsw-gender');
var inputAge = document.getElementById('wsw-age');
var inputSubject = document.getElementById('wsw-subject');
var formFields = document.querySelectorAll('.wsw__input');
var statementContainer = document.getElementById('student-output-statement');
var studentCountContainer = document.getElementById('student-output-count');
var studentList = document.getElementById('student-output-students');

var PersonClass = function () {
  function PersonClass(name, gender, age) {
    _classCallCheck(this, PersonClass);

    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  _createClass(PersonClass, [{
    key: 'describe',
    value: function describe() {
      return this.name + ' is ' + this.gender + ' and is ' + this.age + ' years old.';
    }
  }]);

  return PersonClass;
}();

// sub class


var Student = function (_PersonClass) {
  _inherits(Student, _PersonClass);

  function Student(name, gender, age, subject) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, gender, age));

    _this.subject = subject;
    return _this;
  }

  _createClass(Student, [{
    key: 'study',
    value: function study() {
      return this.name + ', aged ' + this.age + ', is studying ' + this.subject;
    }
  }]);

  return Student;
}(PersonClass);

var students = [];

var showStudents = function showStudents() {
  console.log(students);
  var studentCount = 0;
  // remove all children of student list before adding the new fragment to avoid appending the fragment to the previous fragments
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
  var frag = document.createDocumentFragment();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = students[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var student = _step.value;

      studentCount++;
      var li = document.createElement('li');
      li.innerHTML = student.name + ' <span class="separator">|</span> ' + student.gender + ' <span class="separator">|</span> ' + student.age + ' <span class="separator">|</span> ' + student.subject;
      frag.appendChild(li);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  studentCountContainer.innerHTML = 'Number of students: ' + studentCount;
  studentList.appendChild(frag);
};

var printStatement = function printStatement(student) {
  statementContainer.innerHTML = student.study();
  showStudents();
};

var clearFields = function clearFields() {
  formFields.forEach(function (field) {
    field.value = '';
  });
};

var makeStudent = function makeStudent(e) {
  e.preventDefault();
  var nameValue = inputName.value;
  var genderValue = inputGender.value;
  var ageValue = inputAge.value;
  var subjectValue = inputSubject.value;
  // const nameValueLower = nameValue.toLowerCase();

  var studentObj = new Student(nameValue, genderValue, ageValue, subjectValue);
  students.push(studentObj);
  printStatement(studentObj);
  clearFields();
};

wswForm.addEventListener('submit', makeStudent);
