const numbers = [];

let number1 = Number(prompt("Enter number 1:"));
numbers.push(number1);

let number2 = Number(prompt("Enter number 2:"));
numbers.push(number2);

let number3 = Number(prompt("Enter number 3:"));
numbers.push(number3);

let number4 = Number(prompt("Enter number 4:"));
numbers.push(number4);

let number5 = Number(prompt("Enter number 5:"));
numbers.push(number5);

console.log("Numbers:", numbers);

let searchNumber = Number(prompt("Enter a number to search:"));

if (numbers.includes(searchNumber)) {
    console.log("Number", searchNumber, "is found in the array.");
} else {
    console.log("Number", searchNumber, "is not found in the array.");
}

numbers.pop();

console.log("Updated Numbers:", numbers);

numbers.sort(function (a, b) {
    return a - b;
});

console.log("Sorted Numbers:", numbers);