const amount = 12

if(amount < 10){
    console.log('small number');
}else {
    console.log('large number');
}

console.log(`Hey this is my first node tutorial ${amount}`)
console.log(__dirname)
console.log(__filename)
// console.log(GLOBALS)

setInterval(()=>{
    console.log("hello world");
},1000)