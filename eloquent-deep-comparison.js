function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true;
    }

    if (typeof val1 !== "object" || val1 === null || typeof val2 !== "object" || val2 === null) {
        return false;
    }

    let keys1 = Object.keys(val1);
    let keys2 = Object.keys(val2);

    if(!keyMatch(keys1,keys2)){
        return false;
    }

    for (let key of keys1) {
        if(!deepEqual(val1[key], val2[key])){
            return false;
        }
    }

    return true;
}


function keyMatch(keys1,keys2){
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every((key,index)=> key === keys2[index]);
};

console.log(deepEqual({here: {is: "an"}, object: 2}, {here: {is: "an"}, object: 2}));