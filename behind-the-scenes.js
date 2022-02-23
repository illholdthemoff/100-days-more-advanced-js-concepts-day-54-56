const hobbies = ["sports", "cooking"]; // a pointer to the array is stored, NOT the array itself
const age = 28; // the value itself is stored

hobbies.push("jeff"); // address of array is unchanged, therefore accepted

// hobbies = ["coding", "farting"]; // not allowed! new address stored! cannot override constant

console.log(hobbies);

const person = { age: 28 };

function getAdultYears(p) {
    // p.age -= 18;  // bad practice when working with objects as it wil modify the value in the object itself!
    // return p.age; 
    return p.age - 18; // much better, does not modify the original object value
}

console.log(getAdultYears(person)); // returns 10 as expected
console.log(person); // returns 10? because remember, person is a reference to an object, therefore changing the age with p changes age from person too
//this means that you are operating on the person object in memory when you do this. HOWEVBER if you do return p.age - 18 it will instead 
// copy the number over and therefore not modify the original person age, and exist as a DERIVED VALUE

// function getAdultYears(p) {
//      p.age -= 18; 
//      return p.age; 
// }   if you wanted to write it out that way anyway, what you would do instead is

// console.log(getAdultYears({...person})); //a spread operator that doesn't modify original values, since it splits the object into key value pairs
//this essentially copies the original object