import { useEffect } from 'react';
import L from "leaflet";
import { useMap } from 'react-leaflet';

const LeafletGeoCoder = () => {
    const map = useMap();

    useEffect(() => {
        L.Control.geocoder({
            defaultMarkGeocode: false
        })
        .on('markgeocode', function(e) {
            console.log(e);
            var latlng = e.geocode.center;
            L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
            map.fitBounds(e.geocode.bbox);
        })
        .addTo(map);
    }, [map]);

    return null;
};

export default LeafletGeoCoder;