const horses = 3;
const apples = 17;
const applesPerHorse = Math.floor(apples / horses);
const leftoverApples = apples / horses;

console.log("Apples per horse: " + applesPerHorse);
console.log("Leftover apples: " + leftoverApples);

//export to allows tests to check values
module.exports = { horses, apples, applesPerHorse, leftoverApples };
