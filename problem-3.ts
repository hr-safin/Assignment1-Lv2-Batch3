function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

// Sample Usage
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);
