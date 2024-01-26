import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <ul>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/taxi'>Taxi</Link></li>
                <li><Link to='/bus'>Bus</Link></li>
            </ul>
            
           
        </div>
    );
};

export default Index;