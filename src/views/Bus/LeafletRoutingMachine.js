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


import L from 'leaflet';
import { useEffect } from 'react';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from 'react-leaflet';

const LeafletRoutingMachine = () => {
    const map = useMap();

    useEffect(() => {
        const coordinatesArray = [
            // { latitude: -18.919091841680782, longitude: 47.524162530899055 }, // Arret mahamasina
            // { latitude: -18.918061815743688, longitude: 47.524625380589114 },
            // { latitude: -18.917442542007578, longitude: 47.52403506711085 },
            // { latitude: -18.914467965698357, longitude: 47.52420679466815 },
            // { latitude: -18.910610074602317, longitude: 47.52770574364846 },
            // { latitude: -18.911107848147623, longitude: 47.5282208973665 },
            // { latitude: -18.91146318288575, longitude: 47.52834969303447 }, // Ambohijatovo
            // { latitude: -18.911808364479857, longitude: 47.5284248238408 },
            // { latitude: -18.91356456950595, longitude: 47.52942303576668 },
            // { latitude: -18.914721931153917, longitude: 47.53073093624288 }, 
            // { latitude: -18.914833659674365, longitude: 47.532845832281346 },
            // { latitude: -18.914168120916226, longitude: 47.53325724209684 }, 
            // { latitude: -18.913965075871225, longitude: 47.533595330725284 }, // Antsahabe Mascote
            // { latitude: -18.913929551096142, longitude: 47.53457884538913 },
            // { latitude: -18.91356472403609, longitude: 47.535174527421695 }, // Antsahabe FISA
            // { latitude: -18.913487919045007, longitude: 47.53610147976486 },
            // { latitude: -18.914005684899962, longitude: 47.53686352080046 },
            // { latitude: -18.913889596767543, longitude: 47.537546514307095 }, // Gazety
            // { latitude: -18.91390923844064, longitude: 47.538060247215505 },
            // { latitude: -18.915493421612048, longitude: 47.539090755260794 },
            // { latitude: -18.9164371325208, longitude: 47.54077032272939 }, //Ampasanimalo Buffare
            // { latitude: -18.917574164785677, longitude: 47.54372725453875 }, // Ampasanimalo Tamboho
            // { latitude: -18.9170005735829, longitude: 47.54727986838069 }, // Tsiadana Akondro
            // { latitude: -18.915503135946995, longitude: 47.54925473528982 },
            // { latitude: -18.91485847222495, longitude: 47.549490860681146 }, // Terminus Ankatso 128
        ];

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
        })
            .addTo(map);

        // Coordonnées de départ et d'arrivée
        const departCoords = { latitude: -18.91146318288575, longitude: 47.52834969303447 };
        const arriveeCoords = { latitude: -18.913889596767543, longitude: 47.537546514307095 };

        // Définir les points de départ et d'arrivée
        control.setWaypoints([
            L.latLng(departCoords.latitude, departCoords.longitude),
            L.latLng(arriveeCoords.latitude, arriveeCoords.longitude),
        ]);
        
        // Gérer le clic sur la carte
        // map.on('click', (event) => {
        //     const { lat, lng } = event.latlng;
        //     console.log(`{ latitude: ${lat}, longitude: ${lng} },`);
        //  });

        // // Créer une tableau de coordonnées Leaflet 
        // const leafletCoordinates = coordinatesArray.map(coord => [coord.latitude, coord.longitude]);

        // // Créer une polyline à partir des coordonnées
        // const polyline = L.polyline(leafletCoordinates, {
        //     color: 'blue',
        //     weight: 4,
        //     opacity: 0.7,
        // }).addTo(map);

        // // Zoomer et recentrer la carte pour que la polyline soit visible
        // map.fitBounds(polyline.getBounds());

    }, [map]);

    return null;
};

export default LeafletRoutingMachine;

