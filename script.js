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


let john = {
  bills: [124,48,268,180,42],
  calcTip: function(){
    this.tips = [];
    this.totalAmount= [];
    
    for(let i = 0; i < this.bills.length; i++){
      let percentage;
      let bill = this.bills[i];
      if(bill < 50){
        percentage = .2;
        
      } else if (bill < 50 || bill < 200){
        percentage = .15;
        
      } else {
        percentage = .10;
     
      }
       this.tips[i] = bill * percentage;
       this.totalAmount[i] = bill + bill * percentage;
    }
  }
}




let mark = {
  bills: [77,5,110,45],
  calcTip: function(){
    this.tips = [];
    this.totalAmount= [];
    
    for(let i = 0; i < this.bills.length; i++){
      let percentage;
      let bill = this.bills[i];
      if(bill < 100){
        percentage = .2;
        
      } else if (bill < 100 || bill < 300){
        percentage = .10;
        
      } else {
        percentage = .25;
        
      }
       this.tips[i] = bill * percentage;
       this.totalAmount[i] = bill + bill * percentage;
      }
    }
  }
  
  
  
  
  
  function average(){
    for(var i = 0; i < tips.length; i++) {
      
    }
  }
  
  function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
      sum = sum + tips[i];
    }
    return sum / tips.length;
  }
  
  
  // [2, 6, 4] -> 0 / 2 / 8 / 12




john.calcTip();
mark.calcTip();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log("john" + "family pays higher tips with an average of " + john.average);
} else if (mark.average > john.average) {
  console.log("Mark" + "family pays higher tips with an average of " + mark.average);
} else {
  console.log(" both family's pay the same amount in tips")
}