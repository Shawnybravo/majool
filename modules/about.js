import {createNav, navListeners} from './nav.js';

const About = (() => {


    // cache the DOM
    const $container = document.querySelector('.container');
    console.log($container);

    const init = () => {
        render();
        listeners();
        console.log('i am from about');
    }

    const listeners = () => {
        navListeners();
    }

    const render = () => {
        let markup = "";
        markup += `
            <h1>About page</h1>
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

export default About;