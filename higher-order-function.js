function repeat(arr,callback){
    for(let i = 0; i < arr.length; i++){
        console.log(callback(arr[i]));
    }
}

repeat([1,2,3,4,5],(n) => "This is "+n);