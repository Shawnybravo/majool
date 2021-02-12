import {createNav, navListeners } from './nav.js';


const Home = (() => {
    
    const dataInHome = 'this is the data from home';

    // cache the DOM
    const $title = document.querySelector('h1');
    const $container = document.querySelector('.container');
    
    const init = () => {
        console.log('hi from home.js');
        render();
        listeners();
    }

    const listeners = () => {
        // document.querySelector('.about-button').addEventListener('click', () => {
        //     About.init();
        // })
        navListeners();
    }

    // Nav

    const render = () => {
        let markup = "";
        markup += `
            <h1 class="title">Welcome</h1>
            <div class="nav">
                ${createNav()}
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore culpa repudiandae nemo, atque consequuntur quo. Quam harum cumque, nihil quia enim rerum sit dolor pariatur, molestias sapiente aliquam autem nam.
                <br><br>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odio at possimus neque quae sequi delectus beatae qui. Recusandae, praesentium?
            </p>
        `;
        $container.innerHTML = markup;
    }
    

    return {
        init,
    }
})();

export default Home;