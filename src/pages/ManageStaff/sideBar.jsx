import { NavLink } from 'react-router-dom';
import './sideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faChartPie, faRightFromBracket, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  return (
    <nav className="sidebar d-flex flex-column bg-light vh-100">
      <div className="sidebar-logo mb-3 px-4">
        <div className='d-flex flex-column'>
          <img src="../../logo.png" alt="logo" className='logo mt-3'/>
          <div className='mt-5 d-flex card-user'>
            <img src="../../staff.jpeg" className='img-staff rounded-circle ms-4 mt-3' alt="staff" />
            <div className='ms-4 mt-3'>
               <h5 className="text-dark mb-1 mt-2">{user.name}</h5>
                <span className='text-muted'>Nhân viên</span>
            </div>
          </div>
        </div>
        <hr className='mt-5'/>   
      </div>
      <div className="sidebar-content">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item my-2">
          <NavLink to="/manage/staff" end className={({ isActive }) =>
              "nav-link text-muted" + (isActive ? " active" : "")
          }>
              <FontAwesomeIcon icon={faDoorOpen} className="me-2 icon ms-4" />
                Quản lý hồ sơ khám bệnh
            </NavLink>
          </li>
          <li className="nav-item my-2">
          <NavLink to="/manage/staff/update" className={({ isActive }) =>
              "nav-link text-muted" + (isActive ? " active" : "")
           }>
              <FontAwesomeIcon icon={faPenToSquare} className='me-2 icon ms-4'/>
              Cập nhập hồ sơ nhân viên
            </NavLink>
          </li>
         
          {/* <li className="nav-item my-2">
            <NavLink to="/abc" className="nav-link text-muted" activeClassName="active">
              <FontAwesomeIcon icon={faChartPie} className='me-2 icon ms-4'/>
              Điều phối bệnh nhân
            </NavLink>
          </li> */}

          <li className="nav-item my-2">
            <NavLink to="/clinic-info" className="nav-link text-muted" activeClassName="active">
              <FontAwesomeIcon icon={faRightFromBracket} className='me-2 icon ms-4'/>
              Đăng xuất
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;