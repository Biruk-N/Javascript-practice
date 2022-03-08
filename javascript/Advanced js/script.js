// function bb(){
//     var a = "hello"
// }
// console.log(a); not access function declaration

// root scope (windows)

// ternary operator if else but in one line and eazy
// syntax var condition ? expre1 : expre2;
// function isUserValid(bool) {
//     return bool;
// }
// var answer = isUserValid(true) ? "you may enter" :"access denieed";
// var auto = 
// "your account is "
// + (isUserValid(true)? 
// "1234" :"not"); 

// function moveCommand(direction) {
//     var what;
//     switch (direction) {
//         case "forward":
//             what = "Y O U in forward";
//             break;
//         case "back":
//             what = "Y O U back";
//         case "right":
//             what = "Y O U right";
//             break;
//         case "left":
//             what = "Y O U left";
//             break;
//             default:
//                 what = "please fix";
//     }
//     return what;
// }

// ECMAScirpt ES5 & ES6
const player = 'bobby';
let experience = 100;
let wizardLevel = false;
if (experience > 90)
{
    let wizardLevel = true;
    // reason not return true is 
    // b/c it thinks this is 
    // a new function so must
    //  console.log(wizardLevel) inside
}
// let is like var
// const can not be updated important!!!
// but there is an exception
// eg. 
//         const obj = {
//             player:'bob',
//             experience:100,
//             wizardLevel:false
//         } can change obj.player = new value
// the only thing that can not change is variable!!!!!!
//  destructuring
// in here eg. 
//         const obj = {
//             player:'bob',
//             experience:100,
//             wizardLevel:false
//         }
// instead of 
//            const  obj.player = obj.player;
//            const  obj.experience = obj.experience;
//             
// we can use
//  const { player, expereince} = obj;
// let { wizardLevel} = obj;



// object property 
// const name = 'Jhon Snow';

// const obj = {
//     [name] :'hello',
//     [1 + 3]:'jaa'
// }
const a = 'Sinan';
const b = true;
const c = {};

const obj = {
// instead of a:a,
    // b:b, 
    // c:c
    // in new js use 
    a,
    b,
    c
}

// template string
// instead of 
// const greeting = 
// "hello" 
// + name 
// + "you\ seem"
// + greeting+"!";
// back ticks above tab key
const name = "Sally";
const age = 34;
const pet = "horse";
const greeting = `hello ${name} you seem to be ${age - 10}. what is ${pet} you have`;

// default arguments which os empty 
// value for an argument like fname below
function greet(fname = '', age = 30, pet = ''){
    return `hello ${fname} you seem to ${age -10} what is ${pet} `
}

// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
sym2 === sym3 // this is false b/c symbol is used to create unique type

// arrow function
// earlier we use 
function add(a, b) {
    return a + b;
}
// but now if only one return value

const add2 = (a, b) => a+b;

// advanced function 
const first = () => {
    const great = 'hi ';
    const second = () => {
        alert(great);
    }
    return second;
}
const newFunction = first();
newFunction();
// closures - a function ran. the function executed. it's never going toexecute agin
// it's going remember that there are references to those variables.
// so the child!!!!!! scope always has access to the parent scope.
// but not the vice versa


// currying
const multiplicty = (a, b) => a * b;
multiplicty(4, 4);
// to this
const curryMultiplicty = (a) => (b) => a * b;
curryMultiplicty(3)(4);
// cause it think as two function
// we use to separate like eg.
const multiplyby5 = curryMultiplicty(5);
// so if we want to mulitply only says that multiplyby5(no_)


// Compose - act of putting two functions
// together to  form a third function where the output
// of one function is the input of the other, 

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
// so it does that pass sum to f & g then a = 5
// f(g(5)) is then go back to sum = g(5) = 6
// then next f(6), sum(6) = 7
// then returns 7

// Avoiding Side Effects, functional purity.

var a = 1;
function b(){
    // a = 2; this is side effect that affect outside variable
    // by avoiding this side effect there comes functional purity
    // then alwways return the value not adding of undefined
    // Deterministic created 
}

// Advanced arrays
const array = [1, 2, 3, 5];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num + 2);
})
console.log(double);

// map, filter, reduce

// const mapArray = array.map((num) =>{
//     return num * 2;
// }) this code simply can written in 
const mapArray = array.map(num => num * 2); 
// no need return value b/c it's single line

console.log(mapArray);
// map transform array in new array
// the use is needed to apply those rule
// we define ealier to avoid undefined only return value

// // filter
// const filterArray = array.filter(num => {
//     return num > 5;

// });

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);
// output [] empty

// reduce uses-ful for combine both map & filter 

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;

})
// also 
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;

}, 5) //mean that start with one


// accumulator or some times cold acc is 
// some thing can store the information that happen in the body of the function.

// Advanced Object
// Reference type
// Context
// Instantiation
// The idea is objects === box(unique)
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 20};  

// context 
// similiar with scope but using this avoid limitation of function value's range
// is tell where we are in objects
// console.log(this); mean like "window" which include the whole element
// so this === windows
// it create not like this 
// function a (){
//     console.log(this);
// }
// new way is created in object
const object4 = { a: function(){
        console.log(this);
    }
}//so this is now object


// Instantiation
// mean instance or copy of objects
class player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type} `);
    }
}
class Wizard extends player {
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`wee I'm ${this.type}`)
    }
    pause(){
        console.log(`wee I'm a ${this.name}`);
    }
}
const Wizard1 = new Wizard('Shelly', 'Healer');
const Wizard2 = new Wizard('Shawn', 'Dark Magic');

// pass by reference vs by value

// in javascript primitive types are immutable

// mean not change also they don't know each like object

// var a = 5;

// var b = a;

// b++; a not change but in object

let obj1 = {name: 'yao', password: '123'};

let obj2 = obj1;

obj2.password = 'easypeasy';//pass by reference 

console.log(obj1);

console.log(obj2);

// output is {name: 'yao', password: 'easypeasy'}

// {name: 'yao', password: 'easypeasy'}

// this happens b/c it's stored in memory and it pass by reference 

// it important b/c only store once

let obj = {a: 'a', b: 'b', c:'c'};

let clone = Object.assign({}, obj);

let clone2 = {...obj};//same but clean and nice

obj.c = 5;

console.log(clone);//output not affect by change in obj

console.log(clone2);//output not affect by change in obj

let obj = {
    a: 'a', 
    b: 'b', 
    c:{
        deep: 'try and copy'
    }
};

obj.c.deep = 'haahaha';

let clone = Object.assign({}, obj);

let clone2 = {...obj};

console.log(clone);//output affect by change in obj 

// b/c it's shallow clone it clone the first level

console.log(clone2);//output affect by change in obj

// to fix 

let superClone = JSON.parse(JSON.stringify(obj))

console.log(superClone)

// type coercion

1 == '1' 

// == compare to value only in coercion 

// is a language converting a certain type to another type

// all language have coercion

if(1){
    console.log(5);
}

if (0) {
    console.log(5);//output is empty b/c 0 is false coercion
}

1 == true

-0 === +0 //true

Object.is(-0, +0) //false

// ES7

'hellooo'.includes('o') //true

const pe = ['ak', 'fg', 'sf'];

pe.includes('fg')//true only if it's there

const square = (x) => x**2//means square

square(2) //4

const square2 = (x) => x**3

square2(2) //8

// ES8

'turtle'.padStart(10)//"    turtle"

'turtle'.padEtart(10)//"turtle    "

const fun = (
    a, 
    b, 
    c, 
    d,
    ) => {
    console.log(a);
}

fun(1, 2, 3, 4,)

Object.values
Object.entries
Object.keys

let obj = {
    username: 'santa',
    username1: 'rule',
    username2: 'aop'
}

Object.keys(obj).forEach((key, index0) =>{
    console.log(key, obj[key]);
})//early

Object.values(obj).forEach(value => {
    console.log(value)
}) 
// output 
// santa
// rule
// aop

Object.entries(obj).forEach(value => {
    console.log(value)
}) 
// output like key
// ['username': 'santa']
// ['username1': 'rule']
// ['username2': 'aop']
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '') 
})
// ["santa", "rule1", "aop2"] 
// Async Await



// ES10
const array = [1, 3, 4, 5]
array.flat()
// it has the same output but it helps
// when nested array is there
const array = [1, [3, 4], 5]
// so it gives us [1, 3, 4, 5]
const array = [1, 2, [3, 4, [5]]]
array.flat()
// it gives [1, 2, 3, 4, Array(1)]
// but 
const array = [1, 2, [3, 4, [5]]]
array.flat(2)//2 times
// gives [1, 3, 4, 5] b/c by default it's one
// also it works flat(50) if nested array is less than 50
// the use is if we take an input
const entries = ['bob', 'Sally',,,,, 'cindy']
entries.flat()
//  ["bob", "Sally", "cindy"]

// flatMap()
const array1 = ['a', 'b', ['c'], ['d']]

const array2 = array1.flatMap(comb => comb + 'd')
// array2
//  ["ad", "bd", "cd", "dd"]


const userEmail = '           edgd@gmail.com'
const userEmail2 = 'jak@gmail.com    '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// formEntries
userprofiles = [['commander', 23], ['derr', 30], ['jd', 30]]

Object.fromEntries(userprofiles)
try{
    ty + 'hk'
} catch{
    console.log('no no no no ')
}


// advanced loops
const vb = ['apple', 'orange', 'grape']

for (let i = 0; i < vb.length; i++){
    console.log(vb[i]);
}
// or
vb.forEach(item => {
    console.log(item)
})
// or new
// for of
// iterating - arrays, string
for(item of vb){
    console.log(item)
}
for(item of 'vb'){
    console.log(item)
}//gives v /n b mean iterating by string

// for in works with object
const detailvb = {
    apple:5, 
    orange:10, 
    grape:10
}
for(item in detailvb){
    console.log(item)
}//not iterate it's enmurating is for object
// apple
// orange
// grape

for(item in vb){
    console.log(item)
}
// 0
// 1
// 2


//debugging
//if this is given
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);
//change to meaningful 
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;//means to freze
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array)
    }, []);



