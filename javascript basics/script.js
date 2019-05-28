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

***********************************
functions


function calculateAge(birthYear) {
    return 2019-birthYear; 
}
var ageHenna = calculateAge(1990);
var ageEnsio = calculateAge(2013);
var ageSaskia = calculateAge(2011);

console.log(ageHenna, ageEnsio, ageSaskia);

function yearsUntilRetirement(birthYear,firstName) {
    var age = calculateAge(birthYear);
    if (65-age <= 0 ) {
        return firstName + ' has already retired!';
    } else {
    return firstName + ' has '+ (65-age) + ' years until retirement. ';
    }
}

console.log(yearsUntilRetirement(1990,'Henna')); 
console.log(yearsUntilRetirement(1960,'Tuija'));
console.log(yearsUntilRetirement(1913,'Ensio'));  

*******************************************************
Function Statements and Expressions 


var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName+' drives kids around.';
        case 'designer':
            return firstName+' designs websites.';
        default: 
            return firstName+' has an unspecified profession. ';

    }
}
console.log (whatDoYouDo('teacher','Ensio'));
console.log(whatDoYouDo('','Saskia'));

// when javascript expects a value -> expression 
// if no value returned -> statements

***************************************************
Arrays
 

var names = ['Frans','Ensio','Saskia'];
var years = new Array(2010,2013,2011);
console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Tesla';
console.log(names);
names[5] = 'Ensio';
console.log(names);

//different data types

var ensio = ['ensio','heinäjärvi','2013','cat',false];
console.log(ensio);

ensio.push('blue'); // adds a value at the end of the arraylist
ensio.unshift('Mr.'); // adds a value in the beginning of the arraylist
console.log(ensio);

ensio.pop(); // removes the last value from the end of the arraylist
ensio.pop();
ensio.shift(); // removes the first value from the arraylist
console.log(ensio);

console.log(ensio.indexOf('ensio')); // return the index of the value, return -1 if not in the array 
ensio.push('designer');
var isDesigner = ensio.indexOf('designer') === -1 ? 'Ensio is not a designer' : 'Ensio is a designer';
console.log(isDesigner);

*********************************************************************
coding challenge 3 



function tipCalculator(amountOfBill) {
    if (amountOfBill < 50) {
        return 0.2*amountOfBill;
    } else if (amountOfBill >= 50 &&  amountOfBill < 200) {
        return 0.15*amountOfBill;
    } else {
        return 0.1*amountOfBill;
    }

}

var firstBill = 124;
var secondBill = 48;
var thirdBill = 268;    

var firstTip = tipCalculator(firstBill);
var secondTip = tipCalculator(secondBill);
var thirdTip = tipCalculator(thirdBill);

var justTips = [firstTip,secondTip,thirdTip];
var finalAmounts = [(firstTip+firstBill),(secondBill+secondTip),(thirdBill+thirdTip)];

console.log(justTips);
console.log(finalAmounts);

********************************************************************
Objects and properties


// object literal 


console.log(ensio.isAGoodBoy);
console.log(ensio['surname']);
var animal = 'species';
console.log(ensio[animal]);

ensio.isAGoodBoy = 'false';
console.log(ensio.isAGoodBoy);

//new object syntax

var saskia = new Object();
saskia.name = 'saskia';
saskia.surname = 'saskiasson';
saskia.species = 'big cat';
saskia.color = 'also brown';
console.log(saskia);

*******************************************************
Objects and methods



var ensio = {
    name: 'ensio',
    surname: 'heinäjärvi',
    species: 'cat',
    color: 'brown',
    family: ['henna','tuija','jouni'],
    birthYear: 2010,
    isAGoodBoy: true,
    calcAge: function(birthYear) {
        this.age =  2019 - this.birthYear;
    }

};  

 ensio.calcAge();
 console.log(ensio); 
 **************************************************
 CODING CHALLENGE 4

 
var mark = {
    name: 'mark markson',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
};

var john = {
    name: 'john johnson',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.name+' has higher BMI.');
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(john.name+ ' has higher BMI.');
} else {
    console.log(mark.name+' and '+john.name+' have equally high BMI');
}
**************************************************************************
Loops and iteration 



for (var i = 0; i < 10; i+= 2) {
    console.log(i);
}

for (var i = 0; i<ensio.length;i++) {
    console.log(ensio[i]);
}
 

var i = 0;
while (i < ensio.length) {
    console.log(ensio[i]);
    i++;
}


var ensio = ['ensio','kissa', 6, true,'good boy'];
for (var i = 0; i<ensio.length; i++) {
    if (typeof ensio[i] !== 'string') continue;
    console.log(ensio[i]);
}

for (var i = 0; i<ensio.length; i++) {
    if (typeof ensio[i] !== 'string') break;
    console.log(ensio[i]);
    
}
for (var i = ensio.length-1; i>=0;i--) {
    console.log(ensio[i]);
}


***********************************************************
CODING CHALLENGE 5



var billJohn = {
    values: [124,48,268,180,42],
    tips: [],
    finalAmounts: [],
    calcTip: function() {
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i] < 50) {
                var tip = 0.2 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            } else if (this.values[i] >= 50 && this.values[i]<200) {
                var tip = 0.15 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            } else {
                var tip = 0.1 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            }
            
            

        }
        console.log('individual tips: ' + this.tips);
        console.log('final amounts '+this.finalAmounts);
        
       
    
    }
};

var billMark = {
    values: [77,375,110,45],
    tips: [],
    finalAmounts: [],
    calcTip: function() {
        for (var i = 0; i < this.values.length; i++) {
            if (this.values[i] < 100) {
                var tip = 0.2 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            } else if (this.values[i] >= 100 && this.values[i]<300) {
                var tip = 0.10 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            } else {
                var tip = 0.25 * this.values[i];
                this.tips.push(tip);
                this.finalAmounts.push(tip+this.values[i]);
            }
            
            

        }
        console.log('individual tips: ' + this.tips);
        console.log('final amounts '+this.finalAmounts);
        
       
    
    }
};

billJohn.calcTip();
billMark.calcTip();

function tipCalculator (tipArray) {
    var sum = 0;
    for (var i = 0; i < tipArray.length; i++) {
        sum+= tipArray[i];
    }
    return sum / tipArray.length;
}

console.log(tipCalculator(billJohn.tips));
console.log(tipCalculator(billMark.tips));

if (tipCalculator(billJohn.tips > billMark.tip)) {
    console.log('John gave higher average of tips');
} else {
    console.log('Mark gave higher tips.'); 
}


*/

