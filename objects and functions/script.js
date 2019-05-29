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
prototype chain
*************************************

*/
