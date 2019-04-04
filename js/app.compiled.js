'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// who studies what
var formWsw = document.getElementById('wsw');
var nameWsw = document.getElementById('wsw-name');
var genderWsw = document.getElementById('wsw-gender');
var ageWsw = document.getElementById('wsw-age');
var subjectWsw = document.getElementById('wsw-subject');
var formFieldsWsw = document.querySelectorAll('#wsw .who__input');
var statementContainerWsw = document.getElementById('output-wsw-statement');
var countContainerWsw = document.getElementById('output-wsw-count');
var outputBoxesWsw = document.querySelectorAll('.output-wsw__box');

// who teaches what
var formWtw = document.getElementById('wtw');
var nameWtw = document.getElementById('wtw-name');
var departmentWtw = document.getElementById('wtw-department');
var subjectWtw = document.getElementById('wtw-subject');
var formFieldsWtw = document.querySelectorAll('#wtw .who__input');
var statementContainerWtw = document.getElementById('output-wtw-statement');
var countContainerWtw = document.getElementById('output-wtw-count');
var outputBoxesWtw = document.querySelectorAll('.output-wtw__box');

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

// sub class Student


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

  countContainerWsw.innerHTML = 'Number of students: ' + studentCount;
};

// shared function printStatement
var printStatement = function printStatement(personType, personObj) {
  if (personType === 'typestudent') {
    statementContainerWsw.innerHTML = personObj.study();
    showStudentCount();
    outputBoxesWsw.forEach(function (box) {
      box.classList.add('withcontent');
    });
  } else if (personType === 'typeteacher') {
    statementContainerWtw.innerHTML = personObj.teach();
    showTeacherCount();
    outputBoxesWtw.forEach(function (box) {
      box.classList.add('withcontent');
    });
  }
};

// shared function addTableRow
var addTableRow = function addTableRow(selectorTable) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // Insert a row at the end of the table
  var list = document.getElementById(selectorTable);

  var newRow = list.insertRow(-1);
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

// shared function clearFields
var clearFields = function clearFields(inputFieldsSelector) {
  var inputFields = document.querySelectorAll(inputFieldsSelector);
  inputFields.forEach(function (field) {
    field.value = '';
  });
};

var makeStudent = function makeStudent(e) {
  e.preventDefault();
  var name = nameWsw.value;
  var gender = genderWsw.value;
  var age = ageWsw.value;
  var subject = subjectWsw.value;
  var selectorTable = 'output-wsw';
  var selectorInputFields = '#wsw .who__input';

  var studentObj = new Student(name, gender, age, subject);
  students.push(studentObj);
  printStatement('typestudent', studentObj);
  addTableRow(selectorTable, name, gender, age, subject);
  clearFields(selectorInputFields);
};

formWsw.addEventListener('submit', makeStudent);

// sub class Teacher

var Teacher = function (_PersonClass2) {
  _inherits(Teacher, _PersonClass2);

  function Teacher(name, department, subject) {
    _classCallCheck(this, Teacher);

    var _this2 = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name));

    _this2.department = department;
    _this2.subject = subject;
    return _this2;
  }

  _createClass(Teacher, [{
    key: 'teach',
    value: function teach() {
      return this.name + ' teaches ' + this.subject + ' and works in the ' + this.department + ' department.';
    }
  }]);

  return Teacher;
}(PersonClass);

var teachers = [];
var teacherCount = 0;

var showTeacherCount = function showTeacherCount() {
  teacherCount = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = teachers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var teacher = _step2.value;

      teacherCount++;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  countContainerWtw.innerHTML = 'Number of teachers: ' + teacherCount;
};

var makeTeacher = function makeTeacher(e) {
  e.preventDefault();
  var name = nameWtw.value;
  var department = departmentWtw.value;
  var subject = subjectWtw.value;
  var selectorTable = 'output-wtw';
  var selectorInputFields = '#wtw .who__input';

  var teacherObj = new Teacher(name, department, subject);
  teachers.push(teacherObj);
  printStatement('typeteacher', teacherObj);
  addTableRow(selectorTable, name, department, subject);
  clearFields(selectorInputFields);
};

formWtw.addEventListener('submit', makeTeacher);
