import * as api from './api.js';
import { setUserData, clearUserData } from '../util.js';

const usersEndpoints = {
    userLogin: '/users/login',
    userRegister: '/users/register',
    userLogout: '/users/logout'
}

export async function login(email, password) {
    const result = await api.post(usersEndpoints.userLogin, {email, password});
    setUserData(result);
    console.log(result)
    return result;

}

export async function register(email, password) {
    const result = await api.post(usersEndpoints.userRegister, {email, password});
    setUserData(result);
    console.log(result);
    return result;
    
}

export async function logout() {
    api.get(usersEndpoints.userLogout);
    clearUserData();
}

