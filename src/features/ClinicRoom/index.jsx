import { useState, useEffect} from 'react';
import { getClinic } from './indexSlice';
import { useSelector, useDispatch } from 'react-redux';

function ClinicRoom() {
  const [examinationResult, setExaminationResult] = useState('');
  const dispatch = useDispatch()

  const clinic = useSelector(state => state.getClinic.data?.metadata[1] || null)
  console.log(clinic?.user_id || null)
  const handleStart = () => {
    // Logic để bắt đầu khám cho bệnh nhân
    console.log('Examination started');
  };

  const handleFinish = () => {
    // Logic để gửi kết quả khám đi
    console.log('Examination finished with result: ', examinationResult);
    // Reset form (nếu cần)
    setExaminationResult('');
  };

  useEffect(() => {
        dispatch(getClinic()); 
}, []);

  return (
    <div className="container mt-5 p-5 border" style={{backgroundColor: '#f2f2f2', borderRadius:'15px'}}>
      <h2 className="text-center mb-4">Phòng Khám Số 1</h2>

      <h4>Thông Tin Bệnh Nhân</h4>
      <div className="card">
        <div className="card-body">
        {clinic?(
          <>
          <p>Tên bệnh nhân: {clinic?.patient}</p>
          <p>Tuổi: 30</p>
          <p>Giới tính: Nam</p>
          </>
        ): (<span>Không có bệnh nhân trong phòng</span>)}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="resultInput" className="form-label">Kết Quả Khám</label>
        <textarea
          className="form-control"
          id="resultInput"
          rows="3"
          value={examinationResult}
          onChange={(e) => setExaminationResult(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-3 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleStart}>Bắt Đầu Khám</button>
        <button className="btn btn-success" onClick={handleFinish}>Kết Thúc và Gửi Kết Quả</button>
      </div>
    </div>
  );
}

export default ClinicRoom;