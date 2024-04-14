import React from 'react';
import Sidebar from './sideBar';
import { Outlet } from 'react-router-dom'; 


function ManageDoctor() {
  return (
    <div className="d-flex doctor">
      <Sidebar />
      <div className="flex-grow-1">
      <Outlet/>
      </div>
    </div>
  );
}

export default ManageDoctor;