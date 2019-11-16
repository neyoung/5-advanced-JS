/*
// Functions
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

/*
// Lecture: Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998, 1987];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isAdult(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }
  else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var adults = arrayCalc(ages, isAdult);
var heartRates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(heartRates);
*/

/*
//Lecture: Functions returning functions
function interviewQuestion(job) {
  if(job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX designer is?');
    }
  }
  else if(job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + ' ?');
    }
  }
  else {
    return function(name) {
      console.log('What do you do, ' + name + ' ?');
    }
  }
}

var designerQuestion = interviewQuestion('designer')('Goz');
var teacherQuestion = interviewQuestion('teacher')('Mishi');
*/

// Challenge 1
// Re-write the interview Questions function using Closure functions

// function interviewQuestion(job) {
//   var a = ' ';
//
//   return function(name) {
//     if(job === 'designer') {
//       a = ', can you please explain what UX designer is?';
//     } else if (job === 'teacher') {
//       a = ', what subject do you teach?';
//     } else {
//       a = ', What do you do?';
//     }
//
//     console.log(name + a);
//   }
// }
//
// var personOne = interviewQuestion('teacher')('Ngozi');
// var personTwo = interviewQuestion('designer')('Jeremy');
// var personThree = interviewQuestion('')('Chichi');


// var person = {
//   name: 'John',
//   age: 32,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.age + ' years old ' + this.job + '.');
//     } else if (style === 'friendly') {
//       console.log('Hey what\'s up! I\'m ' + this.name + ', I\'m a ' + this.age + ' years old ' + this.job + '. Have a nice ' + timeOfDay + '.');
//         }
//   }
// }
//
// var emily = {
//   name: 'Emily',
//   age: 26,
//   job: 'principal',
// }
//
// var john = {
//   name: 'John',
//   age: 30,
//   job: 'programmer',
// };
//
// // // How to use the call method
// // person.presentation.call(emily, 'formal', 'afternoon');
// // person.presentation.call(john, 'friendly', 'evening');
//
// // How to use the bind method
// var emilyFriendly = person.presentation.bind(emily, 'friendly');
// emilyFriendly('night');
// emilyFriendly('morning');
//
// var years = [1990, 1965, 1937, 2005, 1998, 1987];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2016 - el;
// }
//
// function isAdult(limit, el) {
//   return el >= limit;
// }
// var ages = arrayCalc(years, calculateAge);
// var isJapanAdult = arrayCalc(ages, isAdult.bind(this, 20));
// console.log(ages);
// console.log(isJapanAdult);
