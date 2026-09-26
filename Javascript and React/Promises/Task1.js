const getPromise=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Promise done");
        },2000)
    })
}

let p1 = getPromise();
p1.then(()=>{
    console.log("promise fullfill");
})