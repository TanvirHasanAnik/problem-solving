import { loadNavigationBar } from "./navigation.js";

let addProductButton = document.getElementById("add-product-button");
let tbody = document.getElementById("product-table-tbody");
addProductButton.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    window.location.href = "add-product.html";
});

let productList = JSON.parse(localStorage.getItem('product'));
function loadProductList(){
    productList.forEach(element => {
        let row = document.createElement("tr");
        row.setAttribute("id",element.id);
        row.innerHTML += `
            <td><input type="checkbox"></td>
            <td style="display: flex; flex-direction: row;">
                <img src="sneaker1.svg" alt="product img" width="42px" height="42px">
                <div>
                    <span>${element.id}</span> <br>
                    ${element.name}
                </div>
            </td>`;
        for(let key in element){
            if(key !== "id" && key !== "name"){
                let tableData = document.createElement("td");
                tableData.textContent = element[key];
                row.appendChild(tableData);
            }
        }
    
        row.innerHTML += `
            <td>
                <button type="button" id="view-button" class="product-action-button"><img src="view-icon.svg" alt="view icon" width="18px" height="19px"></button>
                <button type="button" id="edit-button" class="product-action-button"><img src="edit-icon.svg" alt="edit icon" width="18px" height="19px"></button>
                <button type="button" id="delete-button" class="product-action-button" product-id="${element.id}"><img src="delete-icon.svg" alt="delete icon" width="18px" height="19px"></button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', (Loadevent) => {
    loadNavigationBar();
    loadProductList();
    tbody.addEventListener('click', (event) => {
        const deleteButton = event.target.closest("#delete-button");
        if (deleteButton) {
            const productId = deleteButton.getAttribute("product-id");
    
            // Filter the productList to remove the deleted product
            productList = productList.filter(product => product.id !== productId);
    
            // Update localStorage with the new product list
            localStorage.setItem('product', JSON.stringify(productList));
    
            // Remove the row from the table
            const row = deleteButton.closest('tr');
            row.remove();
        }
    });
});