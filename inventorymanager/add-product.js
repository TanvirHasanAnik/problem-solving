import { Product } from "./shape/product.js";
import { loadNavigationBar } from "./navigation.js";

document.addEventListener("DOMContentLoaded",(event) => {
  loadNavigationBar();
});

const form = document.getElementById("add-product-form");
let product = new Product();

function showLoadingScreen(duration) {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex";

  return new Promise((resolve) => {
    setTimeout(() => {
      loadingScreen.style.display = "none";
      resolve();
    }, duration);
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    for (let [name,value] of formData.entries()) {
      console.log(`${name}: ${value}`);
      if(name in product){
        if(value.trim() == "" || value.trim() == null){
            throw new Error(`${name} was not provided`);
        }else{
            product[name] = value.trim();
        }
      }
    }

    showLoadingScreen(3000)
      .then(() => {
        addNewProduct("product",product);
        window.location.href = "product.html";
      });
  } catch (error) {
    alert(`${error.message}`);
  }
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