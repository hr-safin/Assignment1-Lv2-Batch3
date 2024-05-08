
function findLargestNumber(numbers : number[]): number | undefined  {
  
    if(numbers.length === 0){
        return undefined
    }

    let largestNumber = numbers[0]

    for(let i =0; i<numbers.length; i++){

        if(numbers[i] > largestNumber){
             largestNumber = numbers[i]
        }
    }

    return largestNumber
}

console.log(findLargestNumber([10, 5, 8, 20, 3]))