import React from 'react';
import Sidebar from './sideBar';
import { Outlet } from 'react-router-dom'; 


function ManageStaff() {
  return (
    <div className="d-flex">
      <div className=''>
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Outlet/>
      </div>
    </div>
  );
}

export default ManageStaff;