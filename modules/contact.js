import {createNav, navListeners} from './nav.js';

const Contact = (() => {


    // cache the DOM
    const $container = document.querySelector('.container');
    console.log($container);

    const init = () => {
        render();
        listeners();
        console.log('i am from contact');
    }

    const listeners = () => {
        navListeners();
    }

    const render = () => {
        let markup = "";
        markup += `
            <h1>Contact page</h1>
            <div class="nav">
                ${createNav()}
            </div>
        `;
        $container.innerHTML = markup;
    }

    return {
        init,
    }
})();

export default Contact;