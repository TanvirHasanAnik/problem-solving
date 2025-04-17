
const form = document.getElementById("add-product-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  for (let data of formData.entries()) {
    console.log(`${data[0]}: ${data[1]}`);
  }
});