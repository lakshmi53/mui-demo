import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import anime from 'animejs';
import 'leaflet/dist/leaflet.css';
import { Threat } from '../types/Threat';

interface MapProps {
  threats: Threat[];
}

const Map: React.FC<MapProps> = ({ threats }) => {
  const map = useMap();

  useEffect(() => {
    threats.forEach((threat) => {
      const { source, target } = threat;

      const line = L.polyline([source, target], {
        color: 'rgba(255, 0, 0, 0.5)',
        weight: 2,
        className: 'animated-line',
      }).addTo(map);

      const animation = anime({
        targets: '.animated-line',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 2000,
        loop: false,
      });

      // Remove the line after the animation completes
      setTimeout(() => {
        map.removeLayer(line);
      }, 3000);

      // Add glow markers
      L.circleMarker(source, {
        color: 'rgba(0, 255, 0, 1)',
        radius: 5,
        className: 'glow-circle',
      }).addTo(map);

      L.circleMarker(target, {
        color: 'rgba(255, 0, 0, 1)',
        radius: 5,
        className: 'glow-circle',
      }).addTo(map);
    });
  }, [threats, map]);

  return null;
};

const MapWrapper: React.FC<MapProps> = ({ threats }) => {
  const [center, setCenter] = useState({lat: 20, lng: 0})

  return (
    <MapContainer      
      center={center} // Center on the world
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%" }}
    >
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Map threats={threats} />
    </MapContainer>
  );
};

export default MapWrapper;
