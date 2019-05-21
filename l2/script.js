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
var firstName = 'Henna';
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
