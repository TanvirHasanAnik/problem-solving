import { loadNavigationBar } from "./navigation.js";

let addProductButton = document.getElementById("add-product-button");
let tbody = document.getElementById("product-table-tbody");
addProductButton.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    window.location.href = "add-product.html";
});

function filterPropertyValue(object,key){
    let value = object[key];
    if(value){
        if(key === "date" ){
            let date_time = value.split("T");
            return date_time;
        }
        else{
            return value;
        }
    }
}

let productList = JSON.parse(localStorage.getItem('product'));
function loadProductList(){
    productList.forEach(element => {
        let row = document.createElement("tr");
        row.setAttribute("id",element.id);
        row.innerHTML += `
            <td><input type="checkbox"></td>
            <td>
                <div class="product_data_wrapper">
                    <img src="sneaker1.svg" alt="product img" width="42px" height="42px">
                    <div class="id_name_wrapper">
                        <span class="product_id_wrapper">${element.id}</span>
                        ${element.name}
                    </div>
                </div>
            </td>`;
        for(let key in element){
            if(key !== "id" && key !== "name"){
                let tableData = document.createElement("td");
                let propertyValue = filterPropertyValue(element,key);
                if(key === "date"){
                    tableData.append(propertyValue[0]);
                    tableData.append(document.createElement("br"));
                    tableData.append(`at ${propertyValue[1]}`);
                }else{
                    tableData.textContent = propertyValue;
                }
                row.appendChild(tableData);
            }
        }
    
        row.innerHTML += `
            <td>
                <button type="button" id="view-button" class="product-action-button"><img src="view-icon.svg" alt="view icon" width="18px" height="19px"></button>
                <button type="button" id="edit-button" class="product-action-button" product-id="${element.id}"><img src="edit-icon.svg" alt="edit icon" width="18px" height="19px"></button>
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
        const editButton = event.target.closest("#edit-button");
        if (deleteButton) {
            const productId = Number(deleteButton.getAttribute("product-id"));
            productList = productList.filter(product => product.id !== productId);
            localStorage.setItem('product', JSON.stringify(productList));
            tbody.innerHTML = "";
            loadProductList();
        }
        if(editButton){
            const productId = Number(editButton.getAttribute("product-id"));
            window.location.href = `add-product.html?id=${productId}`;
        }
    });
});