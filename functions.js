function greetUser(greetingPrefix, userName = "user") { // <-- "user" is a default value, greetingPrefix is not.
    //console.log(greetingPrefix + " " + userName); one way of outputting this
    console.log(`${greetingPrefix} ${userName}!`); // TEMPLATE LITERAL
}

greetUser("Hi", "moff");
greetUser("Hello");

// function sumUp(num1, num2, num3) { //stupid because not rigid, needs 3 numbers every single time
//     return num1+num2+num3;
// }

function sumUp(...numbers) { // ... is a special operator in JS that lets you add as many parameters as you need, then turns it into an array after
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

const inputNumbers = [1, 5, 10, 20, 1];

// console.log(sumUp(inputNumbers)); // returns 01,05,10,20,01 as a string, because it is already an array, therefore ... doesnt convert it and back. Instead it just prints the values
console.log(sumUp(...inputNumbers)); // returns 37, since using ... in this context (with an array) will convert it back into a list of numbers

console.log(sumUp);

sumUp.someOtherProperty = "jeff"; // adds a property to this function, and works since FUNCTIONS ARE OBJECTS

console.log(sumUp.someOtherProperty);