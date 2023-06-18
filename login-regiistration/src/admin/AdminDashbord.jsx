import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

const AdminDashbord = () => {
    return (
        <>
            <div>
                <Sidebar />
                
            </div>
            
            
            <Outlet></Outlet>
        </>
    );
};

export default AdminDashbord;