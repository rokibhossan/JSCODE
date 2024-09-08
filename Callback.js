
function firstFunction(a,b,callback) {
    console.log("First function is doing something...");
    setTimeout(() =>{
        console.log("first function is done!")
        callback(a,b)
    },2000)
    // callback()

}

function secondFunction(a,b) {
    let sum = a +b 
    console.log(sum);
}

firstFunction(1,2,secondFunction)

