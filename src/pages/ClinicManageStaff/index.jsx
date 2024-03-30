import React from 'react';
import Sidebar from './sideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom'; 


function ClinicManage() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
      <Outlet/>
      </div>
    </div>
  );
}

export default ClinicManage;