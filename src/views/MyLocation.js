import { map } from 'jquery';
import L from 'leaflet';
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const MyLocation = () => {
    
    let myIcon = L.icon({
        iconUrl: "/myIocalisation.png",
        iconSize: [30, 30],
    });

   useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                console.log("lat : ", latitude, "lng : ", longitude)
                map.setView([latitude, longitude], 30, {icon: myIcon})
                L.marker([latitude, longitude], {icon: myIcon}).addTo(map)
            },(error) => {
                Swal.fire({ icon: 'error', title: 'Erreur', text: `Erreur de la géolocalisation ${error.message}`, });
            })
        }else{
            Swal.fire({ icon: 'error', title: 'Erreur', text: `La géolocalisation n'est pas prise en charge par ce navigateur`, });
        }
   })

    return null;
}

export default MyLocation;