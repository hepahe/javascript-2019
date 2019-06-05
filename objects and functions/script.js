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
*/

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






