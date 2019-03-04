'use strict';

function logPet(petName) {
  var petType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dog';

  console.log(petName + ' is a ' + petType);
}

logPet('snickers');

var array = [1, 2, 3, 4, 5];
var first = array[0],
    second = array[1];
