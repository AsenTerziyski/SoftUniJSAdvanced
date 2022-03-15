import { logout } from './api/users.js';
import { initialize } from './router.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';



// const main = document.querySelector('main');

// const registerPage = document.getElementById('registerPage');
// const loginPage = document.getElementById('loginPage');
// const catalogPage = document.getElementById('dashboard-holder');
// const detailsPage = document.getElementById('detailsPage');
// const createPage = document.getElementById('createPage');

// document.querySelector('nav').addEventListener('click', onNavigate);


const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': onLogout
};

const router = initialize(links);
router.updateNav();

// Start application in home veiw:
// goto('/');

// window.showSection = (name) =>{ 
//     const section = links[name];
//     main.replaceChildren(section);
// }

// const context = { showSection, goto }
// window.showHome = () => { showHome(context) }
// window.showCatalog = () => {showCatalog(context)}

// Start application in home veiw:
// goto('/');
router.goTo('/');
function onLogout() {
    logout();
    router.updateNav();
    router.goTo('/');
}

// function showSection(section) {
//     main.replaceChildren(section);
// };

// function onNavigate(event) {
//     let trgt = event.target;
//     if (trgt.tagName == 'IMG') {
//         trgt = trgt.parentElement;
//     }
//     if (trgt.tagName == 'A') {
//         event.preventDefault();
//         const url = new URL(trgt.href);
//         goto(url.pathname);
//     }
// }

// function goto(name) {
//     const handler = links[name];
//     if (typeof handler == 'function') {
//         handler(context);
//     }
// }