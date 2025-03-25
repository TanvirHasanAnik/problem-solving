const queue = {
    index:0,
    elements: [2,3,4,5],
    delete(){
        this.elements = this.elements.filter((x,index) => index != 0);
    },
    add(value){
        this.elements.push(value);
    },
    [Symbol.iterator](){
        let index = 0;
        let elements = this.elements;
        return {
            next() {
              if (index < elements.length) {
                return { value: elements[index++], done: false };
              } else {
                return { done: true };
              }
            }
          };
    }
}
console.log("");
for(let element of queue){
    console.log(element);
};


queue.delete();

console.log("");
for(let element of queue){
    console.log(element);
};

queue.add(69);

console.log("");
for(let element of queue){
    console.log(element);
};