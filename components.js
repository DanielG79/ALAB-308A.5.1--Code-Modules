import { formatPrice } from './utils.js';

let cart = [];

export function Header({ title }) {
    return `
    <header>
      <h1>${title}</h1>
      <div class="cart">
        <button id="cart-button">View Cart (${cart.length})</button>
        <div id="cart-modal" class="modal">
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Your Cart</h2>
            <div id="cart-items"></div>
            <p>Total: <span id="cart-total">${formatPrice(calculateTotal())}</span></p>
            <button id="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function MenuItem({ name, description, price }) {
    return `
    <div class="menu-item">
      <h3>${name}</h3>
      <p>${description}</p>
      <p>${formatPrice(price)}</p>
      <button class="add-to-cart" data-name="${name}" data-price="${price}">Add to Cart</button>
    </div>
  `;
}

export function Menu(items) {
    return `
    <div class="menu">
      ${items.map(item => MenuItem(item)).join('')}
    </div>
  `;
}

export function OrderForm() {
    return `
    <div class="order-container">
      <h2>Order</h2>
      <form id="order-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="order-total">Order Total:</label>
          <span id="order-total">${formatPrice(calculateTotal())}</span>
        </div>
        <button type="submit" id="order-button">Place Order</button>
      </form>
      <div id="order-message"></div>
    </div>
  `;
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = cart.map(item => `<p>${item.name} - ${formatPrice(item.price)}</p>`).join('');

    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = formatPrice(calculateTotal());

    const cartButtonElement = document.getElementById('cart-button');
    cartButtonElement.textContent = `View Cart (${cart.length})`;

    const orderTotalElement = document.getElementById('order-total');
    orderTotalElement.textContent = formatPrice(calculateTotal());
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        addToCart(name, price);
    } else if (event.target.id === 'cart-button' || event.target.classList.contains('close-button')) {
        const cartModal = document.getElementById('cart-modal');
        cartModal.classList.toggle('show');
    } else if (event.target.id === 'checkout-button') {
        // Add checkout functionality here
    }
});