const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "- Confucius"
  },
  {
    quote: "Age is no guarantee of maturity. ",
    author: "- Lawana Blackwell"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "- Maya Angelou"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "- Nelson Mandela"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "- Helen Keller"
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "- Zeno"
  },
  {
    quote: "The die is cast.",
    author: "- ulius caesar"
  },
  {
    quote: "Only I can change me life, no one can do it for me. ",
    author: "- Carol Burnett"
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "- Bill Gates"
  },
  {
    quote: "All you need in this life is ignorance and confidence, then success is sure.",
    author: "- Mark Twain"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;