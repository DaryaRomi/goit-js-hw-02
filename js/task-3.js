function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();

  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Перевірка функції:
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best SALE offers now!")); // true
console.log(checkForSpam("SPAM messages are annoying")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Great DEAL just for you")); // false
