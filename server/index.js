//Common JS module
const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

// option with variable
// const corsOption =  origin: ["http://127.0.0.1:8080", 'http://localhost:8080' ];
// origin : '*' - default cross-origin value for any origin
// app.use(cors(corsOption));

app.use(cors());

app.get("/quotes/unique", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.post("/quotes", (req, res) => {
  // logic for POST request
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on PORT ${PORT}`);
});
