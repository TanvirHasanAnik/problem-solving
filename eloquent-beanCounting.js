function countBs(word,targetChar){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(targetChar === undefined ? word[i].toUpperCase() === word[i] : word[i] === targetChar){
            count++;
        }
    }
    return count;
}

function countChar(word, targetChar){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === targetChar){
            count++;
        }
    }
    return count;
}

console.log(countBs("BoB","o"));
console.log(countChar("kakkerlak", "k"));