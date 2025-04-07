
function byTagName(node, tagName) {
    let count = 0;

    function traverse(node){
        if (node.nodeType == Node.ELEMENT_NODE) {
            if(node.nodeName.toLowerCase() === tagName.toLowerCase()){
                count++;
            }
            for (let child of node.childNodes) {
                traverse(child);
            }
        }
    }

    traverse(node);
    return {length: count}
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2