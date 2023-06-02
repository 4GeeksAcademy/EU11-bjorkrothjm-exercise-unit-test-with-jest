// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// just a console log for ourselves.
console.log(sum(7,3))



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Euro to Dollar 
const fromEuroToDollar = function(valueInEuro){

    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"]

    // return the dollar value
    return valueInDollar
}

console.log("One Euro to Dollar" ,fromEuroToDollar(1))
console.log(fromEuroToDollar(3.5))

// Dollar to Yen
const fromDollarToYen = function(valueInDollar){
    
    // convert the given valueInDollars to Yen
    //1. We need to get the Euro value given the input (dollars)
    const valueInEuros = 1 / oneEuroIs["USD"] * valueInDollar;
    const valueInYen = valueInEuros * oneEuroIs["JPY"];

    // return the Yen value
    return valueInYen


};

console.log("One Dollar to Yen" ,fromDollarToYen(1))
console.log(fromDollarToYen(3.5))

// Yen to Pound
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pounds
    //1. We need to use the 
    const valueInEuros = 1 / oneEuroIs["JPY"] * valueInYen;
    const valueInPounds = valueInEuros * oneEuroIs["GBP"];
    
    // return the Pounds value
    return valueInPounds

};

console.log("One Yen to Pound" ,fromYenToPound(1))
console.log(fromYenToPound(3.5))

// export the function to be used on other files 
module.exports = { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound };