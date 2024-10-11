const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 },
    { id: 4, name: 'Product 4', price: 19.99 },
    { id: 5, name: 'Product 5', price: 59.99 },
];

let cartItems = [];

const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
const totalPriceElement = document.getElementById('total-price');

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cartItems.push(product);
    updateCart();
}

function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    cart.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cart.appendChild(cartItemDiv);
        totalPrice += item.price;
    });

    totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

displayProducts();
