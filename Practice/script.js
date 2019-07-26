// var firstName = 'Francisco';
// console.log(firstName);

// var lsstName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;

// console.log(job);

// console.log(tim);


/*
 */
/***************************************
 * Variable mutation and type coercion 
 */


// var firstName = 'John';
// var age = 24;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job  = 'Web Dev';
// isMarried = false;

// console.log( firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);


// // Variable mutation
// age = "twenty four";
// job = "driver";

// alert( firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

// var lastName = prompt("what is his last Name?");

// console.log(firstName + " " + lastName);

/********************************************************** */
// Basic operators

// var year,yearJohn, yearMark 

// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // Math operators 
// yearJohn = now - 29;
// yearMark = now - 33;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators 

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator 

// console.log(typeof ageJohn);
// console.log(typeof johnOlder);

/************Operator precedence**************** */


// Multiple operators
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;

// console.log(isFullAge);


// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(average);

// // Multiple assignments 

// var x, y;

// x = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26

// console.log(x);

// // More operators

// x *= 2;
// // x = x * 2
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

// Coding Changle 1
// var johnHeight = 1.69;
// var johnMass = 70;

// var markHeight = 1.57;
// var markMass = 65;

// var johnBMI = johnMass / (johnHeight * johnHeight);
// var markBMI = markMass / (markHeight * markHeight);

// console.log(johnBMI);
// console.log(markBMI);

// var bmi = markBMI > johnBMI;
// console.log(bmi);

// console.log("is mark's bmi hight or lower than john's " + bmi );

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;
//     if (isMarried === true) {
//         console.log(firstName + ' is married!');
//     } else {
//         console.log(firstName + ' will hopefully marry soon');
//     }

//     var johnHeight = 1.69;
// var johnMass = 70;

// var markHeight = 1.57;
// var markMass = 65;

// var johnBMI = johnMass / (johnHeight * johnHeight);
// var markBMI = markMass / (markHeight * markHeight);

// console.log(johnBMI);
// console.log(markBMI);


// if (markBMI > johnBMI) {
//     console.log('Mark\' BMI is higher than johns')
// } else {
//     console.log('Mark\' BMI is higher than johns')

// }

// var bmi = markBMI > johnBMI;
// console.log(bmi);

// console.log("is mark's bmi hight or lower than john's " + bmi );



/********* Boolean logic ************************ */

// var firstName = 'john';
// var age = 20;

// if (age < 13 ) {
//     console.log(firstName + ' is a boy.');
// }  else if ( age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }
// else {
//     console.log(firstName + ' is a man.');
// }


/*****************
The Ternary Operator  
*************************/

// var firstName = 'john';
// var age = 22;

// age >= 18 ? console.log(firstName+ ' drinks beer.')
// : console.log(firstName + ' drinks juice');

// var drink = age >=18 ? 'beer' : 'juice';
// console.log(drink);

// Switch statement 
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + 'teaches kids how to code');
//         break;
//     case('driver'):
//         console.log(firstName + ' drives an uber in DC');
//         break;
//     case('cook'):
//         console.log(firstName + ' cooks meal for people')
//         break;
//     default:
//         console.log(firstName + 'does something else');
// }


// switch (true) {

//     case age < 13:
//          console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case  age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//     default:
//         console.log(firstName + ' is a man.');
// }
// if (age < 13 ) {
//     console.log(firstName + ' is a boy.');
// }  else if ( age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }
// else {
//     console.log(firstName + ' is a man.');
// }

/********* Truthy and Falsy vaules and equality operators *****************/

// falsy values: undefined, null, 0, '' NaN

// truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Var is not defined');
// }

// // Equality operators 
//  if (height == '23') {
//      console.log("The == operator does type coercion!");

//  }

/**************
 *  Coding Challenge
 */
// var john = 'John';
// var mike = 'Mike';

// var johnTeamave = 251;
// var mikeTeamave = 251;

// switch(true) {
//     case (johnTeamave > mikeTeamave):
//     console.log( john + ' is the winner');
//     break;
//     case (johnTeamave < mikeTeamave):
//     console.log( mike + ' is the winner');
//     break;
//     case (johnTeamave === mikeTeamave):
//         console.log( "we have a tie");
//     break;
//     default:
//         console.log("Please pick a winner");
// }

// Function fundementals 
// function calcAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calcAge(1994);
// console.log(ageJohn);

//  function yearsUntilRetirement(year, firstName) {
//      var age = calcAge(year);
//      var reitrement = 65 - age;

//      if (reitrement > 0) {
//          console.log(firstName + ' retires in ' + reitrement + ' years. ');
//         } else {
//             console.log(firstName + ' is already retired.');
//      }
//  }

//  yearsUntilRetirement(1994, 'Francisco');

//  yearsUntilRetirement(1950, 'John');

/** Function Statements and Expressions*/

// Function Declaration 

//Function Declaration
// function whatDoYouDo(job, firstName) {}

//  Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//         return firstName + " teaches kids after school";
//         case 'Web dev':
//         return firstName + " writes code";
//         case 'driver':
//         return firstName + " drives Uber";
//     }
// }

// console.log(whatDoYouDo('Web dev','Francisco'));

/******
 * Arrays 
 */

// Init new array 

//  var names = ['john', 'tim', 'bob'];



// console.log(names[2] = 'cisco');
// console.log(names);

// var john = ['john', 24, 'Dev'];

// john.push('black');
// john.unshift('Mr.');

// console.log(john);

// john.pop();
// john.shift();
// console.log(john);


// console.log(john.indexOf(24));



// function tip(bill){

//     let arr = [];

//     if(bill < 50 ){
//         return + bill
//     } else if (bill >= 50 && bill <= 200){
//         return  bill * .15;
//     } else  {
//         return bill * 0.10;
//     }
// }

// console.log(tip(22));


// function tipCalc(bill) {
//     var percentage;
//     if(bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }

//     return percentage * bill;
// }


// console.log(tipCalc(300));

// var bills = [124,48,268];

// var tips = [tipCalc(bills[0]),
//             tipCalc(bills[1]),
//             tipCalc(bills[2])];

// let finalvalues = [bills[0] + tips[0], 
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
// console.log(tips,finalvalues);





// let john = {
//     firstName: "John",
//     lastName: "Caballero",
//     birthYear: 1994,
//     family: ["jose","Connie","Thelma"],
//     job: "Web Dev",
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2019 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);



// var mark = {
//     firstName: "Mark",
//     mass: 155,
//     height: 170,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * 2);
//         return this.bmi;
//     }
// }
// var john = {
//     firstName: "John",
//     mass: 200,
//     height: 230,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * 2);
//         return this.bmi;
//      }
// }



// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(mark.firstName + ' has a higher BMI');
// } else if (john.bmi > mark.bmi) {
//     console.log(john.firstName + ' has a higher BMI');
// } else {
//     console.log("they have the same BMI")


// Loopging backwards

// let john = ["John", "Smith", 1990];

// // for (let i = 0; i < john.length; i++) {
// //     console.log(john.reverse()[i]);
// // }


// // let john = ["John", "Smith", 1990];

// // for (let i = 0; i < john.length -1; i++) {
// //     console.log(john.reverse()[i]);
// // }

// for ( let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// function calcTip(bill){

//     let tips = [];
//     let paid = [];

//       let percentage;
//       if(bill < 50){
//         percentage = .2;
//       } else if (bill < 50 || bill < 200){
//         percentage = .15;   
//       } else {
//         percentage = .10;
//       }
//         return percentage * bill;

//     }

//   console.log(calcTip(124))
// let john = {
//   bills: [124,48,268,180,42],
//   tips: [],
//   totalAmount: [],
//   calcTip: function(){

//     for(let i = 0; i < this.bills.length; i++){
//       let percentage;
//       if(this.bills[i] < 50){
//         percentage = .2;

//       } else if (this.bills[i] < 50 || this.bills[i] < 200){
//         percentage = .15;

//       } else {
//         percentage = .10;

//       }
//        this.tips.push(percentage * this.bills[i]);
//        this.totalAmount.push(this.tips[i] + this.bills[i]);
//     }
//   }
// }



// john.calcTip();
// console.log(john);


// let john = {
//   bills: [124,48,268,180,42],
//   calcTip: function(){
//     this.tips = [];
//     this.totalAmount= [];

//     for(let i = 0; i < this.bills.length; i++){
//       let percentage;
//       let bill = this.bills[i];
//       if(bill < 50){
//         percentage = .2;

//       } else if (bill < 50 || bill < 200){
//         percentage = .15;

//       } else {
//         percentage = .10;

//       }
//        this.tips[i] = bill * percentage;
//        this.totalAmount[i] = bill + bill * percentage;
//     }
//   }
// }




// let mark = {
//   bills: [77,5,110,45],
//   calcTip: function(){
//     this.tips = [];
//     this.totalAmount= [];

//     for(let i = 0; i < this.bills.length; i++){
//       let percentage;
//       let bill = this.bills[i];
//       if(bill < 100){
//         percentage = .2;

//       } else if (bill < 100 || bill < 300){
//         percentage = .10;

//       } else {
//         percentage = .25;

//       }
//        this.tips[i] = bill * percentage;
//        this.totalAmount[i] = bill + bill * percentage;
//       }
//     }
//   }





//   function average(tips){
//     for(var i = 0; i < tips.length; i++) {

//     }
//   }

//   function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//       sum = sum + tips[i];
//     }
//     return sum / tips.length;
//   }


//   // [2, 6, 4] -> 0 / 2 / 8 / 12




// john.calcTip();
// mark.calcTip();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//   console.log("john" + "family pays higher tips with an average of " + john.average);
// } else if (mark.average > john.average) {
//   console.log("Mark" + "family pays higher tips with an average of " + mark.average);
// } else {
//   console.log(" both family's pay the same amount in tips")
// }


// function fizzBuzz() {
//   for (var i = 0; i < 100; i++) {
//     if(i % 3 === 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     } else if (i % 3 === 0 && i % 5 === 0){
//       console.log( "FizzBuzz")
//     } else {
//       console.log([i]);
//     }
//   }
// }

// fizzBuzz();


// function fizzBuzz() {
//   for (let i = 0; i < 100; i++){

//     if (i % 15 === 0) {
//       console.log("FizzBUZZ")
//     } else if (i % 3 === 0){
//       console.log("Fizz");
//     } else if (i % 5 === 0){
//     console.log("Buzz");
//   } else {
//     console.log([i]);
//   }
// }
// }

// fizzBuzz();

// function multiplier(factor) {
//   return number()      => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));
// // let john = {
// //     name: 'john',
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // }

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// Person.prototype.calcAge = function(){ 
//     console.log(2019 - this.yearOfBirth);
// }

// let john = new Person('John', 1990, 'teacher');

// let tim = new Person('Tim', 1994, 'Dev');

// let bill = new Person('Bill', 1964, 'driver');
// // new operator creates new object and points the 
// //this varibale to the new object
// // if constructor function does not create anything than the 
// //result is simply the new object created 

// john.calcAge();
// tim.calcAge();
// bill.calcAge();

// let Person = function(name,year,job){
//     this.name = name;
//     this.year = year;
//     this.job = job;
// }
// Person.prototype.calcAge = function() {
//     console.log(2019 - this.year);
// }


// let cisco = new Person('Cisco',1994,"Web Developer");

// cisco.calcAge(1994);

//Object.create 

//  let personProto = {
//      calcAge: function() {
//          console.log(2016 - this.yearOfBirth);
//      }
//  };

//  let john = Object.create(personProto);
//  john.name = 'John';
//  john.year = '1990';
//  johh.job = 'Web Developer';

//  let  jane = Object.create(personProto,
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { Value: 'designer'}
//     });


// Primitives vs Objects 

// let a = 22;
// let b = a;

// a = 23;
// console.log(a);
// console.log(b);


// // Objects 
// obj1 = {
//     name: 'cisco',
//     year: 1994
// }
// obj2 = obj1;

// obj1.name = 'timmy';

// console.log(obj1.name);
// console.log(obj2.name);

// //Functions

// let age = 22;
// let obj = {
//     name: 'Francisco',
//     city: 'Woodbridge',
// }

// function change(a,b) {
//     a = 30;
//     b.city = 'San Francisco'
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// let years = [1994,1990,2000,1998,1999];

// function arrCalc(arr,fn){
//     arrResults = [];

//     for(var i = 0; i < arr.length; i++){
//         arrResults.push(fn(arr[i]));
//     }

//     return arrResults;
// }

// function calcAge(year){
//      return 2019 - year;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if( el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// let ages = arrCalc(years, calcAge);

// let fullages = arrCalc(ages,isFullAge);

// let rate = arrCalc(ages,maxHeartRate);
// console.log(ages);
// console.log(fullages);
// console.log(rate);


// Functions returning functions 

// function interviewQuestions(job){
//   if( job === 'teacher') {
//     return function(name) {
//       console.log(name + ', why do you want to be a teacher');
//     }
//   } else if (job === 'developer'){
//     return function(name){
//       console.log(name + ', what is a object?');
//     }
//     } else {
//       return function(name){
//         console.log( 'Hello ' + name + ', what do you do?');''
//       }
//     }
//   }


//   let teacherQuestion = interviewQuestions('teacher');

//   let designerQuestion = interviewQuestions('designer');

//   teacherQuestion('john');
//   designerQuestion('John');

//   interviewQuestions('teacher')('Tim');

//   // IIFE's 

// (function (){
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // console.log(score);

// (function (goodLuck) {
//   let score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);



// Closures 

//   function retirement(reitrementAge) {
//     let a = ' years left until retirement';
//     return function(yearOfBirth) {
//       let age = 2019 - yearOfBirth;
//       console.log((reitrementAge - age) + a);
//     }
//   }

//   let retirementUS = retirement(66);
//   retirementUS(1994);

//   // Functions returning functions 

// function interviewQuestions(job){
//   if( job === 'teacher') {
//     return function(name) {
//       console.log(name + ', why do you want to be a teacher');
//     }
//   } else if (job === 'developer'){
//     return function(name){
//       console.log(name + ', what is a object?');
//     }
//     } else {
//       return function(name){
//         console.log( 'Hello ' + name + ', what do you do?');''
//       }
//     }
//   }


//   let teacherQuestion = interviewQuestions('teacher');

//   let designerQuestion = interviewQuestions('designer');

//   teacherQuestion('john');
//   designerQuestion('John');

//   interviewQuestions('teacher')('Tim');

// function interviewQuestions(job){
//   if( job === 'teacher') {
//     return function(name) {
//       console.log(name + ', why do you want to be a teacher');
//     }
//   } else if (job === 'developer'){
//     return function(name){
//       console.log(name + ', what is a object?');
//     }
//   } else {
//     return function(name){
//       console.log( 'Hello ' + name + ', what do you do?');''
//     }
//   }
// }


// let teacherQuestion = interviewQuestions('teacher');

// let designerQuestion = interviewQuestions('designer');

// teacherQuestion('john');
// designerQuestion('John');

// interviewQuestions('teacher')('Tim');


// *******************

//   function interviewQuestions(job){
//     let a;
//     if( job === 'teacher') {
//       a = ', why do you want to be a teacher';
//     } else if (job === 'developer'){
//        a = ', what is a object?';
//     } else {
//         a = ' , what do you do?';
//     }


//     return function(name){
//       console.log(name + a);
//     }
//   }

//   let teacherQuestion = interviewQuestions('teacher');

//   let designerQuestion = interviewQuestions('designer');

//   teacherQuestion('john');
// designerQuestion('John');

// interviewQuestions('teacher')('Tim');

//// Coding challege 


// this.promptAnswerCheck = function(){
//   promptAnswer prompt("Please select your answer here");
//   if (promptAnswer === correctAnswer){
//     return console.log("Thats correct")
//   } else {
//     return console.log("Incorrect")
//   }
//  }

// (function (){

// let Question = function(question,answer,correctAnswer) { 
//  this.question = question;
//  this.answer = answer;
//  this.correctAnswer = correctAnswer;
// }

// Question.prototype.displayQuestion = function() {
//   console.log(this.question);

//   for (let i = 0; i < this.answer.length; i++) {
//     console.log(i + ":" + this.answer[i]);
//   }

// }

// Question.prototype.checkAnswer = function(ans) {

//   if(ans === this.correctAnswer){
//     console.log('Good Job');
//     questions[n]
//   } else {
//     console.log('Try again');
//   }

// }

// Question.prototype.displayNextQuestion = function() {

//   for (let i = 0; i < questions.length; i++) {
//     console.log(this.question[n]);
//   }


//   // while(answer === this.correctAnswer) {
//   //   console.log(questions[n]);
//     // displayQuestion()
//     // let answer = parseInt(prompt('Please select the correct answer'));
//       // questions[n].displayQuestion();
//       // questions[n].checkAnswer(answer);
//   // }

// }

// let question1 = new Question("Who is my favortie music artist?", ['Kanye West','Maulma','Drake'],1);

// let question2 = new Question("what is my favrotie anime?", ['Deathnote','Dragonball Z','Naturo'],1);

// let question3 = new Question("How old am I?", [24,36,19],0);

// let questions = [question1,question2,question3];


// let n = Math.floor(Math.random() * questions.length);


// questions[n].displayQuestion();

// let answer = parseInt(prompt('Please select the correct answer'));
// // ^ converts string to number

// questions[n].checkAnswer(answer);

// questions[n].displayNextQuestion();


// })();

// ES5

// const cow = 'cow';

// console.log(cow);

// var me = 'me';

// var me = 'Fran';

// console.log(me);

// const user = {
//   name: 'ed',
//   age: 24,
//   sayName: function() {
//     console.log(`My name is `)
//   }
// }

// const Person = function(name,haircolor,eyecolor){
//   this.name = name;
//   this.haircolor = eyecolor;
//   this.eyecolor = eyecolor;
// }

// const Francisco = new Person ('Francisco', 'Brown','brown');

// console.log(Francisco);

// sayList = () => {}


// class ShoppingList {
//   constructor(items, num) {
//     this.items = items;
//     this.num = num;
//   }
//   sayList() {
//     console.log(this.items);
//   }
// }

// const myList = new ShoppingList(['Milk','Tuna','Jello'], 3);

// myList.sayList();

// class Product extends ShoppingList{
//   constructor(items, num, amount, cost){
//     super(items, num)
//     this.amount = amount;
//     this.cost = cost;

//   }
// }

// const product = new Product(['monster','candy','paper'], 3, 3, 200);

// product.sayList();


// OLD Javascript 

// function getData(data, callback) {
//   setTimeout(()=> {
//     console.log('reading from the database');
//     callback({ data: data});
//   }, 2000);
// }

// getData(5, function(data){
//   console.log(data)
// });

// // ES5
// var name5 = ' Jane Smith';

// var age = 23;

// name5 = 'Jane Miller';

// console.log(name5);

// //ES6

// const name6 = 'jane smith'

// let change = 24;

// name6 = 'jane miller'
// console.log(name6)

// //es5 

// function driverLicense(passTest) {

//   if (passTest) {
//   }
//   var name = 'john';
//   var yearOfBirth = 1994;

//   console.log(name + 'born in ' + yearOfBirth + 'is now 24');
// }

// driverLicense(true);

// ///ES6

// function driverLicense(passTest) {

//   if (passTest) {
//   }
// }
// let name = 'john';
// const yearOfBirth = 1994;

// console.log(name + 'born in ' + yearOfBirth + 'is now 24');

// driverLicense(true);


// const a = 1;

// let b = 2;

// console.log(a + b);

// let firstName = 'john';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//   return 2016 - year;
// }

// console.log(' This is ' + firstName + ' ' + lastName + 'born in' + yearOfBirth);

// // Es6 
// console.log(`This is ${firstName} ${lastName} `)

// const n = `${firstName} ${lastName}`

// console.log(n.startsWith('J'));
// console.log(n.endsWith('J'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));

// const years = [1990, 1965, 1982];

// // ES5 

// var ages5 = years.map(function(el){
//   return 2016 - el;
// });
// console.log(ages5);

// //ES6

// // const ages6 = years.map(el => 2016 - el);
// // console.log(ages6);

// let ages6 = years.map((el , index) => `Age el ${index + 1}: ${2016 - el}.`);

// console.log(ages6);


// ES6

// const [name, year ] = ['john', 26];

// console.log(name);
// console.log(year);



// function calcAgeRetire(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetire(1994);

// console.log(age2);
// console.log(retirement);



// function addFourBabies (a, b, c, d){
//   return a + b + c + d;
// }

// var sum1 = addFourBabies(18, 30, 12, 21) ;
// console.log(sum1);

// //ES5 
// let ages = [18,30,12, 21];
// var sum2 = addFourBabies.apply(null, ages);

// console.log(sum2);

// //ES6

// const sum3 = addFourBabies(...ages);
// console.log(sum3);

// // Arrays 
// const familySmith = ['John', 'Jane', 'Mark'];

// const familyMiller = ['Marry', 'Bob', 'Ann'];

// const bigFam = [...familySmith, ...familyMiller];

// console.log(bigFam);



//REST Parameters

// ES5 

// function isFullAge5() {
//     console.log(arguments);

//     let agrsArr = Array.prototype.slice.call(arguments);

//     agrsArr.forEach(function(cur) {
//       console.log((2016 - cur) >= 18);
//     })
// }

// isFullAge5(1990, 1994,1965);


// ES5
//  function isFullAge6() {

//     console.log(arguments);
//  }

// function isFullAge(...years) {

//   years.forEach(cur => console.log(2016 - cur) >= 18));
// }

// isFullAge(1990, 1999, 1965, 2016, 1987);

// function isFullAge6(limit,...years) {
//   years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

//Maps

// const question = new Map();

// question.set('question', 'What is the official name of the latest JS Version');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer')
// question.set(false, 'Wrong, Please try again!');

// console.log(question.get('question'));
// // console.log(question.size);

// if(question.has(4)) {
//   // question.delete(4);
// }

// // question.clear();

// question.forEach((value, key) => 
// console.log(`Thius is ${key}, and it's set to ${value}`));


// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));


// // Classes 

// class Person {
//   constructor(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Data().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
// }

// // const john6 = new Person6('john',1990,'teacher') 

// class Athlete6 extends Person {
//   constructor(name, yearOfBirth, job, olymicGames, medals){
//     super(name, yearOfBirth,job);
//       this.olymicGames = olymicGames;
//       this.medals = medals;

//     } 
//     wonMedal() {
//       this.medals++;
//       console.log(this.medals);
//     }
//   }

//   const johnAthlete6 = new Athlete6('john', 1994, 'swimmer', 3, 10);

//   johnAthlete6.wonMedal();
//   johnAthlete6.calculateAge();

// Sub classes 

// ES5 

//   var  Person5 = function(name, yearOfBirth, job){
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
//     }


//     Person5.prototype.calculateAge =  function() {
//       var age = new Date().getFullYear() - this.yearOfBirth;
//       console.log(age);
//     }

//     var Athlete5 = function(name, yearOfBirth, job,olymicGames, medals) {

//       Person5.call(this, name, yearOfBirth, job);

//       this.olymicGames = olymicGames;
//       this.medals = medals;
//     }


//     Athlete5.prototype = Object.create(Person5.prototype);
//     // connects prototypes

//         Athlete5.prototype.wonMedal = function() {
//           this.medals++;
//           console.log(this.medals);
//         }

// var johnAthlete5 = new Athlete5('John', 1990, 'Swiimer', 3, 10);


// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// // ES6 

// class Person6 {
//   constructor(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(ame, yearOfBirth, job, olymicGames, medals) {
//       super(name, yearOfBirth, job);
//       this.olymicGames = olymicGames;
//       this.medals = medals;
//   }

//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10);


// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();

class Park {
  constructor(name, buildYear, trees, parkArea) {
    this.name = name;
    this.buildYear = buildYear;
    this.trees = trees;
    this.parkArea = parkArea;
  }
  calcTreeDensity() {
    let treeDesity;

    treeDesity = this.trees / this.parkArea;

    console.log(`Park ${this.name} has a tree Density of ${treeDesity} per square km.`);
  }

  calcAverageAge(...ages) {
    let allAges;
    let average;
    allAges = ages.map(cur => (2019 - cur)).reduce((a, b) => (a + b), 0);
    average = allAges / 3;
    console.log(`Our parks have an average of ${average} years :D`);
  }

  moreYears(arr) {
    for (let i = 0; i < arr.length; i++) {

      if (arr[i].trees > 1000) {
        console.log(`${arr[i].name} has the most trees`);
      }
    }
  }

}

class Streets extends Park {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  averageStreet(arr) {
    let streetLengths;
    let averageLengths;

    streetLengths = arr.map(i => (i.length)).reduce((a, b) => (a + b), 0);

    averageLengths = streetLengths / 4;

    console.log(`Our four streets have a total length of ${streetLengths} Miles and a average of ${averageLengths} Miles`);
  }

  streetClass(arr){
       for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i].name} was buit os ${arr[i].buildYear}, is a ${arr[i].size} street`);
    }
  }
}

const Park1 = new Park('Park 1', 1999, 888, 54);
const Park2 = new Park('Park 2', 2003, 1002, 66);
const Park3 = new Park('Park 3', 2010, 967, 62);

let allParks = [Park1, Park2, Park3];

const Street1 = new Streets('Street 1', 1975, 7, 'normal');
const Street2 = new Streets('Street 2', 1988, 5, 'small');
const Street3 = new Streets('Street 3', 2000, 9, 'big');
const Street4 = new Streets('Street 4', 2002, 7, 'normal');

let allStreets = [Street1, Street2, Street3, Street4];

Park1.calcTreeDensity();
Park1.calcAverageAge(Park1.buildYear, Park2.buildYear, Park3.buildYear);
Park1.moreYears(allParks);

Street1.averageStreet(allStreets);
Street1.streetClass(allStreets);