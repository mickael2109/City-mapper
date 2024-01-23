import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import './App.css';
import LeafletGeoCoder from "./LeafletGeoCoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function App() {

  const position = [-18.8792, 47.5079]
  // const position = [36.8065, 10.1815]
  
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {/* <LeafletGeoCoder/> */}
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
