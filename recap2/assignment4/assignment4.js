function sortArray(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });

    return numbers;
}

const numbers = [5, 2, 8, 1, 9];

console.log("Original array:", numbers);

const sortedNumbers = sortArray(numbers);

console.log("Sorted array:", sortedNumbers);