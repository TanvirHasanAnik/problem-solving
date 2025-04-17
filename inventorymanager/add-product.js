
const form = document.getElementById("add-product-form");

function product(){
    this.id = null;
    this.Name = null;
    this.price = null;
    this.size = null;
    this.quantity = null;
    this.date = null;
    this.availability = null;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  for (let [name,value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
});