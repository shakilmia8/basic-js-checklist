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

let number = 7;
while (number <= 19) {
    // console.log(number);
    number += 2;
}

//8. how to declare array , array-length, array-position-change, array-add-value, array-remove-value

let ages = [12, 23, 56, 61, 21, 34, 54, 21, 44, 54, 76];
// console.log(ages);
// console.log(ages.length);
ages[4] = 100;
// console.log(ages);
ages.push(22, 42);
// console.log(ages);
ages.pop();
// console.log(ages);

//9. how to declare for loop on array

let numbers = [12, 13, 14, 15, 16, 17, 18, 19];

// step 1:
for (let i = 0; i < numbers.length; i++) {
    i = numbers;
    // console.log(i);
}

// step 2:
for (let number of numbers) {
    i = number;
    // console.log(i);
}

//10. how to declare numbers greater than 80 in an array

let pens = [12, 25, 78, 80, 90, 88, 100, 82, 81, 89, 15, 35, 200];
let pen = pens[0];
for (let i = 0; i < pens.length; i++) {
    pen = pens[i];
    if (pen >= 80) {
        // console.log(pen);
    }
}

//11. how to declare multiply three numbers using a function

function result(n1, n2, n3) {
    const output = n1 * n2 * n3;
    return output;
}
const total = result(3, 2, 3);
// console.log(total);

//12. how to declare an object with three property & change value of one property

let computer = { price: 45000, storage: 1000, brand: 'acer' };
computer.price = 55000;
computer['price'] = 77000;
let computerPrice = 'price';
computer[computerPrice] = 19000;
// console.log(computer);