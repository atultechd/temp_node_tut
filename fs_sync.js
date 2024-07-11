
const { readFileSync, writeFileSync }  = require('fs');
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/resultFile.txt', 
    `This is the result of First : ${first} and Second : ${second} .........`,
    {flag : 'a'}
)

console.log("done with this task")
console.log("starting my new task")
