const fs = require("fs/promises"); // gives promise versions of file system methods

async function readFile() {
  let fileData;

  //   fs.readFile("data.txt", function (error, fileData) {
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  // start another async task that sends the data to a database
  //   });

  //   fs.readFile("data.txt") // promises
  //     .then(function (fileData) {
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  // return anotherAsyncOperation
  //   }); // returns a promise, the 'then' occurs as soon as the file is done reading ASYNC

  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());

  console.log("Hi there!");
}

readFile();
