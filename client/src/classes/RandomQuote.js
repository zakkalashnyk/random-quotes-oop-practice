import MathUtils from "../utils/MathUtils.js";
import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import config from "../../config.js";

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }
  // each async function return Promise
  // promise returned with getRandomQuoteViaAPI() will always be "fulfilled"
  // result of the "fulfilled" promise will be either Quote or undefined(error)
  // that's why there is no need for try/catch block where function been called
  static async getRandomQuoteViaAPI() {
    const url = `${config.PUBLIC_API_URL}/api/quotes/random`;
    const options = { headers: { "Content-type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const { id, quote: text, author } = await response.json(); // parameters of promise where id:id, quote:text, author:author
      //resolves promise as Quote(promise become "fulfilled")
      return new Quote(id, text, author); //return explicitly
    } catch (error) {
      console.error(error); // return undefined implicitly (resolves promise to undefined)
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/unique`;
    const options = { headers: { "Content-type": "application/json" } };
    try {
      const response = await fetch(url, options);
      const { id, text, author } = await response.json(); // parameters of promise where id:id, quote:text, author:author
      //resolves promise as Quote(promise become "fulfilled")
      return new Quote(id, text, author); //return explicitly
    } catch (error) {
      console.error(error); // return undefined implicitly (resolves promise to undefined)
    }
  }
}

export default RandomQuote;
