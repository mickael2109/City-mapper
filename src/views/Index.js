import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Auth/Login';

const Index = () => {


    // const location = useLocation()
    // const [type, setType] = useState('')

    // useEffect(() => {
    //     if(location.pathname === '/admin/*'){
    //     setType('Admin')
    //     }else if(location.pathname === '/taxi/*'){
    //     setType('Taxi')
    //     }
    // }, [location.pathname])

    return (
        <div>
            <ul>
                <li><Link to='/auth/login'>Admin</Link></li>
                <li><Link to='/auth/login'>Taxi</Link></li>
                <li><Link to='/bus'>Bus</Link></li>
            </ul>
            
           
        </div>
    );
};

export default Index;