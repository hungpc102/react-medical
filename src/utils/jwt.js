import {jwtDecode} from 'jwt-decode';

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