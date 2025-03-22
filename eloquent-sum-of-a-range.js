function range(start,end,sign){
    let result = [];
    if(sign === -1 || start > end){
        for(let i = start; i >= end; i--){
            result.push(i);
        }
    }
    else{
        for(let i = start; i <= end; i++){
            result.push(i);
        }
    }
    return result;
}

function sum(rangeArr){
    let sum = 0;
    rangeArr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(range(5,2,-1));
console.log(sum(range(5,2,-1)));
console.log(sum(range(1, 10)));