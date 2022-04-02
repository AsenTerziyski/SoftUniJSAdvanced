import page from '../node_modules/page/page.mjs';
import { logout } from './api/userService.js';

import { addSession } from './middleware/session.js';
import { addRender } from './middleware/render.js';

import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(addSession)
page(addRender)

page('/', homePage);
page('/dashboard', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout);

page.start();

function onLogout() {
    logout();
    console.log('Logged out!')
    page.redirect('/')
}