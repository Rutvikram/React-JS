import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashbord = () => {
    return (
        <>
        <div>
            <h1>Admin Dashbord</h1>
        </div>
            <Outlet></Outlet>
        </>
    );
};

export default AdminDashbord;