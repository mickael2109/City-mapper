import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexAdmin from '../views/Admin/IndexAdmin';

const AdminRoute = () => {
    return (
        <Routes>
            <Route index element={<IndexAdmin/>}/>
        </Routes>
    );
};

export default AdminRoute;