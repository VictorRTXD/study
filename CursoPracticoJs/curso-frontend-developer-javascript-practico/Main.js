const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carMenuIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector(".product-detail-shopping-Cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productDetail = document.querySelector(".product-detail");
let countProducts = 0;
const productDetailImg = document.querySelector(".product-detail-img");
const productDetailName = document.querySelector(".product-detail-name");
const productDetailCost = document.querySelector(".product-detail-cost");

//toggle significa  alternar y no sirve para alternar el funcionamiento de una clase
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleBurgerMenu);
carMenuIcon.addEventListener("click", toggleCarMenuIcon);
productDetailCloseIcon.addEventListener("click", toggleProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function toggleBurgerMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function toggleCarMenuIcon() {
    shoppingCartContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
}

function toggleProductDetail() {
    productDetail.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function openProductDetailAside() {
    productDetail.classList.remove("inactive");
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");

    //Con event.target.getAttribute("stc") puedo obtener el src al clickear una imagen para ponerlo en el productDetail
    const clickedImageSrc = event.target.getAttribute("src");
    productDetailImg.setAttribute("src", clickedImageSrc);

    //con este metodo obtengo el costo y nombre de producto
    productDetailCost.innerText = event.target.nextElementSibling.innerText;
}

const productList = [];
productList.push({
    name : "bike",
    price : 120,
    image : "https://th.bing.com/th?id=OP.6PRy0P1TmjuW9Q474C474&w=300&h=300&o=5&,pid=21.1"
});
productList.push({
    name : "laptop gamer msi",
    price : 30000,
    image : "https://thegadgetflow.com/wp-content/uploads/2021/01/MSI-GE76-Raider-Dragon-Edition-Tiamat-Laptop-05-1200x900.jpg"
});
productList.push({
    name : "pc alienware",
    price : 80000,
    image : "https://th.bing.com/th/id/R.95660464d17cfc86917352d4b22bcc86?rik=zEUfOFV6HtbtwA&pid=ImgRaw&r=0"
});

// esta funcion insertara en html los elementos que tenga el productList
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
        productImg.style.cursor = "pointer";
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        /*continuar aqui para agregar intercatividad a los botones */
    
        const productImgCard = document.createElement("img");
        productImgCard .setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
