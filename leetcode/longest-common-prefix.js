var longestCommonPrefix = function(strs) {
    let firstWord = strs[0];
    function match(prefix,strs,index){
        if(index === -1){
            return prefix;
        }
        if(prefix === ""){
            return "";
        }
        if(index === strs.length){
            return prefix;
        }
        if(prefix === strs[index].slice(0,prefix.length)){
           return match(prefix,strs,index + 1);
        }
        else if (prefix !== strs[index].slice(0,prefix.length)){
           return match(prefix.slice(0,prefix.length - 1),strs,index);
        }
    }
    return match(firstWord,strs,strs[1] === undefined ? -1 : 1);
};

console.log("LCP: "+longestCommonPrefix(["cba",""]));