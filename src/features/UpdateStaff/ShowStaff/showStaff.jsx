import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'; // import useSelector hook
import "./showStaff.scss";
import { showStaff } from './showStaffSlice';

const ShowStaff = () => {
    const dispatch = useDispatch(); 
    const status = useSelector((state) => state.showStaff.status);
    const staff = useSelector((state) => state.showStaff.staff?.metadata); 
    const updateStaff = useSelector((state) => state.updateStaff.status);


     useEffect(() => {
        if (status === 'idle' || updateStaff === 'succeeded') {
            dispatch(showStaff()); 
        }
    }, [updateStaff, dispatch]);

  return (
    <div className="container bg-color h-100 show-staff pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title text-center">Hồ Sơ Nhân Viên</h3>
            </div>
            <ul className="list-group list-group-flush">
              {staff ? (
                <>
                  <li className="list-group-item">
                    <strong>ID: </strong>{staff.staff_id}
                  </li>
                  <li className="list-group-item">
                    <strong>Tên Nhân Viên: </strong>{staff.staff_name}
                  </li>
                  <li className="list-group-item">
                    <strong>Tuổi: </strong>{staff.staff_age}
                  </li>
                  <li className="list-group-item">
                    <strong>Phòng Ban: </strong>{staff.staff_department}
                  </li>
                  <li className="list-group-item">
                    <strong>Mô Tả: </strong>{staff.staff_describe}
                  </li>
                </>
              ) : (
                <li className="list-group-item">
                  Không có dữ liệu nhân viên.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStaff;
