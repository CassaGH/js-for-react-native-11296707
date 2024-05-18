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
  