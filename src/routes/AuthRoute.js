import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../views/Auth/Login';
import CreateCompte from '../views/Auth/CreateCompte';
import PageNotFound from '../views/PageNotFound';

const AuthRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<CreateCompte/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    );
};

export default AuthRoute;