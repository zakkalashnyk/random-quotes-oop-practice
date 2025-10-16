import MathUtils from "../utils/MathUtils.js";
import quotes from "../data/quotes.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-type": "application/json" } };
    return fetch(url, options)
      .then((response) => response.json()) //return implicitly
      .then((data) => {
        // parameters of promise where id:id, quote:text, author:author
        const { id, quote, author } = data;
        return new Quote(id, quote, author); //return explicitly
      })
      .catch((error) => console.error(error));
  }
}

export default RandomQuote;
