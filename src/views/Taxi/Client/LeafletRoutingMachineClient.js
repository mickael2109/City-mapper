import L from 'leaflet';
import { useEffect } from 'react';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from 'react-leaflet';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const LeafletRoutingMachineClient = () => {
    const map = useMap();

    let iconBus = L.icon({
        iconUrl: "/bus.png",
        iconSize: [30, 30],
    });

    let myIcon = L.icon({
        iconUrl: "/myIocalisation.png",
        iconSize: [30, 30],
    });

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
        var marker1 = L.marker([0, 0], { icon: iconBus }).addTo(map);

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
    
                // map.setView([latitude, longitude], 30, {icon: myIcon})
                // L.marker([latitude, longitude], {icon: myIcon}).addTo(map)
            },(error) => {
                Swal.fire({ icon: 'error', title: 'Erreur', text: `Erreur de la géolocalisation, Veuillez vérifier votre connexion!`, });
            })
        }else{
            Swal.fire({ icon: 'error', title: 'Erreur', text: `La géolocalisation n'est pas prise en charge par ce navigateur`, });
        }

        L.Routing.control({
            waypoints: [
                L.latLng(latitude, longitude),
            ],
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
            .on("routesfound", function (e) {
                let coordinatesArray = [];

                e.routes[0].coordinates.forEach((c, i) => {
                    coordinatesArray.push({ latitude: c.lat, longitude: c.lng });

                    setTimeout(() => {
                        marker1.setLatLng([c.lat, c.lng]);
                    }, 100 * i);
                });

                // Afficher les coordonnées depuis le coordinatesArray
                // coordinatesArray.forEach((coord, index) => {
                //     console.log(`Coordonnée ${index + 1}: Lat ${coord.lat}, Lng ${coord.log}`);
                // });


                
                // Stocker les coordonnées dans le localStorage
                // localStorage.setItem("coordinates", JSON.stringify(coordinatesArray));



                // Vous pouvez également envoyer les données au backend pour les enregistrer dans un fichier
                axios.post('http://localhost:8000/insertCoordonnee', { coordonne: coordinatesArray })
                    .then(response => {
                        console.log("data : ", response)
                        console.log("Coordonnées enregistrées avec succès !");
                    })
                    .catch(error => {
                        console.error("Erreur lors de l'enregistrement des coordonnées :", error);
                    });
            })
            .addTo(map);

    }, [map, iconBus]);

    return null;
};

export default LeafletRoutingMachineClient;

