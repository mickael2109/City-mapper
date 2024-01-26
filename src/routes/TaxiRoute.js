import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexClient from '../views/Taxi/Client/IndexClient';
import IndexChauffeur from '../views/Taxi/Chauffeur/IndexChauffeur';
import IndexTaxi from '../views/Taxi/IndexTaxi';

const TaxiRoute = () => {
    return (
        <Routes>
            <Route index element={<IndexTaxi/>}/>
            <Route path='/client' element={<IndexClient/>}/>
            <Route path='/chauffeur' element={<IndexChauffeur/>}/>
        </Routes>
    );
};

export default TaxiRoute;