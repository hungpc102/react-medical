// Hàm kiểm tra định dạng email
export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email);
  };
  
// Hàm kiểm tra định dạng mật khẩu (ít nhất 6 ký tự, bao gồm chữ và số)
export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };
  
  // Hàm kiểm tra định dạng số điện thoại (ít nhất 10 số)
  export const validatePhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(cleaned);
  };
  
  
  // Hàm kiểm tra tên (không chứa số hoặc ký tự đặc biệt, không bắt buộc)
  export const validateName = (name) => {
    const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
    return nameRegex.test(name);
  };