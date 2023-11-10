import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '400px',
	height: '400px',
};

const center = {
	lat: 51.505,
	lng: -0.09,
};

function Map(0 {
	return (
		<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
		<GOOGLEMAP
		mapContainerStyle={containerStyle}
		center={center}
		zoom={10}
		>
		{/" You can add markers, polygons, or other map component here */}
			</GoogleMap>
			</LoadScript>
	);
		}

		export default Map;
