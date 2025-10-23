const express = require("express"); //Common JS module
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

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
