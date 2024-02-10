const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.author) {
    authorText.textContent = "Unknown";
  }

  quoteText.textContent = quote.text;
  authorName = quote.author.replace(", type.fit"," ");
  authorText.textContent = authorName;
  
}

// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";

//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // empty
//   }
// }

getQuotes = async () => {
  let response = await fetch("https://type.fit/api/quotes");
  apiQuotes = await response.json();
  newQuote();

  return apiQuotes;
};

getQuotes().then(apiQuotes => {
  apiQuotes = apiQuotes;
}).catch(err => {
  return err;
});

newQuoteBtn.addEventListener("click", newQuote);
getQuotes();
