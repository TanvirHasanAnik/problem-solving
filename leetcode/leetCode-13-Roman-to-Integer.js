var romanToInt = function(s) {
    roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    let sum = 0;
    sArr = s.split("");
    for(let i = 0; i < sArr.length; i++){
        let leftChar = sArr[i];
        let leftVal = roman[leftChar];
        if(sArr[i+1]){
            let rightChar = sArr[i+1];
            let rightVal = roman[rightChar];
            if(leftVal >= rightVal){
                sum += leftVal;
            }else{
                sum += (rightVal - leftVal);
                i++;
            }
        }else{
            sum += leftVal;
        }
    }

    return sum;
};

console.log(romanToInt("MCMXCIV"));