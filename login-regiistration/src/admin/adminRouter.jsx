import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashbord from './AdminDashbord';
import AdminSidebar from './sidebar.jsx';
// import MainAdminView from './MainAdminView.jsx';

const adminRouter = () => {
    return (
        <>
         <Routes >
            <Route path="/" element={<AdminDashbord/>}>
                {/* <Route path="dashboard" element={<AdminSidebar />}/> */}
            </Route>
         </Routes>
        </>
    );
};

export default adminRouter;