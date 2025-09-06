const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Act as if what you do makes a difference. It does.",
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.querySelector(".quote").textContent = quotes[randomIndex];
}
