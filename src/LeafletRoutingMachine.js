import L from 'leaflet'
import { useEffect } from 'react';
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from 'react-leaflet';

const LeafletRoutingMachine = () => {
    const map = useMap()


    useEffect(() => {
        L.Routing.control({
            lineOptions: {
                styles: [
                    {
                        color: 'blue',
                        weight: 4,
                        opacity: 0.7
                    }
                ]
            },
            routerWhileDragging : false,
            geocoder: L.Control.Geocoder.nominatim(),
          })
          .addTo(map);
    }, [])

    return null;
};

export default LeafletRoutingMachine;


// CODE FINAL

// import L from 'leaflet'
// import { useEffect } from 'react';
// import "leaflet-routing-machine"
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
// import { useMap } from 'react-leaflet';

// const LeafletRoutingMachine = () => {
//     const map = useMap()

//     let DefaultIcon = L.icon({
//         iconUrl : "/marche.png",
//         iconSize : [90, 90],
//       });


//     useEffect(() => {
//         var marker1 = L.marker([-18.8792, 47.5079], {icon : DefaultIcon}).addTo(map)
      
//         map.on("click", function(e){
//             L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
//             // console.log(e)
//             L.Routing.control({
//                 waypoints: [ 
//                     L.latLng(-18.8792, 47.5079), 
//                     L.latLng(e.latlng.lat, e.latlng.lng)
//                 ],
//                 lineOptions: {
//                     styles: [
//                         {
//                             color: 'blue',
//                             weight: 4,
//                             opacity: 0.7
//                         }
//                     ]
//                 },
//                 routerWhileDragging : false,
//                 geocoder: L.Control.Geocoder.nominatim(),
//                 addWaypoints : false,
//                 draggableWaypoints: false,
//                 fitSelectedRoutes: true,
//                 showAlternatives: true
//               })
//               .on("routesfound", function(e){
//                 e.routes[0].coordinates.forEach((c, i) => {
//                     console.log(c)
//                     setTimeout(() => {
//                         marker1.setLatLng([c.lat, c.lng])
//                     }, 100 * i)
//                 })
//               })
//               .addTo(map);
//         })
//     }, [])

//     return null;
// };

// export default LeafletRoutingMachine;