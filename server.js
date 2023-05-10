// Load Express
const express = require("express");
const app = express();
const port = 3000;

const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables");
const planets = require("./models/planets");
const characters = require("./models/characters");
const events = require("./models/events");
const books = require("./models/books");
const colors = require("./models/colors");
const pokemon = require('./models/pokemon')
const zodiac = require("./models/zodiac");

const Lists = [
  "Books",
  "Characters",
  "Events",
  "Fruits",
  "Planets",
  "Vegetables",
  "Colors",
  "Pokemon",
  "Zodiac",
];
// Middlware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// Routes - 1 - Total List of items
app.get("/", function (req, res) {
  res.render("Index", { Lists: Lists });
});
// Route - 2- Fruits
app.get("/fruits", (req, res) => {
  res.render("../views/ShowFruits", { fruits: fruits });
});
// Route -3- Vegetables
app.get("/vegetables", (req, res) => {
  res.render("../views/ShowVegetales", { vegetables: vegetables });
});
// Route -4- Planets
app.get("/planets", (req, res) => {
  res.render("../views/ShowPlanets", { planets: planets });
});
// Route -5- Characters
app.get("/characters", (req, res) => {
  res.render("../views/ShowCharacter", { characters: characters });
});
// Route -6- events
app.get("/events", (req, res) => {
  res.render("../views/ShowEvents", { events: events });
});
// Route -7- Books
app.get("/books", (req, res) => {
  res.render("../views/ShowBooks", { books: books });
});
// Route -8- colors
app.get("/colors", (req, res) => {
  res.render("../views/ShowColors", { colors: colors });
});
// Route -9- Pokemon
app.get("/pokemon", (req, res) => {
    res.render("../views/ShowPokemon", { pokemon: pokemon });
  });
// Route -10- Zodiac
app.get("/zodiac", (req, res) => {
  res.render("../views/ShowZodiac", { zodiac: zodiac });
});

// Tell express to Listen
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
