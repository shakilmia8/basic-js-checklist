// 1. write 3 variables ( number, string, boolean )

var numberVariable = 34;
var stringVariable = "Hello!";
var booleanVariable = true;

console.log("This is a number variable", numberVariable);
console.log("This is a string variable", stringVariable);
console.log("This is a number variable", booleanVariable);

// 2. 2 variables using (let, const)

let demoNumber = 50;
const PI = 3.1416;

console.log("This value is changeable", demoNumber);
console.log("This value is unchangeable", PI);

// 3. Simple Math Operations ( +, -, *, /, % )

// ( + )

let a = 10;
let b = 20;
let c = 30;

const addtion = a + b + c;
console.log("Addition will be", addtion);

// ( - )

let d = 100;
let e = 30;
let f = 20;

const subtraction = d - e - f;
console.log("Subtraction will be", subtraction);

// ( * )

let g = 10;
let h = 20;
let i = 30;

const multiply = g * h * i;
console.log("Multiply will be", multiply);

// ( / )

let j = 100;
let k = 25;

const divide = j / k;
console.log("Divide will be", divide);

// 4. comparison ( >, <, ==, !=, >=, =< )

// ( > )

var smallNumber = 30;
var bigNumber = 50;

if (smallNumber > bigNumber) {
    console.log("smallNumber > bigNumber", true);
} else {
    console.log("smallNumber > bigNumber", false);
}

// ( < )

var smallNumber = 30;
var bigNumber = 50;

if (smallNumber < bigNumber) {
    console.log("smallNumber < bigNumber", true);
} else {
    console.log("smallNumber < bigNumber", false);
}

// ( == )

var numberOne = 40;
var numberTwo = 50;

if (numberOne == numberTwo) {
    console.log("numberOne == numberTwo", true);
} else {
    console.log("numberOne == numberTwo", false);
}

// ( != )

var numberOne = 40;
var numberTwo = 50;

if (numberOne != numberTwo) {
    console.log("numberOne != numberTwo", true);
} else {
    console.log("numberOne != numberTwo", false);
}

// ( >= )

var numberOne = 55;
var numberTwo = 55;

if (numberOne >= numberTwo) {
    console.log("numberOne >= numberTwo", true);
} else {
    console.log("numberOne >= numberTwo", false);
}

// ( =< )

var numberOne = 85;
var numberTwo = 65;

if (numberOne <= numberTwo) {
    console.log("numberOne <= numberTwo", true);
} else {
    console.log("numberOne <= numberTwo", false);
}

// 5. two conditions => case-1: fulfill both conditions, case-2: fulfill at least one condition

// case-1: fulfill both conditions

var iphone = 70000;
var huawei = 50000;
var myBudget = 150000;

if (myBudget > iphone && myBudget > huawei) {
    console.log("I will buy two phone.");
} else {
    console.log("I will buy one phone.");
}

// case-2: fulfill at least one condition

var iphone = 70000;
var huawei = 50000;
var myBudget = 10000;

if (myBudget > iphone || myBudget > huawei) {
    console.log("I will buy iphone or huawei.");
} else {
    console.log("I will buy phone later.");
}

// 6. if-else

var iPhone = 90000;
var huawei = 30000;
var myBudget = 29999;

if (iphone <= myBudget) {
    console.log("I will buy iPhone.");
}
else if (huawei <= myBudget) {
    console.log("I will buy huawei.");
}
else {
    console.log("I will buy phone later.");
}

// ====== //
console.log("\n");
// ====== //

//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19

// 7 to 19 all numbers

let allNumber = 7;
while (allNumber <= 19) {
    console.log("all numbers", allNumber);
    allNumber++;
}

// ====== //
console.log("\n");
// ====== //

// odd numbers including 7 to 19

let oddNumber = 5;
while (oddNumber <= 19) {
    oddNumber = oddNumber + 2;
    console.log("odd numbers", oddNumber);
}

// ====== //
console.log("\n");
// ====== //

// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

const array = [20, 30, 45, 50, 55, 60, 70, 80, 95];
const arrayLength = array.length;
console.log("array length is", arrayLength);

var index = array.indexOf(55);
if (index != -1) {
    array[index] = 56;
}

array.splice(2, 1);

console.log(array);

// ====== //
console.log("\n");
// ====== //

// 9. use any for loop to display every elements of an array

const bookList = ["math", "english", "physics", "chemistry"];

for (const list of bookList) {
    console.log("item in book list", list);
}

// 10. you have an array of numbers. display only the numbers bigger than 80

const arr = [34, 54, 32, 67, 78, 80, 84, 86, 87, 93, 99];

const largest = [];

for (let i = 0; i < arr.length; i++) {
    const arrNumber = arr[i];
    if (arrNumber >= 80) {
        largest.push(arrNumber);
    }
}

console.log("Only the numbers bigger than 80 in array is", largest);

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

function arrayMultiply(numbers) {
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        multiply = multiply * element;
    }
    return multiply;
}

const multiplication = arrayMultiply([40, 10, 10]);
console.log("Multiplication is", multiplication);

// 12. declare an object and change any property of that object.

var phone = { name: "iPhone", price: 100000, camera: "10", storage: "16gb" }

phone.price = 80000;
phone.camera = 48;
phone.storage = "128gb";

// === another way start === //

/* var priceProperty = "price";
phone[priceProperty] = 190000; */

// phone["price"] = 230000;

// === another way end === //

console.log(phone);