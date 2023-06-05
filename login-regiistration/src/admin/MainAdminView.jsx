import React from 'react';
import { Outlet } from 'react-router-dom';

const MainAdminView = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainAdminView;