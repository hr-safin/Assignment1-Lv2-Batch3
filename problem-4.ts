function reverseArray<T>(arr: T[]): T[] {
    
  
    
    const reversedArr: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  

  const reversedStrings = reverseArray(["apple", "banana", "cherry"]);
  console.log(reversedStrings); // Output: ["cherry", "banana", "apple"]
  
  // Sample Usage 2 (Number Array)
  const reversedNumbers = reverseArray([10, 20, 30]);
  console.log(reversedNumbers); // Output: [30, 20, 10]