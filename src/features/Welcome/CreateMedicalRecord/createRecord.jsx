import { useState, useEffect } from 'react';
import './createRecord.scss'
import { useDispatch , useSelector} from 'react-redux';
import {createRecord} from './createRecordSlice'
import {addRecordToWaitingRoom} from './addRecordToWaitingRoomSlice'

const CreateRecord = () => {
  const [recordData, setRecordData] = useState({
    user_id:'',
    patient_name: '',
    patient_sex: 'male',
    patient_address: '',
    patient_age:'',
    patient_dob: '',
    patient_job: '',
    patient_phone: '',
    package_id: '',
  });

  const [waitingRoomData, setWaitingRoomData] = useState({
    patientId:'',
    roomName:'waitingRoom9',
    score:1
  })


  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Xác định state nào cần cập nhật dựa trên name của input
    if (name in recordData) {
      setRecordData(prev => ({ ...prev, [name]: value }));
    } else if (name in waitingRoomData) {
      setWaitingRoomData(prev => ({ ...prev, [name]: value }));
    }
  };
  const patientId = useSelector(state => state.createRecord.data?.metadata.patient_id)


  useEffect(() => {
    // Cập nhật patientId trong waitingRoomData khi có dữ liệu mới từ Redux store
    if (patientId) {
      setWaitingRoomData(prev => {
        const updatedData = { ...prev, patientId: patientId };
        dispatch(addRecordToWaitingRoom(updatedData));
      });
    }
  }, [patientId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecord(recordData))
  };

  return (
    <div className="container my-3 mt-5 form-patient">
      <h2 className="mb-4 w-100 text-center">Tạo hồ sơ khám bệnh</h2>
      <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center'>
          <div className="row">

            <div className="col-5 m-3">
                <div className="mb-3">
                  <label htmlFor="user_id" className="form-label text-nowrap">Mã Bệnh Nhân</label>
                  <input
                    type="number" 
                    className="form-control"
                    id="user_id"
                    name="user_id"
                    value={recordData.user_id}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                <label htmlFor="patient_name" className="form-label text-nowrap">Họ Tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="patient_name"
                  name="patient_name"
                  value={recordData.patient_name}
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
                      name="male"
                      value="male"
                      checked={recordData.patient_sex === 'male'}
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
                      name="female"
                      value="female"
                      checked={recordData.patient_sex === 'female'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Nữ
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="other"
                      name="other"
                      value="other"
                      checked={recordData.patient_sex === 'other'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Khác
                    </label>
                  </div>
                </div>
              </div>

                <div className="mb-3 text-nowrap">
                  <label htmlFor="patient_dob" className="form-label text-nowrap">Ngày Sinh</label>
                  <input
                    type="date"
                    className="form-control"
                    id="patient_dob"
                    name="patient_dob"
                    value={recordData.patient_dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                  <div className="mb-3 ">
                    <label htmlFor="patient_job" className="form-label text-nowrap">Nghề Nghiệp</label>
                    <input
                      type="text"
                      className="form-control"
                      id="patient_job"
                      name="patient_job"
                      value={recordData.patient_job}
                      onChange={handleChange}
                    />
                  </div>
                 
                </div>
              <div className="col-5 m-3">

              <div className="mb-3">
                    <label htmlFor="patient_age" className="form-label">Tuổi</label>
                    <input
                      type="number"
                      className="form-control"
                      id="patient_age"
                      name="patient_age"
                     onChange={handleChange}
                      value={recordData.patient_age}
                      />
                  </div>
                    <div className="mb-3">
                  <label htmlFor="patient_address" className="form-label text-nowrap">Địa Chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="patient_address"
                    name="patient_address"
                    value={recordData.patient_address}
                    onChange={handleChange}
                    required
                  />
                </div>
              
                <div className="mb-3">
                  <label htmlFor="patient_phone" className="form-label text-nowrap">Điện Thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="patient_phone"
                    name="patient_phone"
                    value={recordData.patient_phone}
                    onChange={handleChange}
                    required
                  />
                </div>


              <div className="mb-3">
                <label htmlFor="package_id" className="form-label">Gói Khám</label>
                <select
                  className="form-select"
                  id="package_id"
                  name="package_id"
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn gói khám...</option>
                  {/* Các options gói khám được liệt kê ở đây */}
                  <option value={1}>Gói khám tổng quát</option>
                  {/* ... */}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="score" className="form-label">Đối tượng</label>
                <select
                  className="form-select"
                  id="score"
                  name="score"
                  
                  onChange={handleChange}
                  required
                >
                  <option value={1}>Bình thường</option>
                  <option value={2}>Ưu tiên 1</option>
                  <option value={3}>Ưu tiên 2</option>
                  <option value={4}>Ưu tiên 3</option>
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

export default CreateRecord;