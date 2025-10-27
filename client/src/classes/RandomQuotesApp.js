import Quote from "./Quote.js";
import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteBtnViaAPI = document.getElementById("random-quote-api-btn");
    this.randomQuoteBtnViaOwnAPI = document.getElementById(
      "random-quote-own-api-btn"
    );
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }
  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }

  async randomQuoteViaAPIHandler() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaAPI());
  }

  async randomQuoteViaOwnAPIHandler() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuoteBtnViaAPI.addEventListener("click", () =>
      this.randomQuoteViaAPIHandler()
    );
    this.randomQuoteBtnViaOwnAPI.addEventListener("click", () =>
      this.randomQuoteViaOwnAPIHandler()
    );
  }
}

export default RandomQuotesApp;
