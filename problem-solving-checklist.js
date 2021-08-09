//1. how to declare a function feetToInch

function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const output = feetToInch(12);
// console.log(output);

//2. how to declare a function centimeterToMeter

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const result = centimeterToMeter(1000);
// console.log(result);

//3. how to declare a function paperRequirements

function paperRequirements(book1, book2, book3) {
    const book1PageQuantity = 100;
    const book2PageQuantity = 200;
    const book3PageQuantity = 300;

    const book1TotalPages = book1 * book1PageQuantity;
    const book2TotalPages = book2 * book2PageQuantity;
    const book3TotalPages = book3 * book3PageQuantity;

    const total = book1TotalPages + book2TotalPages + book3TotalPages;

    return total;
}
let addition = paperRequirements(2, 6, 2);
// console.log(addition);

//4. how to declare a function bestFriend

/* function bestFriend(friendNames) {
    const names = [];
    for (const letter of friendNames) {
        if (names.indexOf(letter) > 5) {
            names.push(letter);
        }
    }
    return names;
}
let friendNames = ['Rahim', 'Karim', 'Mahin', 'Mahin', 'Akash', 'Batash', 'Sobuj', 'Holud'];
const bestu = bestFriend(friendNames);
console.log(bestu); */

//5. 

let i = [12, 8, -3, 1];

while (i > 0) {
    if (i > 0) {
        break;
    }
    i++;
}

console.log(i);