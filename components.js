export function Header({ title }) {
    return `
        <header>
            <h1>${title}</h1>
        </header>
    `;
}

export function MenuItem({ name, description, price }) {
    return `
        <div class="menu-item">
            <h3>${name}</h3>
            <p>${description}</p>
            <p>${formatPrice(price)}</p>
            <button>Add to Cart</button>
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