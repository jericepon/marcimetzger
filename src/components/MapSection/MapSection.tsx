import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import React from 'react';

const snazzyMapStyle = [
  {
    "featureType": "all",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#ebd9ca" }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#c49d8c" }
    ]
  }
];

const containerStyle = {
  width: '100%',
  height: '500px'
};

const mapOptions = {
  styles: snazzyMapStyle,       
  disableDefaultUI: true,       
  zoomControl: true,            
};

interface SnazzyMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
}

export const SnazzyMapComponent: React.FC<SnazzyMapProps> = ({ apiKey, center, zoom }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  if (loadError) {
    return <div>Error loading maps framework</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={mapOptions}
    >
      {/* 📍 Map Pin Added Here */}
      <MarkerF 
        position={center} 
        animation={window.google?.maps?.Animation?.DROP} // Optional animation
      />
    </GoogleMap>
  ) : (
    <div>Loading Map Layout...</div>
  );
};

export default SnazzyMapComponent;
