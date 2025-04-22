import { loadNavigationBar } from "./navigation.js";
import { Product } from "./shape/product.js";

document.addEventListener("DOMContentLoaded", () => {
  loadNavigationBar();
  populateFormIfEditing();
});

const form = document.getElementById("add-product-form");
let product = new Product();

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function populateFormIfEditing() {
  const id = getIdFromURL();
  if (!id) return;

  const products = JSON.parse(localStorage.getItem("product")) || [];
  const existingProduct = products.find(p => String(p.id) === id);

  if (existingProduct) {
    document.getElementById("product-name").value = existingProduct.name;
    document.getElementById("product-price").value = existingProduct.price;
    document.getElementById("product-Size").value = existingProduct.size;
    document.getElementById("product-quantity").value = existingProduct.quantity;
    document.getElementById("product-date").value = existingProduct.date;
    document.getElementById("availability").value = existingProduct.availability;

    product.id = existingProduct.id; 
  }
}

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
    const idFromURL = getIdFromURL();
    const products = JSON.parse(localStorage.getItem("product")) || [];

    if (!idFromURL) {
      if (products.length > 0) {
        let lastElementId = Number(products[products.length - 1].id);
        product.id = lastElementId + 1;
      } else {
        product.id = 1;
      }
    }

    for (let [name, value] of formData.entries()) {
      if (name in product) {
        if (value.trim() === "") {
          throw new Error(`${name} was not provided`);
        } else {
          product[name] = value.trim();
        }
      }
    }

    await showLoadingScreen(3000);

    if (idFromURL) {
      const index = products.findIndex(p => String(p.id) === idFromURL);
      if (index !== -1) {
        products[index] = product;
        localStorage.setItem("product", JSON.stringify(products));
      }
    } else {
      products.push(product);
      localStorage.setItem("product", JSON.stringify(products));
    }

    window.location.href = "product.html";
  } catch (error) {
    alert(`${error.message}`);
  }
});
