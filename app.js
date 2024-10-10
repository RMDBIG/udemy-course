console.log("Welcome to our Voting App");

// Array of user details for multiple voters
const users = [
  { firstName: "Samuel", lastName: "Smith", LGA: "Lagos", SOB: "Lagos State", age: 17 },
  { firstName: "Jane", lastName: "Doe", LGA: "Lagos", SOB: "Lagos State", age: 25 },
  { firstName: "John", lastName: "Doe", LGA: "Abuja", SOB: "Abuja State", age: 19 },
  // Add more user objects here
];

// Function to get voter's details
function getVotersDetails(user) {
  // Check if any of the following user details is missing.
  if (!user.firstName) {
    console.log("Please Enter A Valid Name");
    return false;
  }

  if (!user.lastName) {
    console.log("Please Enter A Valid Last Name");
    return false;
  }

  if (!user.LGA) {
    console.log("Please Enter A LGA");
    return false;
  }

  if (!user.SOB) {
    console.log("Please Enter A Valid State Name");
    return false;
  }

  // If all details are present, return true
  return true;
}

function verifyVotersAge(user) {
  // Check if age is present
  if (!user.age) {
    console.log("Please Enter an Age");
    return false;
  }

  // Check if age is a number
  if (typeof user.age !== "number") {
    console.log("Voter's Age must be a number");
    return false;
  }

  // Check if the user is old enough to vote
  if (user.age < 18) {
    console.log("You are not Eligible to vote");
    return false;
  }

  return true;
}

// Function to start voting process for multiple users
function startVoting() {
  const validUsers = []; // Array to store valid users

  // Loop through each user in the users array
  for (const user of users) {
    console.log(`Processing voter: ${user.firstName} ${user.lastName}`);

    // Verify voter's details
    const votersDetails = getVotersDetails(user);
    if (!votersDetails) {
      console.log("You Must Enter All Required Details Before you can Vote\n");
      continue; // Skip to the next user
    }

    // Verify voter's age
    const isVoterEligible = verifyVotersAge(user);
    if (!isVoterEligible) {
      console.log("You Must Be Of the legal Age to vote\n");
      continue; // Skip to the next user
    }

    // If the user is valid, add to validUsers array
    validUsers.push(user);
    console.log(`${user.firstName} is eligible to vote!\n`);
  }

  // Output valid users
}

// Call to start Voting Process
startVoting();

//Todos
/** 
 * Request Voter ID: Implement a feature to request a digital voter ID.

 * 1 - Display User's Information: Show the user’s information after completion.
 * 2-  Create an Array of Candidates: Define an array of candidates with their names, LGAs, and other necessary information.
* 3 - Display Candidates: List all candidates for the user to choose from.
 * 4 - Candidate Name Validation: Ensure that the candidate's name is not empty when added to the array.
* 5 -  Validate Voter's Choice: Ensure the voter selects a candidate from the list before submitting.
* 6 - Match Voter's LGA with Candidate's LGA: Check if the voter’s LGA matches the candidate’s LGA before allowing them to vote.
*  7 Track Total Votes for Each Candidate: Keep a count of how many votes each candidate has received.
8 Display Voting Results: Show the current number of votes for each candidate after voting.
9 Confirm Vote Submission: Display a confirmation message when the user successfully votes.

*10 - Return array of ineligible voters: Voters who do not meet the age requirement or who have missing information.
11 -Return array of eligible voters: Voters who meet all the criteria.
12 -Find candidates with the most missing/null values: This task could be related to how complete the candidate information is (for instance, missing LGA, age, etc.).
 */


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */