
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

/* export async function loginUser(email, password) {
    const url = `${baseUrl}/auth/login`
    const data = {
        email: email,
        password: password
    }
    try {
        const result = await axios.post(url, data);
        return result.data;
    } catch (err) {
        return result.data;
    }
} */

export async function registerUser(firstname, lastname, email, password) {
    const url = `${REACT_APP_BASE_URL}/auth/register`
    const data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password
    }
    try {
        const result = await axios.post(url, data);
        return result.data;
    } catch (err) {
        return err.data;
    }
    return true
}

/* export const getNewToken = (token) => {
    const url = `${baseUrl}/auth/token`
    const data = {
        token: token
    }
    try {
        const result = await axios.post(url, data);
        return result.data;
    } catch (err) {
        return result.data;
    }

} */