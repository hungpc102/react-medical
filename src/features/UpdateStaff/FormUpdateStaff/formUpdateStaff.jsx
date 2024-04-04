import { useState } from 'react';
import './formUpdateStaff.scss';
import { useDispatch } from 'react-redux';
import { updateStaff } from './formUpdateSlice';

const FormUpdateStaff = () => {

  const dispatch = useDispatch()

  const [staffData, setStaffData] = useState({
    staff_name: '',
    staff_age: '',
    staff_department: '',
    staff_describe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...staffData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStaff(staffData))
  };

  return (
    <div className="form-update-staff pt-5">
      <h2>Cập Nhập Hồ Sơ Nhân Viên</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="staff_name" className="form-label">Tên Nhân Viên</label>
          <input
            type="text"
            className="form-control"
            id="staff_name"
            name="staff_name"
            value={staffData.staff_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="staff_age" className="form-label">Tuổi</label>
          <input
            type="number"
            className="form-control"
            id="staff_age"
            name="staff_age"
            value={staffData.staff_age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="staff_department" className="form-label">Phòng Ban</label>
          <input
            type="text"
            className="form-control"
            id="staff_department"
            name="staff_department"
            value={staffData.staff_department}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="staff_describe" className="form-label">Mô Tả</label>
          <textarea
            className="form-control"
            id="staff_describe"
            name="staff_describe"
            rows="3"
            value={staffData.staff_describe}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary fw-bold rounded-pill">Cập Nhật</button>
      </form>
    </div>
  );
};

export default FormUpdateStaff;