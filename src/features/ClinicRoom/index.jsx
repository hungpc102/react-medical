import { useState, useEffect} from 'react';
import { getClinic } from './getClinicSlice';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss'
import {updateClinic} from './updateClinicSlice'
import {createResult} from './createResultSlice'

function ClinicRoom() {
  const [examinationResult, setExaminationResult] = useState({
    user_id:'',
    patient_id:'',
    clinic_id:'',
    result:''
  });
  const dispatch = useDispatch()

  const clinic = useSelector(state => state.getClinic.data?.metadata.clinic)
  const patientArray = useSelector(state => state.getClinic.data?.metadata.patient)
  const patient = patientArray ? patientArray[0] : null;

  useEffect(() => {
    if (patient && clinic) {
      // Bây giờ chúng ta cũng kiểm tra clinic để đảm bảo nó có sẵn
      setExaminationResult(prevState => ({
        ...prevState,
        patient_id: patient.patient_id,
        user_id: clinic.user_id,
        clinic_id:clinic.clinic_id
      }));
    }
  }, [patient, clinic]);
  
  const handleStart = () => {
    if(clinic){
      dispatch(updateClinic({clinicId:clinic.clinic_id ,status:'ready'}))
      console.log('Examination started');
    }
  };

  const handleFinish = () => {
    if (patient) {
      dispatch(createResult(examinationResult));
      console.log('Medical examination ended');
    }
  };

  useEffect(() => {
        dispatch(getClinic()); 

}, [dispatch]);

  return (
    <div className="m-5 p-5" style={{backgroundColor: '#f2f2f2', borderRadius:'10px'}}>
      <h2 className="text-center mb-4">{clinic?.clinic_name}</h2>

      <h4>Thông Tin Bệnh Nhân</h4>
      <div className="card">
        <div className="card-body">
        {patient?(
          <>
            <p>Tên bệnh nhân: {patient.patient_name}</p>
            <p>Tuổi: {patient.patient_age}</p>
            <p>Giới tính: {patient.patient_sex}</p>
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
          value={examinationResult.result}
          // Sử dụng setExaminationResult để update result
          onChange={(e) =>
            setExaminationResult(prevState => ({ ...prevState, result: e.target.value }))
          }
        ></textarea>
      </div>

      <div className="mt-5 d-flex justify-content-between">
        <button className="btn btn-start" onClick={handleStart}>Bắt Đầu</button>
        <button className="btn btn-end shadow" onClick={handleFinish}>Kết Thúc</button>
      </div>
    </div>
  );
}

export default ClinicRoom;