function deepEqual(firstValue, secondValue) {
    if (firstValue === secondValue) {
        return true;
    }

    if (typeof firstValue !== "object" || firstValue === null || typeof secondValue !== "object" || secondValue === null) {
        return false;
    }

    let KeysFirstValue = Object.keys(firstValue);
    let keysSecondValue = Object.keys(secondValue);

    if(!keyMatch(KeysFirstValue,keysSecondValue)){
        return false;
    }

    for (let key of KeysFirstValue) {
        if(!deepEqual(firstValue[key], secondValue[key])){
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