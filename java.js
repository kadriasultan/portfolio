function addToCart(event) {
    const product = event.target.parentElement;
    const cart = document.querySelector('.cart-items');
    const cartItem = document.createElement('div');

    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${product.querySelector('img').src}" alt="Product">
        <h2>${product.querySelector('h2').textContent}</h2>
        <p>$${product.querySelector('p:nth-of-type(2)').textContent}</p>
        <button class="remove-from-cart">Remove from Cart</button>
    `;

    cart.appendChild(cartItem);
}
// Add event listener to toggle the hamburger menu on smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navItems = document.querySelector('.nav-items');

    menuButton.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
});
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
});

function removeFromCart(event) {
    const cartItem = event.target.parentElement;
    cartItem.remove();
}

const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
removeFromCartButtons.forEach(function(button) {
    button.addEventListener('click', removeFromCart);
});