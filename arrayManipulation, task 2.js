function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
 // For Example
 const inputArray = [3, 4, 7, 12, 5];
 const resultArray = processArray(inputArray);
 console.log(resultArray); 
 
// Function to format the array of strings based on processed numbers
function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
          return str.toUpperCase(); // This capitalizes the entire string if the number is even
      } else {
          return str.toLowerCase(); // This converts to lowercase if the number is odd
      }
  });
}

// Consider the array below
const numbers = [2, 13, 5, 8, 14];
const processedNumbers = processArray(numbers);

const strings = ["Jesus", "Is", "The", "Way", "Amen"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings); 
