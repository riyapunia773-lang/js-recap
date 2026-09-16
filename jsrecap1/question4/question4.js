let score = Number(prompt("Enter your score:"));

if (score >= 0 && score <= 39) {
    document.write("Grade: 0");
}
else if (score >= 40 && score <= 51) {
    document.write("Grade: 1");
}
else if (score >= 52 && score <= 63) {
    document.write("Grade: 2");
}
else if (score >= 64 && score <= 75) {
    document.write("Grade: 3");
}
else if (score >= 76 && score <= 87) {
    document.write("Grade: 4");
}
else if (score >= 88 && score <= 100) {
    document.write("Grade: 5");
}
else {
    document.write("Invalid score");
}