import { NavLink } from 'react-router-dom';
import './sideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faRightFromBracket, faHospital} from '@fortawesome/free-solid-svg-icons';
import { useLogout } from '../../features/Access/Logout/logout';
function Sidebar() {

  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  const handleLogout = useLogout()
  return (
    <nav className="sidebar d-flex flex-column bg-light vh-100">
      <div className="sidebar-logo mb-3 px-4">
        <div className='d-flex flex-column'>
          <img src="../../logo.png" alt="logo" className='logo mt-3'/>
          <div className='mt-5 d-flex card-user'>
            <img src="../../admin.png" className='img-staff rounded-circle ms-4 mt-3' alt="staff" />
            <div className='ms-3 mt-3'>
               <h6 className="text-dark mb-1 mt-2">{user.name}</h6>
                <span className='text-muted'>Quản trị viên</span>
            </div>
          </div>
        </div>
        <hr className='mt-5'/>   
      </div>
      <div className="sidebar-content">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item my-2">
          <NavLink to="/manage/admin" end className={({ isActive }) =>
              "nav-link text-muted" + (isActive ? " active" : "")
          }>
              <FontAwesomeIcon icon={faUsers} className="me-2 icon ms-4" />
                Quản lý tài khoản
            </NavLink>
          </li>

          <li className="nav-item my-2">
            <NavLink to="/package" className={({ isActive }) =>
              "nav-link text-muted" + (isActive ? " active" : "")
           }>
            <FontAwesomeIcon icon={faHospital} className='me-2 icon ms-4'/>
              Quản lý gói khám 
            </NavLink>
          </li>

          {/* <li className="nav-item my-2">
            <NavLink to="/doctor/update"  className={({ isActive }) =>
              "nav-link text-muted" + (isActive ? " active" : "")
           }>
              <FontAwesomeIcon icon={faChartPie} className='me-2 icon ms-4'/>
              Điều phối bệnh nhân
            </NavLink>
          </li> */}
          <li className="nav-item my-2">
            <button className="nav-link text-muted w-100 text-start btn-logout" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} className='me-2 ms-4 icon text-nowrap'/>
              Đăng xuất
            </button>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;