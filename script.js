const addProduct = () =>{
    let productField = document.getElementById('product-name');
    let quantityField = document.getElementById('quantity');
    let product = productField.value;
    productField.value = '';
    let quantity = quantityField.value;
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct (product, quantity);
    saveProductToLocalStorage(product,quantity);
}

const displayProduct = (product, quantity) =>{
    let ul = document.getElementById('product-container');
    let li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

const getStoreShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartSringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartSringified);

}

const displayProductsFromLocalStorage = () => {
    const saveCart = getStoreShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product, quantity);
    }
}

displayProductsFromLocalStorage();