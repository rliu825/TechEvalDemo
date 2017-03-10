/////////////////////////////////
// 1_Variable: let and const

// ES5
function variable1_5(){
    var name5 = 'Jane Doe';
    var age5 = 23;
    name5 = 'Jane Miller';
    // console.log(name5);
    document.getElementsByName('variable1_5')[0].innerHTML = name5;
}
// ES6
function variable1_6(){
    const name6 = 'Jane Doe'; //immutable
    let age6 = 23; //mutable(value can be changed)
    //console.log(name6);
    try {
        name6 = 'Jane Miller';
    }
    catch(err) {
        document.getElementsByName('variable1_6')[0].style.color ='red';
        document.getElementsByName('variable1_6')[0].innerHTML = err.message;
    }



}

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        //console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }  
    var temp = firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.';
    return temp;
}

// driversLicence5(true);


function variable1_2_5(){
    document.getElementsByName('variable1_2_5')[0].innerHTML = driversLicence5(true);
}

// ES6
function driversLicence6(passedTest) {

    if (passedTest) {
        //var defined only in this block
        let firstName;
        const yearOfBirth = 1990;
        firstName = 'John';
    }    
    var temp = firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.';
    return temp;
}

// driversLicence6(true);

function variable1_2_6(){

    try {
        driversLicence6(true);
    }
    catch(err) {
        document.getElementsByName('variable1_2_6')[0].style.color ='red';
        document.getElementsByName('variable1_2_6')[0].innerHTML = err.message;
    }

    
}

// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

/////////////////////////////////
// 2_String: String intepolation & template literals


let firstName2 = 'John';
let lastName2 = 'Smith';
const yearOfBirth2 = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
//console.log('This is ' + firstName2 + ' ' + lastName2 + '. He was born in ' + yearOfBirth2 + '. Today, he is ' + calcAge(yearOfBirth2) + ' years old.');

function string1_5(){
    document.getElementsByName('string1_5')[0].innerHTML = 'This is ' + firstName2 + ' ' + lastName2 + '. He was born in ' + yearOfBirth2 + '. Today, he is ' + calcAge(yearOfBirth2) + ' years old.';
}
// ES6
//console.log(`This is ${firstName2} ${lastName2}. He was born in ${yearOfBirth2}. Today, he is ${calcAge(yearOfBirth2)} years old.`);

function string1_6(){
    document.getElementsByName('string1_6')[0].innerHTML = `This is ${firstName2} ${lastName2}. He was born in ${yearOfBirth2}. Today, he is ${calcAge(yearOfBirth2)} years old.`;
}





let firstName3 = 'John';
let lastName3 = 'Smith';


//ES6 new features of string manipulation
const n = `${firstName3} ${lastName3}`;
console.log(n.startsWith('j')); //false - case sensitive
console.log(n.endsWith('th')); //true can be more that one character
console.log(n.includes('oh')); //true
console.log(`${firstName3} `.repeat(5)); //John John John John John 





/////////////////////////////////
// Lecture: Arrow functions

//example1
const years = [1980, 1990, 2000, 2010];

// ES5
var ages5 = years.map(function(el) {
    return 2017 - el;
});

// ES6
let ages6 = years.map(el => 2017 - el);


function arrow_1_5(){
    document.getElementsByName('arrow_1_5')[0].innerHTML = '[' + ages5 + ']';
}

function arrow_1_6(){
    document.getElementsByName('arrow_1_6')[0].innerHTML = '[' + ages6 + ']';
}


//example2
let age2_6;


age2_6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age index ${index + 1}: ${age}`;
});



function arrow_2_6(){
     document.getElementsByName('arrow_2_6')[0].innerHTML = '[' + age2_6 + ']';
}


//example3
// ES5 - eg1
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // var self = this; 
        document.getElementsByClassName('box green')[0].addEventListener('click', function() {
        var str = 'This is box number ' + this.position + ' and it is ' + this.color;
        alert(str);
        //return str;
        });
    }
}

if (document.getElementsByClassName('box green')[0]){
    box5.clickMe();
}
// // ES5 - eg2
var box5_2 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // var self = this; 
        document.getElementsByClassName('box green')[1].addEventListener('click', function() {
        var str = 'This is box number ' + this.position + ' and it is ' + this.color;
        alert(str);
        //return str;
        }.bind(this));
    }
}

if (document.getElementsByClassName('box green')[1]){
    box5_2.clickMe();
}
// // ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.getElementsByClassName('box green')[2].addEventListener('click', () => {
        var str = 'This is box number ' + this.position + ' and it is ' + this.color;
        
        alert(str);
        });
    }
}

if (document.getElementsByClassName('box green')[2]){
    box6.clickMe();
}



/////////////////////////////////
// Class
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    return age;
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
    this.medals++;
    return this.medals;
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

function variable4_5(){
    document.getElementsByName('variable4_5')[0].innerHTML = "Athelete John's age is " + johnAthlete5.calculateAge() + ' and he won ' + johnAthlete5.wonMedal() + ' medals';
}




//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        return this.medals;
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

function variable4_6(){
    document.getElementsByName('variable4_6')[0].innerHTML = "Athelete John's age is " + johnAthlete6.calculateAge() + ' and he won ' + johnAthlete6.wonMedal() + ' medals';
}







var foo1 = function(callback){
    alert("function1 called");
    callback();
}

var foo2 = function(){
    alert("function2 called");
}


//ES5
function callback5(){
    foo1(function(){
        foo2();
    })
}

//ES6
function promise6(){
    let foo3 = new Promise (function(){
    alert("function1_es6 called");
    });

    let foo4 = function(){
        alert("function2_es6 called");
    }


    foo3.then(foo4());
}

var http = require('http');

function getURL(URL) {
    return new Promise(function(resolve, reject){
    http.get(URL, function(res) {
        resolve(res);
    }).on('error', function(e) {
        reject(e);
    });
    });
}
var google = getURL('http://google.com');
var github = getURL('http://github.com');

Promise.all([google, github]).then(function(results){
    results.forEach(function(result){
    console.log(result.statusCode);
    });
}).catch(function(err){
    console.log(err);
});
// /* Output
// 200
// 200
// */

// var p1 = Promise.resolve(1);
// var p2 = Promise.reject(2);
// var p3 = Promise.resolve(3);
// Promise.all([p1,p2,p3]).then(function(results){
//     console.log(results);
// });