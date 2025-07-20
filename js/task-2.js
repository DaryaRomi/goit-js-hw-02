function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }

  return message.slice(0, maxLength) + "...";
}

// Перевірка функції:
console.log(formatMessage("Curabitur ligula sapien", 16));  // "Curabitur ligul..."
console.log(formatMessage("Curabitur ligula sapien", 23));  // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus", 20));  // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus", 30));  // "Vestibulum facilisis purus"
