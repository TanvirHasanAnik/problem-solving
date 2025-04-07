function holdThreeSec (){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("3 second finished")
        },3000);
    });
}

try{
    console.log("First Call");
    console.log("Second Call");
    let result = await holdThreeSec();
    console.log(result);
    console.log("Last Call");
} 
catch(error){
    console.log(error);
}