export function loadNavigationBar(){
  const pages = {
    "Product": "product.html",
    "Add Product": "add-product.html",
  }
  let pageList = document.createElement("ul");
  pageList.style.listStyleType = "none";
  pageList.className = "navigation-list";
  const currentPage = window.location.pathname.split("/").pop();

  for(let title in pages){
    let listItemWrapper = document.createElement("div");
    listItemWrapper.className = "list_item_wrapper";
    listItemWrapper.setAttribute("link",pages[title]);
    let listItem = document.createElement("li");
    if(pages[title] === currentPage){
        listItem.className = "navigation-list-item-active";
    }else{
        listItem.className = "navigation-list-item";
    }
    listItem.textContent = title;
    listItemWrapper.appendChild(listItem);
    pageList.appendChild(listItemWrapper);
    document.getElementsByClassName("navigation_wrapper")[0].appendChild(pageList);
  }
  
  pageList.addEventListener("click", (clickEvent) => {
    let wrapper = clickEvent.target.closest(".list_item_wrapper");
    if (wrapper) {
      const link = wrapper.getAttribute("link");
      if (link) {
        window.location.href = link;
      }
    }
  });

  let sidePanel = document.getElementsByClassName("navigation_wrapper")[0];
  sidePanel.appendChild(pageList);
}