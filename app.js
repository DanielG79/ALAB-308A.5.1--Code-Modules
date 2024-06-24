import { Header, Menu } from './components.js';
import { formatPrice } from './utils.js';

const menuItems = [
    {
        name: 'Cheeseburger',
        description: 'A classic cheeseburger with lettuce, tomato, and onion.',
        price: 8.99
    },
    {
        name: 'Pulled Pork Sandwich',
        description: 'Slow-roasted pulled pork on a soft bun, with coleslaw.',
        price: 7.50
    },
    {
        name: 'Veggie Burrito',
        description: 'A flour tortilla filled with rice, beans, and grilled vegetables.',
        price: 6.75
    },
    {
        name: 'Chicken Tenders',
        description: 'Tender, breaded chicken tenders served with your choice of dipping sauce.',
        price: 6.25
    }
];

const headerHTML = Header({ title: 'Food Truck App' });
const menuHTML = Menu(menuItems);

const appElement = document.getElementById('app');
appElement.innerHTML = `
    ${headerHTML}
    ${menuHTML}
`;