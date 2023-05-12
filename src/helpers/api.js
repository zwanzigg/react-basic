import 'react-toastify/dist/ReactToastify.css';
import {handleError} from "./utils";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export const signIn = async (loginInfo) => {
    try {
        const response = await fetch(`${API_URL}/users/sign-in`, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(loginInfo)
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return handleError(data);
        }
    } catch (error) {
        return handleError(error);
    }
}

export const getCurrentUser = async (accessToken) => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`
            }
        })
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return handleError(data);
        }
    } catch (error) {
        return handleError(error);
    }
}

export const signUp = async (userInfo) => {
    try {
        const response = await fetch(`${API_URL}/users/sign-up`, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userInfo)
        })
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return handleError(data);
        }
    } catch (error) {
        return handleError(error);
    }
}
