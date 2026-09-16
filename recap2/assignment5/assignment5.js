function sortArray(numbers, order) {
    let sortedNumbers = [...numbers];

    if (order === "asc") {
        sortedNumbers.sort(function (a, b) {
            return a - b;
        });
    }

    if (order === "desc") {
        sortedNumbers.sort(function (a, b) {
            return b - a;
        });
    }

    return sortedNumbers;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, "asc"));

console.log(sortArray(numbers, "desc"));