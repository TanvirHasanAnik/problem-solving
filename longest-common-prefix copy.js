var longestCommonPrefix = function(strs) {
    let result = "";
    //console.log(strs[0].length);
    if(strs.length == 1){
        return strs[0];
    }
    for(let i = 0; i < strs[0].length; i++){

        for(let j = 0; j < strs[1].length; j++){
            
            if(strs[0][i] == strs[1][j]){
                //console.log(strs[0][i]);
                for(let x = 0; x < strs[2].length; x++){
                    if(strs[1][j] == strs[2][x]){
                        result += strs[0][i];
                    }
                }
            }
        }
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));