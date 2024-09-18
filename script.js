'use strict';
let hasDriversLicence=false;
const passTest = true;
if (passTest) hasDriversLicence= true;
if (hasDriversLicence) console.log(`I can drive:D`)
function logger() {
    console.log("my name is Jonas");
}
    logger();
    logger();
    logger();

    function fruitProcessor(apples,oranges) {
        const juice=`juice with ${apples} apples and
         ${oranges} oranges.`;
         return juice;}

         const appleJuice = fruitProcessor(5,0);
         console.log(appleJuice);

         const appleOrangeJuice = fruitProcessor(2,4);
         console.log(appleOrangeJuice);
         function myYear(date,year) {
            const Kayode=`kayode is born on ${date} and in ${year}.`;
            return Kayode;
         }
         const monthYear= myYear(14,1930)
         console.log(monthYear)
         function calAge1(birthYear) {
            const Kayode= 2037-birthYear;
            return Kayode;
         }
         const age1= calAge1(1991)
         console.log(age1);
         //arrow function
         const calAge3= birthYear => 2037-birthYear;
         const age3=calAge3(1991);
         console.log(age3);
         const yearsUntilRetirement= (birthYear,firstName) => {
            const age=2037-birthYear;
            const retirement = 65-age;
            return `${firstName} retires in ${retirement} years`;}
            console.log(yearsUntilRetirement(1991,'jonas'));
            console.log(yearsUntilRetirement(1980,'Bob'));
