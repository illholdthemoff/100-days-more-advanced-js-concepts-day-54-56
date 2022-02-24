const fs = require("fs");

function readFile() {
  let fileData;
  try {
    const fileData = fs.readFileSync("data.json"); // data.json doesnt exist
  } catch {
    console.log("An error occured!");
  }
  console.log(fileData);
  console.log("Hi there!");
}

readFile();
