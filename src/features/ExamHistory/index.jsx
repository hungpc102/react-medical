import { useState, useEffect } from 'react';
import {listRecord} from '../Welcome/ListMedicalRecord/listRecordSlice'
import { useDispatch, useSelector } from 'react-redux';
import {decodeToken} from '../../utils/jwt'
import moment from 'moment';
import { getResult, clearStatus } from './detailResultSlice';
import './index.scss'

const ExamHistory = () => {
  const [patientId, setPatientId] = useState(null);

  const tokensString = localStorage.getItem('tokens');
  const tokens = JSON.parse(tokensString)
  const user = decodeToken(tokens.accessToken);

  const dispatch = useDispatch();

  const handleSelectHistory = async(history) => {
    if(history){
      clearStatus()
      dispatch(getResult({patient_id:history.patient_id}))
    }
  };

  const results = useSelector(state => state.getResult.data?.metadata)

  const histories = useSelector((state) => state.listRecord.data?.metadata); 
  useEffect(() => {
    dispatch(listRecord({user_id:user.userId}));
  }, [dispatch]);

  return (
    <div className='vh-100 d-flex'>
      <div className='col-6 p-3'>
        <div className='h-100 p-5 radius-10' style={{backgroundColor: '#f2f2f2'}}>
          <div className='card'>
          <h4 className='card-header text-center'>Danh Sách Lịch Sử Khám Bệnh</h4>
          <ul className="list-group">
            {histories?.map((history, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-start" key={index} onClick={() => handleSelectHistory(history)}>
                <div className="me-auto">
                  <div className="fw-bold">{moment(history.createdAt).format('DD/MM/YYYY HH:mm')}</div>
                  <div className="fw-bold">Mã hồ sơ {history.patient_id}</div>
                  <div className="fw-bold">Gói khám {history.MedicalPackage.package_name}</div>
                </div>
                <span className="button-detail badge bg-primary rounded-pill">Chi tiết</span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className='col-6 d-flex  align-items-center p-3 ps-0 vh-100'>
        <div className='w-100 h-100 radius-10' style={{backgroundColor: '#f2f2f2'}} >
        {results && results.length > 0 ? (
          <div className='card m-5'  >
            <div className="w-100">
              <h4 className="card-header text-center">Kết quả khám bệnh</h4>
                <h5 className="mt-3 text-center">Mã hồ sơ {results[0].patient_id}</h5>
            </div>

            {results.map((result, index) => (
              <div className="w-100 mb-3" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{result.Clinic.clinic_name}</h5>
                  <p className="card-text">{result.result}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='card m-5'> 
            <h4 className="card-header text-center">
              Kết quả khám bệnh
            </h4>
            <div className="card-body">
              <p className="card-text">Không tìm thấy kết quả.</p>
            </div>
          </div>
        )}
        </div>
 
</div>
    </div>
  );
};

export default ExamHistory;