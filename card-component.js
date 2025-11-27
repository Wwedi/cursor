/**
 * Card Component - Reusable pricing card component
 * @param {string} title - Card title
 * @param {string} price - Price text
 * @param {array} features - Array of feature strings
 * @param {string} buttonText - Button label (optional, defaults to "Start Trial")
 * @returns {HTMLElement} - Card element ready to append
 */
function Card(title, price, features, buttonText = "Start Trial") {
  // Create main container
  const card = document.createElement("div");
  card.className = "pricing-card";

  // Create title
  const titleElement = document.createElement("h2");
  titleElement.className = "card-title";
  titleElement.textContent = title;
  card.appendChild(titleElement);

  // Create price
  const priceElement = document.createElement("p");
  priceElement.className = "card-price";
  priceElement.textContent = price;
  card.appendChild(priceElement);

  // Create features list
  const featuresList = document.createElement("ul");
  featuresList.className = "card-features";
  features.forEach((feature) => {
    const listItem = document.createElement("li");
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });
  card.appendChild(featuresList);

  // Create button
  const button = document.createElement("button");
  button.className = "card-btn";
  button.textContent = buttonText;
  card.appendChild(button);

  return card;
}

// Export for use in other modules (if using ES6 modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = Card;
}
