// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", () => {
    //import the function from app.js
    const { fromEuroToDollar } = require("./app.js");

    // use the function like its supposed to be used 
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparision for the unit test 
    expect(fromEuroToDollar(3.5)).toBe(expected);

});

test("One dollar should be 106.58333... Yen", () => {
    // import the function from app.js
    const { fromDollarToYen } = require("./app.js");

    // use the function like its supposed to be used 
    const yen = fromDollarToYen(3.5);

    // creating the expected value variable
    const expected = (1/1.2) * 3.5 * 127.9; // Dollar-to-Euro Exchange rate * valueInDollar * Euro-to-Yen Exchange rate  ;

    // using expect to test
    expect(fromDollarToYen(3.5)).toBe(expected);

});

test("One Yen should be 0.00625... Pound", () => {
    // import the function from app.js
    const { fromYenToPound } = require("./app.js");

    // use the function like its supposed to be used 
    const pounds = fromYenToPound(3.5); 
    
    // creating the expected value variable
    const expected = 1/127.9 * 3.5 * 0.8; // Yen-to-Euro Exchange rate * valueInYen *  Euro-to-Pounds Exchange rate;

    // using expect to test
    expect(fromYenToPound(3.5)).toBe(expected);

});

