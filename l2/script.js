/* 
var firstName = 'Henna';
console.log(firstName);
var lastName = 'Heinäjärvi';
console.log(lastName);
var age = 29;

var fullAge = true;
console.log(fullAge);

var job; 
console.log(job);

job = 'teacher';
console.log(job);
*/

// type coercion 

/* var firstName = 'Henna';
var age = 29;
console.log(firstName + ' ' +age);

var job, isMarried; 

job = 'researcher';
isMarried = false; 

console.log(firstName+' is '+age+' years old '+job+'. Is she married?'+isMarried);

//variable mutation

age = 'twenty-nine';
job = 'driver';

alert(firstName+' is '+age+' years old '+job+'. Is she married?'+isMarried);

var lastName = prompt('what is your last name?');
console.log(firstName + ' ' +lastName);
*/ 
// basic operations

//math operations 
/*
var year,yearHenna,yearEnsio;
year = 2020;
yearHenna = year-29; 
yearEnsio = year-6;
console.log(yearHenna);
console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

//logical opeartions
ageHenna = 29;
ageEnsio = 6;

var hennaOlder = ageHenna < ageEnsio;
console.log(hennaOlder);

//typeof operation

console.log(typeof hennaOlder);
console.log(typeof ageEnsio);
console.log(typeof 'Ensio is younger than Henna');
var x;
console.log(x);

// operator presedence

var now = 2019;
var yearHenna = 1990;
var fullAge = 18; 

var isFullAge =  now - yearHenna >= fullAge;
console.log(isFullAge);

var ageHenna = now - yearHenna;
var ageEnsio = 6;
var average = (ageHenna+ageEnsio)/2; 
console.log(average);

//multiple assignments

var x,y;

x = y = (3+5)* 4-6;
console.log(x,y);

// more operators 

x *=2; 
console.log(x);
x+=10; 
console.log(x);
x++;
console.log(x);


//coding challenge 1

var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn;

heightMark = heightJohn = 1.8;
massMark = 78;
massJohn = 100; 


bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);

var isBmiHigher = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than Johns? '+isBmiHigher);


/************************** 
 if else statements


var firstName = 'Henna';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.')
} else {
    console.log(firstName+ ' is not married.')
}

var isMarried = true;

if (isMarried) {
    console.log('married');
} else {
    console.log('not');
}
var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn;

heightMark = 1.69;
heightJohn = 1.95;
massMark = 78;
massJohn = 192; 


bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);

var isBmiHigher = bmiMark > bmiJohn;

if (isBmiHigher) {
    console.log ('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher.'); 
}
********************
boolean logic 

var firstName = 'Henna';
var age = 125;

if (age < 13) {
    console.log(firstName+ ' is a girl.');
} else if (age >= 13 && age <20) {
    console.log(firstName+ ' is a teenager.');
} else {
    console.log(firstName + ' is a woman.');
}
***********************************
The Ternary Operator and Switch Statements 


var firstName = 'Ensio';
var age = 16;
// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName+' drinks milk. ');

var drink = age >= 18 ? 'beer' : 'milk';

console.log(drink);

//switch statement

var job = 'kitten';
switch(job) {
    case 'cat':
    case 'kitten':
        console.log (firstName +' teaches kids how to meow');
        break;
    case 'dog':
        console.log(firstName + ' teaches kids how to bark.');
        break;
    default:
        console.log(firstName + ' is a very good boy.');
}

var firstName = 'Henna';
var age = 12;
switch(true) {
    case age < 13:
        console.log(firstName+ ' is a girl.');
        break;
    case age >= 13 && age <20:
        console.log(firstName+ ' is a teenager.');
        break;
    default: 
        console.log(firstName + ' is a woman.');
        break;
}
***************************************
Truthy and Falsy values and equality operators



//falsy values: undefined, null, 0, '', NaN -> converted into false 

//truthy values: all values that are not falsy  -> converted into true

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.')
}
//Equality operators

if (height == '23') {
    console.log('The == operator does type coercion');
} else {
    console.log('nay');
}

***************************************
coding challenge 2


var avgJohn, avgMark;

avgJohn = (89 + 120 + 103) / 3;
avgMark = (116 + 94 + 123) / 3; 

avgJohn > avgMark ? console.log('John\'s team is the winner, with an average of '+avgJohn) : console.log('Mark\'s team is the winner, with an average of '+avgMark);

avgJohn = (100+120)/3;
avgMark = (100+105)/3;

switch(true) {
    case avgJohn > avgMark:
        console.log('John\'s team is the winner, with an average of '+avgJohn);
        break;
    case avgMark > avgJohn:
        console.log('Mark\'s team is the winner, with an average of '+avgMark);
        break;
    default:
        console.log('The teams are equally good. ');
        break;
}

var avgMary = (97+134+105)/3; 
console.log(avgJohn,avgMark,avgMary);
avgJohn = 200;
avgMark = 200; 

switch(true) {
    case avgJohn > avgMark && avgJohn > avgMary:
        console.log('John\'s team is the winner, with an average of '+avgJohn);
        break;
    case avgMark > avgJohn && avgMark > avgMary:
        console.log('Mark\'s team is the winner, with an average of '+avgMark);
        break;
    case avgMary > avgJohn && avgMary > avgMark:
        console.log('Mary is the winner');
        break;
    case avgMary === avgJohn && avgMary > avgMark: 
        console.log('Mary and John win.');
        break;
    case avgMary === avgMark && avgMary > avgJohn:
        console.log('Mary and Mark win');
        break;
    case avgMark === avgJohn && avgMark > avgMary:
        console.log ('John and Mark win.');
        break;
    default:
        console.log('The teams are equally good. ');
        break;
}
*/ 

