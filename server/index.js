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

// just for localhost:8080 (frontend)
app.use(
  cors({
    origin: "http://127.0.0.1:8080",
  })
);

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
