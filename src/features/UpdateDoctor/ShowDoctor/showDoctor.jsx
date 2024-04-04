import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; // import useSelector hook
import "./showDoctor.scss";
import { showDoctor } from './showDoctorSlice';

const ShowDoctor= () => {
    const dispatch = useDispatch(); 
    const status = useSelector((state) => state.showDoctor.status);
    const doctor = useSelector((state) => state.showDoctor.doctor?.metadata); 
    const updateDoctor = useSelector((state) => state.updateDoctor.status);

     useEffect(() => {
        if (status === 'idle' || updateDoctor === 'succeeded') {
            dispatch(showDoctor()); 
        }
    }, [updateDoctor, dispatch]);

  return (
    <div className="container show-doctor pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title text-center">Hồ Sơ Bác Sĩ</h3>
            </div>
            <ul className="list-group list-group-flush">
              {doctor ? (
                <>
                  <li className="list-group-item">
                    <strong>ID: </strong>{doctor.doctor_id}
                  </li>
                  <li className="list-group-item">
                    <strong>Tên Bác Sĩ: </strong>{doctor.doctor_name}
                  </li>
                  <li className="list-group-item">
                    <strong>Tuổi: </strong>{doctor.doctor_age}
                  </li>
                  <li className="list-group-item">
                    <strong>Phòng Ban: </strong>{doctor.doctor_department}
                  </li>
                  <li className="list-group-item">
                    <strong>Mô Tả: </strong>{doctor.doctor_describe}
                  </li>
                </>
              ) : (
                <li className="list-group-item">
                  Không có dữ liệu bác sĩ.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDoctor;
