import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPublic from '../views/IndexPublic';

const PublicRoute = () => {
    return (
        <Routes>
            <Route index element={<IndexPublic/>}/>
        </Routes>
    );
};

export default PublicRoute;