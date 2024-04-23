import {jwtDecode} from 'jwt-decode';
import { apiUer } from '../api/user_Api';
import axios from 'axios';

export const decodeToken = (token) => {
    try {
        // Giải mã token
        const decodedToken = jwtDecode(token);

        return decodedToken ;

    } catch (error) {
        // Token không hợp lệ hoặc có vấn đề, xử lý lỗi tại đây
        console.error('Error decoding token:', error);
        return null;
    }
};

export function checkTokenAndRefresh() {
    const tokensString = localStorage.getItem('tokens');
    if (tokensString) {
        let tokens = null;
        try {
            tokens = JSON.parse(tokensString);
        } catch (error) {
            console.error('Error parsing tokens:', error);
            // Suggested handling: Clear localStorage and require login
            localStorage.removeItem('tokens');
            alert('Your session is invalid. Please log in again.');
            window.location.href = '/login'; // Use the login route that applies to your app
            return;
        }

        const decodedToken = decodeToken(tokens.accessToken);
        const currentTime = Date.now() / 1000;
        const timeLeft = decodedToken ? decodedToken.exp - currentTime : 0;

        if (!decodedToken || timeLeft < 300) {
            refreshToken(tokens); // Pass entire tokens object if refreshToken needs it
        } else {
            console.log(`Time remaining before token expiry: ${timeLeft} seconds`);
        }
    } else {
        console.log('No tokens to check.');
    }
}


async function refreshToken(tokens) {
    try {
        const tokensString = localStorage.getItem('tokens');
        const tokens = JSON.parse(tokensString)
        const user = decodeToken(tokens.accessToken)
        const response = await axios({
            method: 'POST',
            url: apiUer.refreshToken, // Make sure this is the correct endpoint
            headers: {
                'x-rtoken-id': tokens.refreshToken,
                'x-client-id': user.userId,
                'x-api-key': process.env.REACT_APP_API_KEY
              }
        });
        const tokensNew =response.data.metadata.tokens
        console.log('Tokens refreshed:', response.data);
        localStorage.setItem('tokens', JSON.stringify(tokensNew));
    } catch (error) {
        console.error('Unable to refresh token:', error);
        alert('Your session has expired. Please log in again.');
        window.location.href = '/'; // Redirect to login page as needed
    }
}

