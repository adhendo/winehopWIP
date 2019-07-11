import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const containerBasicStyle = {
	maxHeight: '27em',
	width: '100%',
	margin: '3em'
};

const setWidthHeight = {
	justifyContent: 'center'
};

export default function Map() {
	const [viewport, setViewport] = useState({
		latitude: 38.6175,
		longitude: -122.866389,
		width: '99vw',
		height: '58vh',
		zoom: 10
	});

	return (
		<div style={containerBasicStyle}>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoiYWRoZW5kbyIsImEiOiJjanh2bTFkYncwNmVvM21scWZqeHRtZmhwIn0.uAPn-uKGJvPNWrbjCprcEg'
				}
				mapStyle="mapbox://styles/mapbox/satellite-streets-v9"
				onViewportChange={viewport => {
					setViewport(viewport);
				}}
			/>
		</div>
	);
}
