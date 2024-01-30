// LeafletRoutingMachine.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
import Swal from 'sweetalert2';

const LeafletRoutingMachine = (props) => {
    const { latitudeDepart, longitudeDepart, latitudeArrive, longitudeArrive } = props;
    const map = useMap();

    useEffect(() => {

        const control = L.Routing.control({
            lineOptions: {
                styles: [
                    {
                        color: 'blue',
                        weight: 4,
                        opacity: 0.7,
                    },
                ],
            },
            routerWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim(),
        }).addTo(map);

        const departCoords = { latitude: latitudeDepart, longitude: longitudeDepart };
        const arriveeCoords = { latitude: latitudeArrive, longitude: longitudeArrive };

        if (departCoords.latitude !== 0 && departCoords.longitude !== 0 && arriveeCoords.latitude !== 0 && arriveeCoords.longitude !== 0) {
            control.setWaypoints([
                L.latLng(departCoords.latitude, departCoords.longitude),
                L.latLng(arriveeCoords.latitude, arriveeCoords.longitude),
            ]);
        } else {
            Swal.fire({ icon: 'info', title: 'Information', text: "Veuillez entrer votre arrêt bus départ et arrivé d'arrivé", });
        }
    }, [map, latitudeDepart, longitudeDepart, latitudeArrive, longitudeArrive]);

    return null;
};

export default LeafletRoutingMachine;



// import L from 'leaflet';
// import { useEffect } from 'react';
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import { useMap } from 'react-leaflet';
// import '../../assets/bus/bus.css'

// const LeafletRoutingMachine = propos => {
//     const { latitudeDepart, longitudeDepart, latitudeArrive, longitudeArrive } = propos
    
    
   
//     const map = useMap();

//     useEffect(() => {

//         console.log("latitudeDepart : ",latitudeDepart)
//         console.log("longitudeDepart : ",longitudeDepart)
//         console.log("latitudeArrive : ",latitudeArrive)
//         console.log("longitudeArrive : ",longitudeArrive)

//         const control = L.Routing.control({
//             lineOptions: {
//                 styles: [
//                     {
//                         color: 'blue',
//                         weight: 4,
//                         opacity: 0.7,
//                     },
//                 ],
//             },
//             routerWhileDragging: false,
//             geocoder: L.Control.Geocoder.nominatim(),
//         })
//         .on("routesfound", function (e) {
//             if (e.error) {
//                 console.error("Erreur de récupération des itinéraires:", e.error);
//             } else {
//                   // Coordonnées de départ et d'arrivée
//             const departCoords = { latitude: latitudeDepart, longitude: longitudeDepart };
//             const arriveeCoords = { latitude: latitudeArrive, longitude: longitudeArrive };

//             // Définir les points de départ et d'arrivée
//             control.setWaypoints([
//                 L.latLng(departCoords.latitude, departCoords.longitude),
//                 L.latLng(arriveeCoords.latitude, arriveeCoords.longitude),
//             ]);
//             }
//         })
        
//         .addTo(map);

     
        
//         // Gérer le clic sur la carte
//         // map.on('click', (event) => {
//         //     const { lat, lng } = event.latlng;
//         //     console.log(`{ latitude: ${lat}, longitude: ${lng} },`);
//         //  });

//         // // Créer une tableau de coordonnées Leaflet 
//         // const leafletCoordinates = coordinatesArray.map(coord => [coord.latitude, coord.longitude]);

//         // // Créer une polyline à partir des coordonnées
//         // const polyline = L.polyline(leafletCoordinates, {
//         //     color: 'blue',
//         //     weight: 4,
//         //     opacity: 0.7,
//         // }).addTo(map);

//         // // Zoomer et recentrer la carte pour que la polyline soit visible
//         // map.fitBounds(polyline.getBounds());

//     }, [map]);

//     return null;
// };

// export default LeafletRoutingMachine;




// import L from 'leaflet';
// import { useEffect } from 'react';
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import { useMap } from 'react-leaflet';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import data from '../../data/data'

// const LeafletRoutingMachine = () => {
//     const map = useMap();

//     let iconBus = L.icon({
//         iconUrl: "/bus.png",
//         iconSize: [30, 30],
//     });

//     let myIcon = L.icon({
//         iconUrl: "/myIocalisation.png",
//         iconSize: [30, 30],
//     });

//     useEffect(() => {
//         var marker1 = L.marker([0, 0], { icon: iconBus }).addTo(map);

//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const latitude = position.coords.latitude
//                 const longitude = position.coords.longitude
    
                
//                 // map.setView([latitude, longitude], 30, {icon: myIcon})
//                 // L.marker([latitude, longitude], {icon: myIcon}).addTo(map)
//             },(error) => {
//                 Swal.fire({ icon: 'error', title: 'Erreur', text: `Erreur de la géolocalisation, veuillez vérifier votre connexion!`, });
//             })
//         }else{
//             Swal.fire({ icon: 'error', title: 'Erreur', text: `La géolocalisation n'est pas prise en charge par ce navigateur`, });
//         }

//         L.Routing.control({
//             lineOptions: {
//                 styles: [
//                     {
//                         color: 'blue',
//                         weight: 4,
//                         opacity: 0.7,
//                     },
//                 ],
//             },
//             routerWhileDragging: false,
//             geocoder: L.Control.Geocoder.nominatim(),
//         })
//             .on("routesfound", function (e) {
//                 let coordinatesArray = [];
                

//                 e.routes[0].coordinates.forEach((c, i) => {
//                     if (i === 0) {
//                         coordinatesArray.push({ latitude: c.lat, longitude: c.lng });
//                     } else {
//                         // Vérifier si les coordonnées existent déjà dans coordinatesArray
//                         const coordExist = coordinatesArray.some(coord => coord.latitude === c.lat && coord.longitude === c.lng);
                
//                         if (coordExist) {
//                         } else {
//                             coordinatesArray.push({ latitude: c.lat, longitude: c.lng });
//                         }
//                     }
//                     // coordinatesArray.push({ latitude: c.lat, longitude: c.lng });
//                     // if(i===0){
//                     //     coordinatesArray.push({ latitude: c.lat, longitude: c.lng });
//                     // }else if(i=== (e.routes[0].coordinates.length - 1)){
//                     //     coordinatesArray.push({ latitude: c.lat, longitude: c.lng });
//                     // }

//                     setTimeout(() => {
//                         marker1.setLatLng([c.lat, c.lng]);
//                     }, 100 * i);
//                 });

//                 // Afficher les coordonnées depuis le coordinatesArray
//                 coordinatesArray.forEach((coord, index) => {
//                     console.log(`${index}, { latitude : ${coord.latitude}, longitude : ${coord.longitude} }`);
//                 });


                
//                 // Stocker les coordonnées dans le localStorage
//                 localStorage.setItem("coordinates", JSON.stringify(coordinatesArray));



//                 // Vous pouvez également envoyer les données au backend pour les enregistrer dans un fichier
//                 axios.post('http://localhost:8000/rechercheBus/', { coordonne: coordinatesArray })
//                     .then(response => {
//                         console.log("data : ", response)
//                         console.log("Coordonnées enregistrées avec succès !");
//                     })
//                     .catch(error => {
//                         console.error("Erreur lors de l'enregistrement des coordonnées :", error);
//                     });
//             })
//             .addTo(map);

//     }, [map, iconBus]);

//     return null;
// };

// export default LeafletRoutingMachine;




