import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

const MAPTILER_ACCESS_TOKEN = 'YrnAmjNNXxIFrQmpWvpy';

function mapTilerProvider (x, y, z, dpr) {
  return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`;
}

function MapComp() {
    return (
        <Map center={[21.0715906,105.7738858]} zoom={17} height={189} provider={mapTilerProvider} dprs={[1, 2]}>
            <Marker anchor={[21.0715906,105.7738858]} payload={2} onClick={({ event, anchor, payload }) => {}} />
        </Map>
    );
}

export default MapComp;
