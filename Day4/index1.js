var it1={
    name:"Shoes",
    category:"footware",
    price:200
}
var it2={
    name:"Shirt",
    category:"Clothes",
    price:800
}

var it3={
    name:"Pant",
    category:"Clothes",
    price:500
}
var shopItems=[it1,it2,it3];
const newValue=shopItems.reduce((acc,currentItem)=>{
    return acc+currentItem.price
   
},0);
console.log(newValue)