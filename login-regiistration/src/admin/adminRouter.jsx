import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashbord from './AdminDashbord';
import MainAdminView from './MainAdminView.jsx';

const adminRouter = () => {
    return (
        <>
         <Routes >
            <Route path="/" element={< AdminDashbord/>}>
                <Route path="dashboard" element={<AdminDashbord />}/>
                {/* <Route path="test" element={<>test</>}/> */}
            </Route>
         </Routes>
        </>
    );
};

export default adminRouter;