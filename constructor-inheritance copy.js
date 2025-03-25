function Person(name,age,height,weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.introduce = function(){
        console.log(`Hello this is ${this.name} and I am ${this.age} Years Old`);
    }
    this.bodyShape = function(){
        console.log(`My height is ${this.height} feet weight is ${this.weight} Kg`);
    }
}

let Anik = new Person('Anik',24,5.6,81);
Anik.introduce();
Anik.bodyShape();

function Athlete(sport,name,age,height,weight){
    Person.call(this,name,age,height,weight);
    this.sport = sport;
    this.plays = function(){
        console.log(`I play ${this.sport}`);
    }
}

let Tanvir = new Athlete('football','Tanvir',24,5.6,81);
Tanvir.introduce();
Tanvir.bodyShape();
Tanvir.plays();

