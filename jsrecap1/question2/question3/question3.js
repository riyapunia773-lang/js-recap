let a = Number(prompt("Enter first side:"));
let b = Number(prompt("Enter second side:"));
let c = Number(prompt("Enter third side:"));

if (a == b && b == c) {
    document.write("Equilateral triangle");
}
else if (a == b || a == c || b == c) {
    document.write("Isosceles triangle");
}
else {
    document.write("Scalene triangle");
}