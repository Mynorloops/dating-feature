var array = Number(process.argv[2]);
var sum = array.reduce((total, amount) => total + amount);

console.log(sum);
