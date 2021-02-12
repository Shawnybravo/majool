import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';

let navItems = ['home', 'about', 'contact'];

export const createNav = () => {
    let markup = "";
    navItems.forEach((item) => {
        markup += `
            <button class="button ${item}-button">${item}</button>
        `;
    })
    return markup;
}

// Move to utils module?
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let fn;
export const navListeners = () => {
    navItems.forEach((item, index) => {
        document.querySelector(`.${item}-button`).addEventListener('click', () => {
            item = capitalize(item);
            eval(item).init();
        });
    })
}  


// Make an empty object
