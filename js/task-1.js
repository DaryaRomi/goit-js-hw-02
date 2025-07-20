function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  }

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Перевірка функції:
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 1500));  // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500, 4000));  // "Insufficient funds!"
