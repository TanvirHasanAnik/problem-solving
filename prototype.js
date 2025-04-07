function City(city, population) {
    this.city = city;
    this.population = this.population;
    this.hello = function(){
        console.log("Hello from"+this.city);
    }
  }
  
  City.prototype.greet = function () {
    console.log(`Greetings from ${this.city}`);
  };
  
  City.prototype.test = function () {
    console.log(`Test from ${this.city}`);
  };
  
  const place = new City("Madrid",1000);
  place.city;
  place.population;
  place.hello();
  place.greet(); // Greetings from Madrid
  let str = 'dfdfjdkf'


  str[Symbol.iterator]()
  for(let chr of str){

  }
  let array = [2,3]
  for(let item of array){

  }

  console.log('place', place)
  console.log(Function)


  let Car = {
    country: "Japan",
    brand: "Honda"
  }

  let Civic = Object.create(Car);

