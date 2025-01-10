let product = {
  name: "Chicken feet",
  price: 149.99,
};

console.log("Product Price: ", product.price);

const priceElement = document.querySelector("#js-q1-price");

priceElement.innerHTML = product.price;

const animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

const colorListElement = document.querySelector("#js-q2-colors");

animals.forEach((item) => {
  console.log(item.colour);

  colorListElement.innerHTML =
    colorListElement.innerHTML + `<li>${item.colour}</li>`;
});

const dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];

const nameListElement = document.querySelector("#js-q3-meals");

dinnerOptions.forEach((item) => {
  if (item.onSpecial === true) {
    console.log("first example:", item.name);

    nameListElement.innerHTML =
      nameListElement.innerHTML + `<li>${item.name}</li>`;
  }
});

const people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];

const ageListElement = document.querySelector("#js-q4-ages");

for (let i = 0; i < people.length; i++) {
  var fullName = people[i].firstName + " " + people[i].lastName;
  if (people[i].age >= 20 && people[i].age <= 50) {
    ageListElement.innerHTML =
      ageListElement.innerHTML + `<li>${fullName}</li>`;
  }
}

// people.forEach(({ firstName, lastName, age }) => {
//   const fullName = firstName + " " + lastName;
//   if (age >= 20 && age <= 50) {
//     console.log(fullName);
//     ageListElement.innerHTML =
//       ageListElement.innerHTML + `<li>${fullName}</li>`;
//   }
// });

var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

const productListElement = document.querySelector("#js-q5-products");

function makeProduct(product) {
  const element = `<li>${product.name} ${product.price}</li>`;
  return element;
}

products.map((product) => {
  productListElement.innerHTML =
    productListElement.innerHTML + makeProduct(product);
});

// products.forEach((product) => {
//   const element = `<li>${product.name} - ${product.price}</li>`;
//   productListElement.innerHTML = productListElement.innerHTML + element;
// });

// for (let i = 0; i < products.length; i++) {
//   const element = `<li>${products[i]}</li>`;
//   productListElement.innerHTML = productListElement.innerHTML + element;
// }

// js-q5-products

// Declare and call a function that logs the string "What the func is this nonsense?"
function logPhrase() {
  console.log("what the func is this nonsense?");
}

logPhrase();

// Create and call a function with two arguments, firstName and lastName. The function should log both the argument values with a space between them.

function userName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

userName("Peter", "Joe");

// Question 3
// step 1: Create a function with two arguments, firstNumber and secondNumber.
// Step 2: Inside the function, check the type of the arguments.
// spte 3: If they are numbers, multiply them and return the result.
// step 4: If either of them are not numbers return the message: "Please supply number values".
// step 5: Call the function, assign the return value to a variable called result
// step 6: and log the variable.

function num(firstNum, secondNum) {
  var typeOfFirst = typeof firstNum;
  var typeOfSecond = typeof secondNum;

  if (typeOfFirst !== "number" || typeOfSecond !== "number") {
    return "Please supply number values ";
  }

  return firstNum * secondNum;
}

var result = num("not a number", 5);

console.log(result);

const invalidMessage = "Invalid argument types";

const checkIfNumber = (arg1) => {
  if (arg1 !== "number") {
    return invalidMessage;
  }
};

// Question 4

// function addition(1, "2", false)
function addition(num1, num2, num3) {
  let result;

  if (
    typeof num1 === "boolean" ||
    typeof num2 === "boolean" ||
    typeof num3 === "boolean"
  ) {
    return invalidMessage;
  }

  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  let n3 = parseFloat(num3);

  const num1Type = typeof n1;
  const num2Type = typeof n2;
  const num3Type = typeof n3;

  if (num1Type !== "number") {
    debugger;
    return invalidMessage;
  }

  checkIfNumber(num1Type);
  checkIfNumber(num2Type);
  checkIfNumber(num3Type);

  if (num2Type !== "number") {
    debugger;
    return invalidMessage;
  }

  if (num3Type !== "number") {
    debugger;
    return invalidMessage;
  }

  return n1 + n2 + n3;
}

addition(1, "2", false);

console.log("first Case >>>", addition(1.554, 2, 5));
console.log("2nd Case >>>", addition(1, "4", 8) === 13);
console.log(
  "3rd Case >>>",
  addition(false, 25, 11) === "Invalid argument types"
);
