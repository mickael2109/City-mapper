// // App.js
// import React, { useState } from 'react';
// import { MapContainer, TileLayer } from "react-leaflet";
// import L from "leaflet";
// import './App.css';
// import LeafletGeoCoder from "./LeafletGeoCoder";

// function App() {
//   const position = [-18.8792, 47.5079];
//   const [departure, setDeparture] = useState("");
//   const [arrival, setArrival] = useState("");

//   const handleShowLocations = () => {
//     // Vous pouvez faire quelque chose ici avec les valeurs de départ et d'arrivée
//     console.log("Departure:", departure);
//     console.log("Arrival:", arrival);
//   };

//   return (
//     <div className="App">
//       <div>
//         <label>Départ:</label>
//         <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
//       </div>
//       <div>
//         <label>Arrivée:</label>
//         <input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
//       </div>
//       <button onClick={handleShowLocations}>Afficher les lieux</button>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//         <LeafletGeoCoder departure={departure} arrival={arrival} />
//       </MapContainer>
//     </div>
//   );
// }

// let DefaultIcon = L.icon({
//   iconUrl: "/marker-icon.png",
//   iconSize: [25, 41],
// });

// L.Marker.prototype.options.icon = DefaultIcon; 

// export default App;



// ... -------------------------------------------------------



import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import './App.css';
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function App() {

  const position = [-18.8792, 47.5079]
  
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <LeafletRoutingMachine/>
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl : "/marker-icon.png",
  iconSize : [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});
L.Marker.prototype.options.icon = DefaultIcon; 

export default App;



// ... -------------------------------------------------------
// CODE FINALE
// import { MapContainer, TileLayer } from "react-leaflet"
// import "leaflet-control-geocoder/dist/Control.Geocoder.css"
// import "leaflet-control-geocoder/dist/Control.Geocoder.js"
// import L from "leaflet"
// import './App.css';
// import LeafletRoutingMachine from "./LeafletRoutingMachine";

// function App() {

//   const position = [-18.8792, 47.5079]
//   // const position = [36.8065, 10.1815]
  
//   return (
//     <div className="App">
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//           {/* <LeafletGeoCoder/> */}
//           <LeafletRoutingMachine/>
//       </MapContainer>
//     </div>
//   );
// }

// let DefaultIcon = L.icon({
//   iconUrl : "/marker-icon.png",
//   iconSize : [25, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40]
// });
// L.Marker.prototype.options.icon = DefaultIcon; 

// export default App;
