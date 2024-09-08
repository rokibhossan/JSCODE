// const arr = [1, 2 , 3];
// // const arr2 =["kuddus", "Rahim"];

// const [first, ...rest] =arr;

// console.log(rest)

const obj ={
    name: "kuddus",
    age : 20,
    weight: 70
}

const {name, ...rest} = obj;
console.log(rest);