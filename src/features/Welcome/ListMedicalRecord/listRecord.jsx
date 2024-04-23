import { useState, useEffect } from 'react';
import { listRecord } from './listRecordSlice';
import { useDispatch, useSelector } from 'react-redux';
import './listRecord.scss'

const ListRecord = () => {
  const [filters, setFilters] = useState({
    user_id: '',
    patient_name: '',
    medicalRecord_status: '',
  });
  
  const dispatch = useDispatch();
  const medicalRecords = useSelector((state) => state.listRecord.data?.metadata);

  // useEffect now correctly depends on filters to update the list whenever filters change
  useEffect(() => {
    dispatch(listRecord(filters));
  }, [filters, dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handler function for submitting the filters form
  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the default form submit behavior
    dispatch(listRecord(filters));
  };



  return (
    <div className='pt-4 ps-3'>
        <div className='list-record p-3 pt-5 px-4 bg-color'>
            <h4>Bộ lọc</h4>
            <form className='d-flex justify-content-between'>
                <div className="mb-3">
                    <label htmlFor="user_id" className="form-label text-nowrap">Mã bệnh nhân</label>
                    <input
                        type="text"
                        className="form-control"
                        id="user_id"
                        name="user_id"
                        value={filters.user_id}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="patient_name" className="form-label text-nowrap">Họ và tên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="patient_name"
                        name="patient_name"
                        value={filters.patient_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="medicalRecord_status" className="form-label">Trạng thái</label>
                  <select
                    className="form-select"
                    id="medicalRecord_status"
                    name="medicalRecord_status"
                    value={filters.medicalRecord_status}
                    onChange={handleChange}
                  >
                    <option value="">All</option>
                    <option value="pending">Đang chờ</option>
                    <option value="examining">Đang khám</option>
                    <option value="finish">Đã khám xong</option>
                  </select>
                </div>
            </form>

            <div className="table-responsive overflow-auto">
              <table className="table table-hover">
                  <thead>
                  <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Mã hồ sơ</th>
                      <th scope="col">Mã bệnh nhân</th>
                      <th scope="col">Tên bệnh nhân</th>
                      <th scope="col">Gói khám</th>
                      <th scope="col">Trạng thái</th>
                  </tr>
                  </thead>
                  <tbody>
                  {medicalRecords && medicalRecords.map((record, index) => (
                      <tr key={record.patient_id}>
                          <th scope="row">{index + 1}</th>
                          <td>{record.patient_id}</td>
                          <td>{record.user_id}</td>
                          <td>{record.patient_name}</td>
                          <td>{record.package_id}</td>
                          <td>{record.medicalRecord_status}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
              </div>
        </div>
    </div>
   
  );
};

export default ListRecord;