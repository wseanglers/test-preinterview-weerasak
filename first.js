let tesla = [1200,95,115]
let sum = tesla.reduce((x,y) => x+y)

console.log(`Total sale ${sum} (100%)`)
tesla.forEach((x,i) => {
    console.log(`${String.fromCharCode(65+i)} can sell ${x} cars => ${Math.round(((x*100)/sum))}%`)
})