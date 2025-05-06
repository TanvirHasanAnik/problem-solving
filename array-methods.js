arr = [1,2,3,4,5,6,7,8,9,10];

let reducerArr = arr.reduce((a,b) => {
    return a*b
},1);
console.log(reducerArr);

let mapArr = arr.map((x)=>{
    return x*2;
});
console.log(mapArr);

let filterArr = arr.filter((item)=> {
    if(item%2==0){
        return true;
    }
});
console.log(filterArr);

arr.forEach(item => {
    console.log(item);
});