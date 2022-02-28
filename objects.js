// const job = { title: "big dog", location: "Greeneville", salary: 200000 };
// const job2 = { title: "big poop", location: "poop island", salary: 40000 };
// one way of adding multiple classes, very inefficient if they are all simialr like this

// console.log(new Date().toISOString()); instantiating a blueprint

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title} and I live in ${this.location} and I make ${this.salary} per year!`
    );
  }
}

const developer = new Job("big dog", "Greeneville", "400000");
developer.describe();

const input = ["david", "owens"];
const firstName = input[0];
const lastName = input[1]; // one way to pull values from an array

const [first, last] = input; // destructuring array
