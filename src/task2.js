//SOLUTION

let apples = 4;
let carrots = 2;
console.log(`We have ${apples} apples and ${carrots} carrots`);

//use a compound operator to add 7 more apples
apples += 7;
console.log(
  `Added 7 apples, we now have ${apples} apples and ${carrots} carrots`
);

//use a compound operator to add 4 more carrots
carrots += 4;
console.log(
  `Added 4 carrots, we now have ${apples} apples and ${carrots} carrots`
);

//use a compound operator to subtract 1 apple
apples -= 1;
console.log(
  `Subtracted 1 apple, we now have ${apples} apples and ${carrots} carrots`
);

//use a compound operator to triple the amount of carrots
carrots *= 3;
console.log(
  `Tripled the carrots, we now have ${apples} apples and ${carrots} carrots`
);

//use a compound operator to eat half of the apples
apples /= 2;
console.log(
  `Ate half the apples, we now have ${apples} apples and ${carrots} carrots`
);

//export to allows tests to check values
module.exports = { apples, carrots };
