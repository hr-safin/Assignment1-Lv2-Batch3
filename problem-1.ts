
function repeatString(string : string, num : number)  : string {

    if(num < 0){
        throw new Error("Number of repetition can not be negative")
    }

    let repetitiveString = " "

    for(let i =0; i<num; i++){
        repetitiveString +=string
    }

    return repetitiveString
}

console.log(repeatString("Hello!", 4))