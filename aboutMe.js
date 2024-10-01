const express = require("express");
const app = express();
const port = 3011;
const cors = require("cors");

app.use(cors());

function printSalutation(callback) {
  const salutation = "Hi everybody, this is for the assignment of week 7.";
  console.log(salutation);
  callback();
}

function printName(callback) {
  setTimeout(() => {
    const name = "I am Sami.";
    console.log(name);
    callback(name);
  }, 2000);
}

function printAge(callback) {
  setTimeout(() => {
    const age = "I am 29 years old.";
    console.log(age);
    callback(age);
  }, 2000);
}

function printLocation(callback) {
  setTimeout(() => {
    const location = "I was born in Kayseri, Turkiye and I live in Sweden.";
    console.log(location);
    callback(location);
  }, 2000);
}

function printHobbies(callback) {
  setTimeout(() => {
    const hobbies = "I love cycling, paragliding, and reading.";
    console.log(hobbies);
    callback(hobbies);
  }, 2000);
}

function printFarewell() {
  setTimeout(() => {
    console.log("That's all about me, have a good day.");
  }, 2000);
}

app.get("/", (req, res) => {
  let results = {};

  printSalutation(() => {
    printName((name) => {
      results.printName = name;
      printAge((age) => {
        results.printAge = age;
        printLocation((location) => {
          results.printLocation = location;
          printHobbies((hobbies) => {
            results.printHobbies = hobbies;
            printFarewell();
            res.json(results);
          });
        });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is working at port ${port}`);
});
