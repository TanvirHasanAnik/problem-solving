export function loadNavigationBar(){
  const pages = {
    "Product": "product.html",
    "Add Product": "add-product.html",
  }
  let pageList = document.createElement("ul");
  pageList.style.listStyleType = "none";
  pageList.className = "navigation-list";
  const currentPage = window.location.pathname.split("/").pop();

  for(let key in pages){
    let listItem = document.createElement("li");
    if(pages[key] === currentPage){
        listItem.className = "navigation-list-item-active";
    }else{
        listItem.className = "navigation-list-item";
    }
    let anchorLink = document.createElement("a");
    anchorLink.textContent = key;
    anchorLink.setAttribute("href",pages[key]);
    listItem.appendChild(anchorLink);
    pageList.appendChild(listItem);
  }

  let sidePanel = document.getElementsByTagName("aside")[0];
  sidePanel.appendChild(pageList);
}