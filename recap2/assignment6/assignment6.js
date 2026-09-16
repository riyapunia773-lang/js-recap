const movies = [];

let numberOfMovies = Number(prompt("How many movies do you want to rate?"));

for (let i = 0; i < numberOfMovies; i++) {
    let title = prompt("Enter movie title:");
    let rating = Number(prompt("Enter rating from 1 to 5:"));

    movies.push({
        title: title,
        rating: rating
    });
}

movies.sort(function (a, b) {
    return b.rating - a.rating;
});

console.log("Movies:", movies);

console.log("Highest-rated movie:", movies[0]);

let output = "";

for (let movie of movies) {
    output += movie.title + " - Rating: " + movie.rating + "<br>";
}

output += "<br>Highest-rated movie: " + movies[0].title;
output += " - Rating: " + movies[0].rating;

document.getElementById("output").innerHTML = output;