function processArray(arr) {
  return arr.map(num => (num % 2 === 0) ? num * num : num * 3);
}
function formatArrayStrings(strings, numbers) {
  return strings.map((str, i) => {
    if (numbers[i] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}