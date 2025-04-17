let addProductButton = document.getElementById("add-product-button");

addProductButton.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    window.location.href = "add-product.html";
})