
const form = document.getElementById("add-product-form");

function Product(){
    this.id = null;
    this.name = null;
    this.price = null;
    this.size = null;
    this.quantity = null;
    this.date = null;
    this.availability = null;
}

let product = new Product();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    for (let [name,value] of formData.entries()) {
      console.log(`${name}: ${value}`);
      if(name === "product-id"){
        if(!value.trim()){
            throw new Error(`${name} was not provided`);
        }else{
            product.id = value.trim();
        }
      }
    }
  } catch (error) {
    alert(`${error.message}`);
  }

  console.log(product);
});