//SOLUTION

const dogs = 5;
const jerky = 9;
const cookies = 10;
const treats = jerky + cookies;
const treatsPerDog = Math.floor(treats / dogs);
const leftoverTreats = treats % dogs;

console.log(
  `There are ${dogs} dogs, ${jerky} pieces of jerky, and ${cookies} cookies.`
);
console.log(`The total number of treats is ${treats}.`);
console.log(`Each dog gets ${treatsPerDog} treats.`);
console.log(`There are ${leftoverTreats} treats leftover.`);

//export to allows tests to check values
module.exports = { dogs, jerky, cookies, treats, treatsPerDog, leftoverTreats };
