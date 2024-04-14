import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { register } from "./signUpSilce";
import "./signUp.scss";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../../utils/validation";
import { Modal } from "bootstrap";

function SignUpModal() {
  const modalRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (!isModalOpen) {
      const bootstrapModal = Modal.getInstance(modalRef.current);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
      // Ẩn backdrop thay vì loại bỏ nó
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove()
      }
    }
  }, [isModalOpen]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    referralCode: "",
  });
  
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    let newErrors = {};

    if (!validateName(formData.fullname)) {
      newErrors = {
        ...newErrors,
        fullname: "Tên không được chứa kí tự đặc biệt",
      };
    }
    // Kiểm tra từng trường một
    if (!validateEmail(formData.email)) {
      newErrors = { ...newErrors, email: "Email không hợp lệ." };
    }

    if (!validatePassword(formData.password)) {
      newErrors = {
        ...newErrors,
        password: "Mật khẩu ít nhất 6 kí tự và có cả chữ lẫn số",
      };
    }

    if (
      formData.confirmPassword &&
      formData.confirmPassword !== formData.password
    ) {
      newErrors = { ...newErrors, confirmPassword: "Mật khẩu không khớp" };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(
      register({
        name: formData.fullname,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        referralCode: formData.referralCode,
      })
    );
    setIsModalOpen(false);
   
  }

  return (
    <div
      className="modal fade"
      id="registrationModal"
      tabIndex="-1"
      aria-labelledby="registrationModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h3
              className="modal-title w-100 text-center fw-bolder"
              id="registrationModalLabel"
            >
              Đăng Ký
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body px-5">
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label fw-bold">
                  Họ Tên
                </label>
                <span className="text-danger">&nbsp;*</span>
                <input
                  type="text"
                  placeholder="Nhập tên đầy đủ"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
                {errors.fullname && (
                  <div className="text-danger">{errors.fullname}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <span className="text-danger">&nbsp;*</span>
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="form-control"
                  id="email1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Mật khẩu
                </label>
                <span className="text-danger">&nbsp;*</span>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  className="form-control"
                  id="password1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-bold">
                  Nhập lại mật khẩu
                </label>
                <span className="text-danger">&nbsp;*</span>
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label fw-bold">
                  Chọn vai trò
                </label>
                <span className="text-danger">&nbsp;*</span>
                <select
                  className="form-select"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn vai trò...</option>
                  <option value="patient">Bệnh nhân</option>
                  <option value="doctor">Bác sĩ</option>
                  <option value="staff">Nhân viên</option>
                </select>
              </div>

              {(formData.role === "doctor" || formData.role === "staff") && (
                <div className="mb-3">
                  <label htmlFor="referralCode" className="form-label fw-bold">
                    Mã bảo giới thiệu
                  </label>
                  <span className="text-danger">&nbsp;*</span>
                  <input
                    type="text"
                    placeholder="Nhập mã bảo mật"
                    className="form-control"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </div>
            <div className="modal-footer border-0 w-100 justify-content-center pb-4">
              <button
                type="button"
                className="btn btn-secondary  rounded-pill px-5 me-3 py-2"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button type="submit"
                className="btn btn-primary  rounded-pill px-5 py-2 text-nowrap" >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
