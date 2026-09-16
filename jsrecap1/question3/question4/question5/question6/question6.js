let number = Number(prompt("Enter a positive integer:"));

document.write("<table border='1'>");

for (let i = 1; i <= number; i++) {

    document.write("<tr>");

    for (let j = 1; j <= number; j++) {

        document.write("<td>");
        document.write(i * j);
        document.write("</td>");

    }

    document.write("</tr>");
}

document.write("</table>");