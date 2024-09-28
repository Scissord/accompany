import { FC } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Настройки карты
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Координаты центра карты
const center = {
  lat: 43.238949, // Широта
  lng: 76.889709, // Долгота
};

// Координаты для маркера
const markerPosition = {
  lat: 43.238949, // Широта маркера
  lng: 76.889709, // Долгота маркера
};

const Map: FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBDpqU8ar_gvAzdg5nUuHjllKV85d6Z-F4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
