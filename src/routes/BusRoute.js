import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexBus from '../views/Bus/IndexBus';

const BusRoute = () => {
    return (
        <Routes>
            <Route index element={<IndexBus/>}/>
        </Routes>
    );
};

export default BusRoute;