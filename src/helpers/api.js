const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export function requestUserInfo(loginInfo) {
    return fetch(`${API_URL}/users/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)

    })
    .then((response) => response.json());
}