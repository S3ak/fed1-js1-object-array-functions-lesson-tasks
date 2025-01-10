// Lesson Task 1 Questions
// Question 1
// Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLocaleLowerCase() === suppliedName.toLocaleLowerCase()) {
  console.log("The names are the same.");
} else {
  console.log("The names are different.");
}

// Question 2
// Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.

// var username = "myusername";
// If both tests pass log a message saying "Acceptable username".

// If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".

// Change the variable's value to test your code.

const username = "Testuser";

const nameLength = username.length;

if (nameLength >= 4 && nameLength <= 10) {
  console.log("Acceptable username");
} else {
  if (nameLength < 4) {
    console.log("Too few characters");
  }
  if (nameLength > 10) {
    console.log("Too many characters");
  }
}

// Question 3
// The following criteria need to be met before an order can be considered complete:

// The invoice must be paid
// The product must have been dispatched
// The customer must have signed for the delivery
// Using the variables below write an if/else statement that determines whether the order is complete:

// var invoicePaid = true;
// var productDispatched = false;
// var customerHasSigned = false;
// If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.

// Use the logical AND (&&) operator to complete this task.

// Change the variables' values to test your code.

const invoicePaid = true;
const productDispatched = false;
const customerHasSigned = false;

if (invoicePaid && productDispatched && customerHasSigned) {
  console.warn("Order complete");
} else {
  if (!invoicePaid) {
    console.log("Invoice not paid");
  }

  if (!productDispatched) {
    console.log("Product not dispatched");
  }

  if (!customerHasSigned) {
    console.log("Customer has not signed");
  }
}

// Question 4
// Re-write your code from the question above using the logical OR (||) operator.

if (
  invoicePaid === false ||
  productDispatched === false ||
  customerHasSigned === false
) {
  if (invoicePaid === false) {
    console.log("You need to pay the invoice to complete the order.");
  }
  if (productDispatched === false) {
    console.log("order is not dispatched");
  }
  if (customerHasSigned === false) {
    console.log("You need to sign to complete the order.");
  }
} else {
  console.log("Order complete");
}
