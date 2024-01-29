// IndexBus.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LeafletRoutingMachine from '../Bus/LeafletRoutingMachine';
import Swal from 'sweetalert2';

const IndexBus = () => {
    const position = [-18.8792, 47.5079];
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');

    const [coordonneDepart, setCoordonneDepart] = useState({
        latDepart: 0,
        lngDepart: 0,
    });

    const [coordonneArrive, setCoordonneArrive] = useState({
        latArrive: 0,
        lngArrive: 0,
    });

    const actionButton = async (e) => {
        e.preventDefault();

        if (!depart || !arrive) {
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez compléter les champs!', });
        } else {
            // Mettez à jour les coordonnées de départ et d'arrivée ici
            setCoordonneDepart({
                latDepart: -18.91146318288575,
                lngDepart: 47.52834969303447,
            });
            setCoordonneArrive({
                latArrive: -18.913889596767543,
                lngArrive: 47.537546514307095,
            });
        }
    };

    useEffect(() => {
        // Effectuer des actions après le rendu initial
    }, []); // Déclencher useEffect seulement au montage initial

    return (
        <div className="App">
            <div className="left-container">
                <div className="form-bus">
                    <form onSubmit={actionButton}>
                        <div className="content-bus">
                            <div className="control">
                                <span>Départ</span>
                                <input type="text" className="input" placeholder="Arrêt de Départ" onChange={(e) => setDepart(e.target.value)} />
                            </div>
                            <div className="control">
                                <span>Arrivée</span>
                                <input type="text" className="input" placeholder="Arrêt d'Arrivée" onChange={(e) => setArrive(e.target.value)} />
                            </div>
                            <button className="button is-success">Valider</button>
                            <button className="button is-danger">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletRoutingMachine
                    latitudeDepart={coordonneDepart.latDepart}
                    longitudeDepart={coordonneDepart.lngDepart}
                    latitudeArrive={coordonneArrive.latArrive}
                    longitudeArrive={coordonneArrive.lngArrive}
                />
            </MapContainer>
        </div>
    );
};

let DefaultIcon = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default IndexBus;


// import React from 'react';
// import { MapContainer, TileLayer } from "react-leaflet"
// import "leaflet-control-geocoder/dist/Control.Geocoder.css"
// import "leaflet-control-geocoder/dist/Control.Geocoder.js"
// import L from "leaflet"
// import LeafletRoutingMachine from "../Bus/LeafletRoutingMachine";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const IndexBus = () => {

//     const position = [-18.8792, 47.5079]
//     const [depart, setDepart] = useState('')
//     const [arrive, setArrive] = useState('')
//     //
//     const [coordonneDepart, setCoordonneDepart] = useState({
//         latDepart: '',
//         lngDepart: '',
//     })
//     const getCoordonneeDepart = async() => {
//         // const rep = await axios.get("http://localhost:8000/getData")
//         // coordonneDepart.latDepart = rep.data.latDepart
//         // coordonneDepart.lngDepart = rep.data.lngDepart

//         // setCoordonneDepart({...coordonneDepart, latDepart: rep.data.latDepart})

//         coordonneDepart.latDepart = -18.91146318288575
//         coordonneDepart.lngDepart = 47.52834969303447
//     }

// // 
//     const [coordonneArrive, setCoordonneArrive] = useState({
//         latArrive: '',
//         lngArrive: '',
//     })

//     const getCoordonneeArrive = async() => {
//         // const rep = await axios.get("http://localhost:8000/getData")
//         // coordonneArrive.latArrive = rep.data.latArrive
//         // coordonneArrive.lngArrive = rep.data.lngArrive

//         // setCoordonneDepart({...coordonneArrive, lngArrive: rep.data.lngArrive})

//         coordonneArrive.latArrive = -18.913889596767543
//         coordonneArrive.lngArrive = 47.537546514307095
//     }

//     //  ACTION
//     const actionButton = async(e) => {
//         e.preventDefault()

//         if(!depart || !arrive ){
//             Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez complèter les champs!', });
//         }else{
//             // if (co !== null) {
//             //     // La valeur n'est pas null, utilisez-la normalement
//             //     console.log(myValue);
//             // } else {
//             //     // La valeur est null, assignez une valeur par défaut (dans ce cas, 0)
//             //     myValue = 0;
//             //     console.log(myValue);
//             // }
//             getCoordonneeDepart()
//             getCoordonneeArrive() 

//         }
//     }
//     // useEffect(() => {
//     //     getCoordonneeDepart();
//     //     getCoordonneeArrive()
//     // }, [coordonneDepart, coordonneArrive])

//     return (
//          <div className="App">
//             <div className='left-container'>
//                 <div className='form-bus'>
//                     <form onSubmit={actionButton}>
//                         <div className='content-bus'>
//                             <div className="control">
//                                 <span>Départ</span>
//                                 <input type="text" className='input' placeholder="Arrêt de Départ" onChange={(e) => setDepart(e.target.value)}/>
//                             </div>
//                             <div className="control">
//                                 <span>Arrivée</span>
//                                 <input type="text" className='input' placeholder="Arrêt d'Arrivée" onChange={(e) => setArrive(e.target.value)}/>
//                             </div>
//                             <button className='button is-success'>Valider</button>
//                             <button className='button is-danger'>Annuler</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//                 <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//                 <LeafletRoutingMachine latitudeDepart={coordonneDepart.latDepart} longitudeDepart={coordonneDepart.lngDepart} latitudeArrive={coordonneArrive.latArrive} longitudeArrive={coordonneArrive.lngArrive}/>
               
//             </MapContainer>
//         </div>
//     );
// };

// let DefaultIcon = L.icon({
//     iconUrl : "/marker-icon.png",
//     iconSize : [25, 41],
//     iconAnchor: [10, 41],
//     popupAnchor: [2, -40]
//   });
//   L.Marker.prototype.options.icon = DefaultIcon;
  

// export default IndexBus;