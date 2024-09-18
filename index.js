// User Schema.
/**
 * What is an object?
 * It is used to store VARIOUS KEYED COLLECTIONS
 */

/**
 * Function to handle user login into the app
 */

/**
 * Register User
 */
function userRegister() {
  const firstName = prompt("What is your First Name?");
  const age = prompt("How old are you?");

  //Conditional Statements
  if (age <= 18) {
    alert("You are not Eligible to vote");
  } else {
    completeUserSetup();
  }
}

/**
 * Complete the user register process where user's age is > 18
 */
function completeUserSetup() {
  const catName = prompt("What is your Cat's name?");
  const catHeight = prompt("How tall is your cat?");
  alert('Registration Sucessful')
}

userRegister();

// User Object
const Person = {
  firstName,
  age,
  height,
};

const Cat = {
  catName,
  age,
  height,
};
