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
var studentOutputBoxes = document.querySelectorAll('.student-output__box');

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
      return this.name + ' is aged ' + this.age + '. ' + (this.gender === 'male' ? 'He' : 'She') + ' is studying ' + this.subject + '.';
    }
  }]);

  return Student;
}(PersonClass);

var students = [];
var studentCount = 0;

var showStudentCount = function showStudentCount() {
  studentCount = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = students[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var student = _step.value;

      studentCount++;
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
};

var printStatement = function printStatement(student) {
  statementContainer.innerHTML = student.study();
  showStudentCount();
  studentOutputBoxes.forEach(function (box) {
    box.classList.add('withcontent');
  });
};

var addTableRow = function addTableRow() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Insert a row at the end of the table
  var newRow = studentList.insertRow(-1);
  var newCell = void 0;
  var newText = void 0;
  for (var i = 0; i < args.length; i++) {
    // Insert a cell in the row
    newCell = newRow.insertCell(i);

    // Append a text node to the cell
    newText = document.createTextNode(args[i]);
    newCell.appendChild(newText);
  }
};

var clearFields = function clearFields() {
  formFields.forEach(function (field) {
    field.value = '';
  });
};

var makeStudent = function makeStudent(e) {
  e.preventDefault();
  var name = inputName.value;
  var gender = inputGender.value;
  var age = inputAge.value;
  var subject = inputSubject.value;

  var studentObj = new Student(name, gender, age, subject);
  students.push(studentObj); // studentObj to be used for a future use
  printStatement(studentObj);
  addTableRow(name, gender, age, subject);
  clearFields();
};

wswForm.addEventListener('submit', makeStudent);
