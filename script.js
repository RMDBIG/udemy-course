const now = 2045
const ageTemitope = now-2024
const ageKayode = now-2024
console.log(ageTemitope);
console.log(ageKayode);
console.log(ageTemitope*2);
console.log(ageKayode/3);
console.log(2**3);//This means 2 to the power of 3 that is 2 raised to power 3 that is 2*2*2=8
const firstname = "Kayode";
const lastname = "Temitope";
console.log(firstname + ' ' + lastname);

let x = 10+5; //15
x +=10; // this means x+10
x *=4; //this means x multiply by 4 which is equal to 100
x++;
x--;
x--;
console.log(x);
console.log(ageTemitope > ageKayode);
 /* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK */


const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;


const BMIMark = massMark/ heightMark ** 2;
const BMIJohn = massJohn/ (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/*const massMark = 95
const massJohn = 85
const heightMark = 1.88
const heightJohn = 1.76

const BMIMark = massMark/ heightMark ** 2;
const BMIJohn = massJohn/ (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

/*const firstName = "Jonas";
const birthYear = 2000;
const year = 2037;
const job ="producer";

const jonas = "I'm " + firstName + ", a " + (year - birthYear ) + " years old " + job + "! ";
console.log(jonas);

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);
console.log(`just a regular string...`);
console.log(`string with \n\
      mutiples \n\
      lines`);*/

      const myName = "Kayode";
      const business = "Forex trader" ;
      const institution = "OAU";

      const Kayode = `I'm ${myName} a ${business} attending ${institution}`;

      console.log(Kayode); 


const age = 15

if  (age>= 18) {
      console.log(`sarah can start driving license car`);
} else {
      const yearsLeft = 18 - age ;
      console.log(`sarah is too young wait another ${yearsLeft} years`);
}

