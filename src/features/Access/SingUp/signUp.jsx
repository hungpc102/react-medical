import React, { useState } from 'react';
import './signUp.scss'

function SingUpModal() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h3 className="modal-title w-100 text-center fw-bolder" id="registrationModalLabel">Đăng Ký</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body px-5">
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label fw-bold">Họ Tên</label>
                    <span className='text-danger'>&nbsp;*</span>
                    <input type="text" placeholder='Nhập tên đầy đủ' className="form-control" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                    <span className='text-danger'>&nbsp;*</span>
                    <input type="email" placeholder='Nhập email' className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">Mật khẩu</label>
                    <span className='text-danger'>&nbsp;*</span>
                    <input type="password" placeholder='Nhập mật khẩu' className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label fw-bold">Nhập lại mật khẩu</label>
                    <span className='text-danger'>&nbsp;*</span>
                    <input type="password" placeholder='Nhập lại mật khẩu' className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="role" className="form-label fw-bold">Chọn vai trò</label>
                      <span className='text-danger'>&nbsp;*</span>
                      <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Chọn vai trò...</option>
                        <option value="patient">Bệnh nhân</option>
                        <option value="doctor">Bác sĩ</option>
                        <option value="staff">Nhân viên</option>
                      </select>
                    </div>

                    { (formData.role === 'doctor' || formData.role === 'staff') && (
                      <div className="mb-3">
                        <label htmlFor="securityCode" className="form-label fw-bold">Mã bảo mật</label>
                        <span className='text-danger'>&nbsp;*</span>
                        <input type="text" placeholder='Nhập mã bảo mật' className="form-control" id="securityCode" name="securityCode" value={formData.securityCode} onChange={handleChange} required />
                      </div>
                    ) }

                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label fw-bold">Số điện thoại</label>
                    <span className='text-danger'>&nbsp;*</span>
                    <input type="tel" placeholder='Nhập số điện thoại' className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                  </div>
              </div>
              <div className="modal-footer border-0 w-100 justify-content-center pb-4">
                <button type="button" className="btn btn-secondary  rounded-pill px-5 me-3 py-2" data-bs-dismiss="modal">Hủy</button>
                <button type="submit" className="btn btn-primary  rounded-pill px-5 py-2">Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingUpModal