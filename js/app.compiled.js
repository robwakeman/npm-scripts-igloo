'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// test babel and const transpiling

function logPet(petName) {
  var petType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dog';

  console.log(petName + ' is a ' + petType);
}

logPet('snickers');

var array = [1, 2, 3, 4, 5];
var first = array[0],
    second = array[1];

// who studies what

var wswForm = document.getElementById('wsw-form');
var inputName = document.getElementById('wsw-name');
var inputGender = document.getElementById('wsw-gender');
var inputAge = document.getElementById('wsw-age');

var PersonClass = function () {
  function PersonClass(_name, _gender, _age) {
    _classCallCheck(this, PersonClass);

    this.name = _name;
    this.gender = _gender;
    this.age = _age;
  }

  _createClass(PersonClass, [{
    key: 'describe',
    value: function describe() {
      return this.name + ' is ' + this.gender + ' and is ' + this.age + ' years old.';
    }
  }]);

  return PersonClass;
}();

var bobby = new PersonClass('Bobby', 'male', '31');
var lucy = new PersonClass('Lucy', 'female', '24');

// console.clear();
console.log(bobby.describe());
console.log(lucy.describe());

// sub class

var Student = function (_PersonClass) {
  _inherits(Student, _PersonClass);

  function Student(_name, _gender, _age, _subject) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, _name, _gender, _age));

    _this.subject = _subject;
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

var printStatement = function printStatement(student) {
  console.log(student.name);
  console.log(student.study());
};

var makeStudent = function makeStudent(e) {
  e.preventDefault();
  var nameValue = inputName.value;
  var genderValue = inputGender.value;
  var ageValue = inputAge.value;
  var nameValueLower = nameValue.toLowerCase();
  console.log('nameValue is ', nameValue);
  console.log('nameValueLower is ', nameValueLower);

  // const nameValueLower = new Student(nameValue, genderValue, ageValue, 'Maths');
  // console.log(nameValueLower.study());

  // jack works
  var jack = new Student('Jack', 'male', '55', 'Physics');
  // console.log(jack.study());

  var studentObj = new Student(nameValue, genderValue, ageValue, 'Maths');
  // let studentStudy = studentObj.study();
  console.log(studentObj);
  printStatement(studentObj);
};

// this IIFE works
(function () {
  var tim = new Student('Tim', 'male', '19', 'Economics');
  // console.log(tim.study());
})();

wswForm.addEventListener('submit', makeStudent);
