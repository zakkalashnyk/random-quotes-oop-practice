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
    // request new quote via API
  }
}

export default RandomQuote;
