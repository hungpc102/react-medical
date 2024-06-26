import { useState } from "react";
import "./formUpdateDoctor.scss";
import { useDispatch } from "react-redux";
import { updateDoctor } from "./formUpdateSlice";

const FormUpdateDoctor = () => {
  const dispatch = useDispatch();

  const [doctorData, setDoctorData] = useState({
    doctor_name: "",
    doctor_age: "",
    doctor_department: "",
    doctor_describe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDoctor(doctorData));
  };

  return (
      <div className="form-update-doctor pt-5 bg-color p-5 w-100">
        <h3 className="w-100 text-center">Cập Nhập Hồ Sơ Bác Sĩ</h3>
        <form onSubmit={handleSubmit} className="mt-3 p-5">
          <div className="mb-3">
            <label htmlFor="doctor_name" className="form-label">
              Tên Bác Sĩ
            </label>
            <input
              type="text"
              className="form-control"
              id="doctor_name"
              name="doctor_name"
              value={doctorData.doctor_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctor_age" className="form-label">
              Tuổi
            </label>
            <input
              type="number"
              className="form-control"
              id="doctor_age"
              name="doctor_age"
              value={doctorData.doctor_age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctor_department" className="form-label">
              Phòng Ban
            </label>
            <input
              type="text"
              className="form-control"
              id="doctor_department"
              name="doctor_department"
              value={doctorData.doctor_department}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctor_describe" className="form-label">
              Mô Tả
            </label>
            <textarea
              className="form-control"
              id="doctor_describe"
              name="doctor_describe"
              rows="3"
              value={doctorData.doctor_describe}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-update fw-bold rounded-pill mt-5"
          >
            Cập Nhập
          </button>
        </form>
      </div>
  );
};

export default FormUpdateDoctor;
