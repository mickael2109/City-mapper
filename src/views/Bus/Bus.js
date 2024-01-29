import React from 'react';

const Bus = () => {
    return (
        <div className='form-bus'>
            <div className='content-bus'>
                <div className="control">
                    <span>Départ</span>
                    <input type="text" className='input' placeholder="Arrêt de Départ" />
                </div>
                <div className="control">
                    <span>Arrivée</span>
                    <input type="text" className='input' placeholder="Arrêt d'Arrivée" />
                </div>
                <button className='button is-success'>Valider</button>
                <button className='button is-danger'>Annuler</button>
            </div>
        </div>
    );
};

export default Bus;