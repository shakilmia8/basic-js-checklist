// 1. conversation
// feetToInch

function feetToInch(feet) {
    var inch = feet * 12;
    return inch;
}

var myFeet = 4.5;
var myinch = feetToInch(myFeet);
console.log("My inches is", myinch);

// 2. conversion
// centimeterToMeter

function centimeterToMeter(centimeter) {
    var meter = centimeter / 100;
    return meter;
}

var myCentimeterMeter = 175;
var mymeter = centimeterToMeter(myCentimeterMeter);
console.log("My meter is", mymeter);

// 3. calculation

// pageRequirements
// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

function pagesCalculator(bookOneQuantity, bookTwoQuantity, bookThreeQuantity) {
    const bookOnePages = 100;
    const bookTwoPages = 200;
    const bookThreePages = 300;
    // page calculation
    const bookOnePagesQuantity = bookOneQuantity * bookOnePages;
    const bookTwoPagesQuantity = bookTwoQuantity * bookTwoPages;
    const bookThreePagesQuantity = bookThreeQuantity * bookThreePages;
    // total pages
    totalBookPages = bookOnePagesQuantity + bookTwoPagesQuantity + bookThreePagesQuantity;

    return totalBookPages;
}

const firstOption = pagesCalculator(1, 1, 1);
console.log("Total needed pages", firstOption);

const secondOption = pagesCalculator(2, 3, 4);
console.log("Total needed pages", secondOption);

//4. friends
// bestFriend

const bestFriend = ["Rizvi", "komaning", "ridoy", "opu", "Nayem", "mredul"];

var lgth = 0;
var longest;

for (var i = 0; i < bestFriend.length; i++) {
    if (bestFriend[i].length > lgth) {
        var lgth = bestFriend[i].length;
        longest = bestFriend[i];
    }
}

console.log("Longest name of my best friend is", longest);

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
// onlyPositive

const numbers = [23, 45, 50, 23, 42, 27, -6, -9, -63, -20];

function onlyPositive(number) {
    const positiveNumbers = [];

    for (const uniqueNumber of number) {
        if (uniqueNumber < 0) {
            break;
        }
        else if (uniqueNumber >= 0) {
            positiveNumbers.push(uniqueNumber);
        }
    }

    /* for (let i = 0; i < number.length; i++) {
        const uniqueNumber = number[i];
        if (uniqueNumber < 0) {
            break;
        }
        else if (uniqueNumber >= 0) {
            positiveNumbers.push();
            console.log(uniqueNumber);
        }
    } */

    return positiveNumbers;
}

const getOnlyPositive = onlyPositive(numbers);
console.log("Only positive numebr", getOnlyPositive);