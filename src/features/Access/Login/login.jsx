import React, { useState } from 'react';

function LoginModal() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Thêm xử lý khi người dùng submit form đăng nhập
    console.log(loginData);
  };

  return (
    <div>
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h3 className="modal-title w-100 text-center fw-bold" id="loginModalLabel">Đăng nhập</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleLoginSubmit}>
              <div className="modal-body px-5">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input type="email" placeholder='Nhập email' className="form-control" id="email" name="email" value={loginData.email} onChange={handleLoginChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Mật khẩu</label>
                  <input type="password" placeholder='Nhập mật khẩu' className="form-control" id="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
                </div>
              </div>
              <div className="modal-footer border-0 w-100 justify-content-center pt-0 pb-4">
                <button type="submit" className="btn btn-primary rounded-pill px-5 py-2">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;