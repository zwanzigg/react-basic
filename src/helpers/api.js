const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export const signIn = (loginInfo) => {
    return fetch(`${API_URL}/users/sign-in`, {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(loginInfo)

    })
        .then((response) => response.json()).catch((err) => {
            return {error: err}
        });

}

export const getCurrentUser = (accessToken) => {
    return fetch(`${API_URL}/users/me`, {
        method: 'GET', headers: {
            'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`
        }
    })
        .then((response) => response.json());
}


export const signUp = (userInfo) => {
    return fetch(`${API_URL}/users/sign-up`, {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userInfo)

    })
        .then((response) => response.json()).catch((err) => {
            return {error: err}
        });

}
