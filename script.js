const products = ["apple","banana","orange"]
const price = [4,3,5]
let userBudget = 20;
let userCart =();

const displayProducs=()=>{
    console.log("Available products:");
    for(let i=0;i < products.length;i++){
        console.log(`${i+1}. ${products[i]}-R${price[i]}`);
    }
}

const userSelection=()=>{
    while(true){
        displayProducs();
    }
}
let productIndex= parseInt(prompt("Enter the product number to select or 0 to exit:"))-1;
if (productIndex=== -1){
    break;
}
if (products<0 || productIndex>=products.length){
    console.log("Invalid products number.Please try again.");
    continue;
}
let quantity =parseInt{
    (prompt(`How many ${products[productIndex]}would you like to buy`))
}

if(isNaN(quantity)||quantity<=0){
    console.log("Invalid quantity. Please try again.");
    continue;
}
if(userCart(products(productIndex))){
    userCart(products(productIndex))+quantity;
}
else{
    userCart(products(productIndex))* quantity;
}
console.log(`Added ${quantity} ${products[productIndex]} to your cart`)

console.log("Your final cart:",userCart)

const calculateCost=()=>{
    let totalCost=0;
}

for(let product in userCart){
    let Index= products.indexOf(products);
}
if(Index == -1){
    let cost =price[index]*userCart[products];
    totalCost =cost
}
else{
    console.log("Product `${product}` not found.")
}
console.log("Total cost: R${totalCost}");

if (totalCost>userBudget){
    console.log("Insufficient funds. You do not have enough money.");
}
else{
    let remainingChange =userBudget - totalCost;
    console.log("RemainingChange. R${remainingChange}");

}
userSelection();
calculateCost();



