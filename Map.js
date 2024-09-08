const myProduct = [
    {name : "shirt", color: "white"},
    {name: "pant", color: "black"},
    {name: "shoe", color:"chocolate"}
]
 
const myStyle = myProduct.filter( product => product.color =="black")

console.log(myStyle)