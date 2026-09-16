const numbers = [];

while (true) {
    let input = prompt("Enter a number (or 'done' to finish:");

    if (input === "done") {
        break;
    }

    numbers.push(Number(input));
}

let evenNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

if (evenNumbers.length > 0) {
    document.getElementById("output").textContent =
        "Even Numbers: " + evenNumbers.join(", ");
} else {
    document.getElementById("output").textContent =
        "Even Numbers: None";
}