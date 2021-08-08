//1. how to declare three type variable (number, string, boolean)

var bookpage = 200;
var bookname = 'java script';
var isBookHere = true;
/* console.log(typeof bookpage);
console.log(typeof bookname);
console.log(typeof isBookHere); */

//2. how to declare let & const variable

let friendAges = [21, 22, 25, 24, 20, 21]; // you can this value change it
const friendNames = ['Rahim', 'Karim', 'Sagor', 'Mahin', 'Arif']; // you can't this value change it
/* console.log(friendAges);
console.log(friendNames); */

//3. how to declare addition, subtraction, multiplication, division & remaining number

let num1 = 70;
let num2 = 30;
const add = (num1 + num2);
const sub = (num1 - num2);
const multiply = (num1 * num2);
const divided = (num1 / num2);
const reastNumber = (num1 % num2);
/* console.log(add);
console.log(sub);
console.log(multiply);
console.log(parseInt(divided));
console.log(reastNumber); */

//4. how to declare comparison between two numbers (six step by step)

let watchPrice = 2250;
let shirtPrice = 1450;

// step 1:
if (watchPrice < shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

// step 2:
if (watchPrice > shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

// step 3:
if (watchPrice == shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

// step 4:
if (watchPrice != shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

// step 5:
if (watchPrice <= shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

// step 6:
if (watchPrice >= shirtPrice) {
    // console.log('I will take watch');
}
else {
    // console.log('I will take shirt');
}

//5. how to declare one condition & two or both condition

let phonePrice = 25000;
let gantsPantPrice = 2200;
const myMoney = 30000;

// step 1: for only one condition
if (phonePrice < myMoney || gantsPantPrice < myMoney) {
    // console.log('I will take a phone & a gants pant');
}
else {
    // console.log('Oh! No, i need some money');
}

// step 2: for two or both condition
if (phonePrice < myMoney && gantsPantPrice < myMoney) {
    // console.log('I will take a phone & a gants pant');
}
else {
    // console.log('Oh! No, i need some money');
}

//6. how to declare else-if condition

let bagPice = 4000;
let shoePrice = 3000;
const mybuget = 3000;

if (bagPice <= mybuget) {
    // console.log('I will take a bag');
}
else if (shoePrice <= mybuget) {
    // console.log('I will take a shoe');
}
else {
    // console.log('Oh! shit, I need some money');
}

//7. how to declare Odd number(7-19) by while loop

let i = 0;
while (i >= 7) {
    let OddNumber = i + 2;
    i++;
    console.log(OddNumber);
}