import { Product } from "./shape/product.js";

const form = document.getElementById("add-product-form");
let product = new Product();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    for (let [name,value] of formData.entries()) {
      console.log(`${name}: ${value}`);
      if(name in product){
        if(!value.trim()){
            throw new Error(`${name} was not provided`);
        }else{
            product[name] = value.trim();
        }
      }
    }
  } catch (error) {
    alert(`${error.message}`);
  }
  console.log(product);
  addNewProduct("product",product);
  console.log(localStorage.getItem("product"));
});

function addNewProduct(key,productObject) {
  let existingProduct = JSON.parse(localStorage.getItem(key));
  if(!existingProduct){
    existingProduct = [];
  }else if(!Array.isArray(existingProduct)){
    existingProduct = [existingProduct];
  }
  existingProduct.push(productObject);
  let productJSON = JSON.stringify(existingProduct);
  localStorage.setItem("product",productJSON);
}