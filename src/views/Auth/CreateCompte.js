import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateCompte = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [link, setLink] = useState('')
    const typeUsers = [
        {id : '1', name: 'Admin'},
        {id : '2', name: 'Taxi'},
        {id : '3', name: 'Client'},
    ]  
  
    const [type, setType] = useState('')

    const handleRegister = async () => {
        if(type === ''){
            Swal.fire({ icon: 'error', title: 'Erreur', text: `Veuillez séléctionner le type!`, });
        }
        // if(password === confirmPassword){
        //     try {
        //         const response = await axios.post('http://localhost:5000/register', { email, password });
        //         console.log(response.data);
        //       } catch (error) {
        //         console.error('Erreur d\'inscription:', error);
        //       }
        // }
    
    };

    useEffect(() => {
        
    })

    return (
        <div className='authentification'>
            <div className='logo-auth'>
              <img src='../Auth/createCompte.jpg' alt='logo'/>
            </div>
            <div className='input-auth'>
              <h2>Inscription</h2>
              <div className="control">
                <i>FaUser</i>
                <input type="text" className='input' placeholder="Email d'utilisateur" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="control">
                <i>FaLock</i>
                <input type="password" className='input' placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="control">
                <i>FaLock</i>
                <input type="password" className='input' placeholder="Comfirmer votre mot de passe" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div className="field">
                    <label className='label'>Type du Client</label>
                    <select className='select' value={typeUsers.name} onChange={(e) => setType(e.target.value)}>
                        <option></option>
                        {
                            typeUsers.map((typeUser) =>(
                                <option value={typeUser.name} className='option' key={typeUser.id}>{typeUser.name}</option>
                            ))
                        }
                    </select>
                </div>
              
              <button onClick={handleRegister} className='btn-auth'>S'inscrire</button>

              <div className='create-compte'>
                <span><Link to='/auth/login'>J'ai déjà un compte</Link></span>
              </div>

            </div>
        </div>
    );
};

export default CreateCompte;