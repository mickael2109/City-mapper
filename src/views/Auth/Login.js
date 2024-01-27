import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../assets/auth/auth.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      
      };

    return (
        <div className='authentification'>
            <div className='logo-auth'>
              <img src='../Auth/login.jpg' alt='logo'/>
            </div>
            <div className='input-auth'>
              <h2>Connexion</h2>
              <div className="control">
                <i>FaUser</i>
                <input type="text" className='input' placeholder="Email d'utilisateur" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="control">
                <i>FaLock</i>
                <input type="password" className='input' placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
              </div>
              
              
              
              <button onClick={handleLogin} className='btn-auth'>Se connecter</button>

              <div className='create-compte'>
                <span>Vous n'avez pas de compte ? <Link to='/auth/create'>Inscrivez-vous maintenant</Link></span>
              </div>

            </div>
        </div>
    );
};

export default Login;