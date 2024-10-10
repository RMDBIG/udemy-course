//ArraY
const Friend1 ='Michael';
const Friend2 = 'Steven';
const Friend3 = 'Peter';
const Friend4 = 'Kayode';

const friends = [ 'Michael', 'Steven' ,'Peter', 'Kayode'];
console.log(friends);
const years = new Array(1991, 1993, 2008, 2020);
console.log(friends[0]);
console.log(friends[3]);
console.log(friends.length);
console.log(years[0]);
console.log(years[3]);
console.log(friends[friends.length-1]);
friends[2] = 'Temitope'
console.log(friends)
const FirstName = 'Temitope'
const Temitope = [ FirstName, 'Jonas', 2037-1991, 'teacher', friends];
console.log(Temitope);
console.log(Temitope.length);

//Exercise
const calAge = function (birthYear) {
   Kayode = 2037-birthYear;
   return Kayode  }
   const birthYear = [1991, 1993, 1998, 2000];
   
   console.log(calAge(birthYear[0]));
   console.log(calAge(birthYear[1]));
   console.log(calAge(birthYear[2]));
   console.log(calAge(birthYear[3]));
   //Basic Operations In Array
   const mates = [ 'Michael', 'Steven' ,'Peter', 'Kayode'];
   const newLength = friends.unshift('John');
   console.log(newLength);
   console.log(mates);
   //Add element in which we use both push and unshift
   //Remove element
   friends.pop()//remove the last element of the array
   friends.pop()
   const popped = friends.pop()
   console.log(popped);
   console.log(friends);
   const shifted = friends.shift()
   console.log(shifted);
   console.log(friends.indexOf('Michael'));
   console.log(friends.includes('John'));
   if (friends.includes('John')) {
      console.log('You have a friend called John')
   } 
   else {
      console.log('Peter is not your friend') }
   //Introduction to Object
   const JonasArray = [
      'Jonas',
      'Kane',
      2037-1991,
      'teacher'
      ['Michael', 'Peter', 'Steven']
   ];
   const Jonas = {
      FirstName:'Jonas',
      LastName:'Kane',
      age:2037-1991,
      job:'teacher',
      friends:['Michael', 'Peter', 'Steven']
   };
   //Dot vs Bracket Notation
   const Dami = {
      FirstName:'Dami',
      LastName:'Kane',
      age:2037-1991,
      job:'teacher',
      friends:['Michael', 'Peter', 'Steven']
   };