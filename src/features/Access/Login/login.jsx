import { useState, useEffect, useRef} from 'react';
import { useDispatch} from 'react-redux';
import {login} from './loginSlice';
import { Modal } from "bootstrap";

function LoginModal() {

  const modalRef = useRef(null);
  
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (!isModalOpen && modalRef.current) {
      const bootstrapModal = Modal.getInstance(modalRef.current);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }, [isModalOpen]);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });


  const dispatch = useDispatch();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    setIsModalOpen(false);
  };

  return (
      <div className="modal fade"   ref={modalRef} id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
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
                <button type="submit" className="btn btn-primary rounded-pill  py-2 text-nowrap">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default LoginModal;