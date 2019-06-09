/*
*************************************
function constructors
*************************************

var ensio = {
    name: 'Ensio',
    yearOfBirth: 2013,
    species: 'cat'
}; 

var Animal = function(name, yearOfBirth, species) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.species = species;
}; 

Animal.prototype.calculateAge = function() {
    console.log(2019-this.yearOfBirth);
}

Animal.prototype.toverit = 'sandstorm'; 

Animal.prototype.litterPreferance = '';

Animal.prototype.litterType = function() {
    if (this.litterPreferance === 'wooden') {
        console.log('good little forest boy');
    } else if (this.litterPreferance === 'cat sand') {
        console.log('good regular cat');
    } else if (this.litterPreferance === 'none') {
        console.log('little adventure man');
    }
}


var ensio = new Animal('Ensio',2013,'cat'); 
ensio.calculateAge();

var saskia = new Animal('Saskia',2011,'big cat');
var frans = new Animal('Frans',2012,'cat with a kind face');

saskia.calculateAge(); 
frans.calculateAge(); 

console.log(ensio.toverit, saskia.toverit, frans.toverit);

ensio.litterPreferance = 'wooden';
saskia.litterPreferance = 'cat sand';
frans.litterPreferance = 'none';

ensio.litterType();
saskia.litterType();
frans.litterType();

*************************************
creating objects: Object.create 
*************************************

var animalProto = {
    calculateAge: function() {
        console.log(2019-this.yearOfBirth);
    }
}

var ensio =  Object.create(animalProto);
ensio.name = 'Ensio';
ensio.yearOfBirth = 2013;
ensio.species = 'cat';

var saskia = Object.create(animalProto, {
    name: { value: 'Saskia'},
    yearOfBirth: {value: 2011},
    species: {value: 'big cat'}
});
**************************************
Primitives vs. objects
**************************************


// primitives
var a = 15;
var b = a;
a = 48;
console.log(a,b); 

//objects 
var objectOne = {
    name: 'ensio',
    age: '5'
};

var objectTwo = objectOne;

objectOne.age = 6; 
console.log(objectOne.age, objectTwo.age);

//functions
var age = 27;
var obj = {
    name: 'Saskia',
    city: 'Turku'
};

function change(a,b) {
    a = 30; 
    b.city = 'Helsinki'
};

change(age,obj); 
console.log(age, obj.city);

*******************************************************************
functions as arguments 
*******************************************************************



var years = [1990,1965,1937,1982,2002];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019-el;
}

function isFullAge(el) {
    var age = calcAge(el);
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}

function maxHeartRate (el) {
    if (el >= 18 && el <=81) {
        return Math.round(206.9-(0.67* el)); 
    } else {
        return -1;  
    }
}

var ages = arrayCalc(years,calcAge);
var fullAges = arrayCalc(years,isFullAge);
var maxRate = arrayCalc(ages,maxHeartRate);

console.log(maxRate);

**************************************************************
functions returning functions 
**************************************************************



function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }

    } else if (job === 'teacher') {
        return function(name) {
            console.log(name+', what do you teach?');
        }
    }
    else {
        return function(name) {
            console.log('Hello, '+name+', what do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('cat');

teacherQuestion('Ensio');
designerQuestion('Saskia');
otherQuestion('Frans');
interviewQuestion('dog')('Jack');

*******************************
IIFE immediately invoked function expressions
*******************************

 

function game() {
    var score = Math.random()*10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random()*10;
    console.log(score >= 5);    
})();

(function (goodLuck) {
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);    
})(5);

****************************************
closures 
****************************************



function retirement (retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age)+a);
    }
}

var retirementUSA = retirement(66)(1990);
var retirementFinland = retirement(65)(1990);
var retirementIceland = retirement(67)(1990);



function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name+', what do you teach?');
        }
        else {
            console.log('Hello, '+name+', what do you do?');
        }    
    }
}

interviewQuestion('cat')('Ensio');

***********************************
bind, call, apply 
***********************************
*/