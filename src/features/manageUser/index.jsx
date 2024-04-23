import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUser} from './getAllUserSlice'
import { deleteUser } from './deleteUserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPen} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import {updateStatus} from './statusUserSlice'
import './index.scss'


const UserManagement = () => {
  const [filters, setFilters] = useState({
    user_id: '',
    name: '',
    roles: '',
  });
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getAllUser.data?.metadata);
  const statusUpdate = useSelector((state) => state.updateStatus.status);
  const statusDelete = useSelector((state) => state.deleteUser.status);



  useEffect(() => {
    dispatch(getAllUser(filters));
  }, [filters, statusUpdate, statusDelete, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleDeleteUser = (user_id) => {
    dispatch(deleteUser({user_id:user_id}))
  }

  const handleBlock = (user_id, status) => {
    dispatch(updateStatus({user_id: user_id, status: status}))
  }

  const handleUnblock = (user_id, status) => {
    dispatch(updateStatus({user_id: user_id, status: status}))
  }


  return (
    <div className='pt-4 ps-3'>
        <div className='list-record p-3 pt-5 px-4 bg-color overflow-auto'>
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
                    <label htmlFor="name" className="form-label text-nowrap">Họ và tên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={filters.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="roles" className="form-label">Vai trò</label>
                  <select
                    className="form-select"
                    id="roles"
                    name="roles"
                    value={filters.roles}
                    onChange={handleChange}
                  >
                    <option value="">All</option>
                    <option value="patient">Bệnh nhân</option>
                    <option value="staff">Nhân viên</option>
                    <option value="doctor">Bác sĩ</option>
                  </select>
                </div>
            </form>

            <div className="table-responsive">
              <table className="table table-hover">
                  <thead>
                  <tr>
                      <th scope="col">STT</th>
                      <th scope="col">ID</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Vai trò</th> 
                      <th scope="col">Trạng thái</th>
                  </tr>
                  </thead>
                  <tbody>
                  {users && users.map((user, index) => (
                      <tr key={user.user_id}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.user_id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.roles}</td>
                          <td>{user.status}</td>
                          <td>
                          <Dropdown>
                            <Dropdown.Toggle className='btn-manage' variant="secondary" id="dropdown-basic">
                            <FontAwesomeIcon icon={faUserPen} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleBlock(user.user_id, 'block')}>Block</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleUnblock(user.user_id, 'active')}>Unblock</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDeleteUser(user.user_id)}>Xóa</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          </td>
                      </tr>
                  ))}
                </tbody>
              </table>
              </div>
        </div>
    </div>
   
  );
};

export default UserManagement;