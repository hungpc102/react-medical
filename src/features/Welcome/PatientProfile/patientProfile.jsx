import React, { useState } from 'react';
import './patientProfile.scss'

const PatientProfile = () => {
  const [patientProfile, setPatientProfile] = useState({
    patientId:'',
    name: '',
    gender: 'male', // Mặc định giới tính là 'male', có thể thay đổi tùy chọn này
    birthDate: '',
    age:'',
    occupation: '',
    address: '',
    ethnicity: '',
    phoneNumber: '',
    priority: '',
    package: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientProfile({
      ...patientProfile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý submit form ở đây - ví dụ: gửi thông tin đến backend
    console.log(patientProfile);
  };

  return (
    <div className="container my-3 form-patient">
      <h2 className="mb-4 w-100 text-center">Tạo hồ sơ khám bệnh</h2>
      <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center'>
          <div className="row">

            <div className="col-5 m-3">
                <div className="mb-3">
                  <label htmlFor="patientId" className="form-label text-nowrap">ID Bệnh Nhân</label>
                  <input
                    type="number" 
                    className="form-control"
                    id="patientId"
                    name="patientId"
                    value={patientProfile.patientId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                <label htmlFor="name" className="form-label text-nowrap">Họ Tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={patientProfile.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Giới Tính</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={patientProfile.gender === 'male'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Nam
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={patientProfile.gender === 'female'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Nữ
                    </label>
                  </div>
                </div>
              </div>

                <div className="mb-3 text-nowrap">
                  <label htmlFor="birthDate" className="form-label text-nowrap">Ngày Sinh</label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    name="birthDate"
                    value={patientProfile.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                  <div className="mb-3 ">
                    <label htmlFor="occupation" className="form-label text-nowrap">Nghề Nghiệp</label>
                    <input
                      type="text"
                      className="form-control"
                      id="occupation"
                      name="occupation"
                      value={patientProfile.occupation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Tuổi</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      value={patientProfile.age}
                      />
                  </div>
                </div>
              <div className="col-5 m-3">
                    <div className="mb-3">
                  <label htmlFor="address" className="form-label text-nowrap">Địa Chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={patientProfile.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ethnicity" className="form-label text-nowrap">Dân Tộc</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ethnicity"
                    name="ethnicity"
                    value={patientProfile.ethnicity}
                    onChange={handleChange}
                  />
                </div>
              
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label text-nowrap">Điện Thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={patientProfile.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="priority" className="form-label text-nowrap">Đối Tượng Ưu Tiên</label>
                  <select
                    className="form-select"
                    id="priority"
                    name="priority"
                    value={patientProfile.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn đối tượng...</option>
                    {/* Các options đối tượng ưu tiên được liệt kê ở đây */}
                    <option value="elderly">Bình thường</option>
                    <option value="disabled">Ưu tiên 1</option>
                    <option value="disabled">Ưu tiên 2</option>
                    <option value="disabled">Ưu tiên 3</option>
                    <option value="disabled">Khẩn cấp</option>
                    {/* ... */}
                  </select>
                </div>
              

              <div className="mb-3">
                <label htmlFor="package" className="form-label">Gói Khám</label>
                <select
                  className="form-select"
                  id="package"
                  name="package"
                  value={patientProfile.package}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn gói khám...</option>
                  {/* Các options gói khám được liệt kê ở đây */}
                  <option value="basic">Gói khám tổng quát</option>
                  {/* ... */}
                </select>
              </div>
            </div>
          </div>

        

        
        

        <button type="submit" className="btn btn-primary ms-3">Tạo Hồ Sơ</button>
      </form>
    </div>
  );
};

export default PatientProfile;