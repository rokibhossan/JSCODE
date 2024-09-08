const myPromise = new Promise((resolve, reject)=>{

    let state ="fulfiled";

    if(state == 'fulfiled'){
        setTimeout(() => {
            resolve("Yes!")
        }, 2000);
    }
    else if(state == "rejected"){
        setTimeout(() => {
            reject("Operation was Failed")
        }, 2000);
    }
})

console.log("Operation is in Panding state")

myPromise
.then (result => console.log(result))
.catch(error => console.log(error))
.finally(() =>{
    console.log("operation is done")
})
