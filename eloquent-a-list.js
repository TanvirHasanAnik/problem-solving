function arrayToList(arr){
    function insert(value,index){
        if(arr[index] === undefined){
            return null;
        }
        return {
            value: value,
            rest: insert(arr[index + 1],index + 1)
        }
    }
    return insert(arr[0],0);
}

function prepend(value,rest){
    return {
        value: value,
        rest: rest
    }
}

function listToArray(list){
    let arr = [];
    function insert(list){
        arr.push(list.value);
        return list.rest == null ? null : insert(list.rest);
    }
    insert(list);
    return arr;
}

function nth(list,position){
    function find(list,counter){
        if(position === counter){
            return list.value;
        }else{
            return find(list.rest,counter + 1);
        }
    }
    return find(list, 0);
}

console.log(arrayToList([10,20]));
console.log(listToArray({ value: 10, rest: { value: 20, rest: null } }));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(10, prepend(20, prepend(30, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
