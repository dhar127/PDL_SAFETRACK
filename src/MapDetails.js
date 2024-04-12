import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from './customIcon.png'; // Import your custom icon image
import { Link } from 'react-router-dom';

const MapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const circleMarker1Ref = useRef(null); // Add circle marker 1 ref
  const circleMarker2Ref = useRef(null); // Add circle marker 2 ref
  const polylineRef = useRef(null); // Add polyline ref
  const liveTrackingMarkerRef = useRef(null); // Add live tracking marker ref
  const mapInitialized = useRef(false);
  const circleMarker3Ref = useRef(null);

  useEffect(() => {
    const mapContainer = mapRef.current;

    if (!mapInitialized.current) {
      const map = L.map(mapContainer).setView([13.1231, 79.9865], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add circle markers
      circleMarker1Ref.current = L.circleMarker([13.4110, 80.1170], {
        radius: 10,
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5
      }).addTo(map);

      circleMarker2Ref.current = L.circleMarker([13.0827, 80.2707], {
        radius: 10,
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5
      }).addTo(map);

      circleMarker3Ref.current = L.circleMarker([13.1635, 80.2001], {
        radius: 13,
        color: 'green',
        fillColor: '#14e337',
        fillOpacity: 0.5
      }).addTo(map);

      // Add polyline
      const latlngs = [
        [13.4110, 80.1170], // Circle marker 1
        [13.0827, 80.2707] , // Circle marker 2
        [13.1635,80.2001]
      ];
      polylineRef.current = L.polyline(latlngs, { color: 'red' }).addTo(map);

      // Add tooltips
      circleMarker1Ref.current.bindTooltip('Gummidipoondi', { permanent: true }).openTooltip();
      circleMarker2Ref.current.bindTooltip('Chennai', { permanent: true }).openTooltip();
      circleMarker3Ref.current.bindTooltip('<strong>BUS 163</strong> is currently at <strong>Puzhal Jail</strong> - 45 mins more to reach your location', { permanent: true }).openTooltip();

      mapInitialized.current = true;
    }

    const customIcon = L.icon({
      iconUrl: iconUrl, // Path to your custom icon image
      iconSize: [308, 308], // Size of the icon
      iconAnchor: [19, 38], // Anchor point of the icon
      popupAnchor: [0, -38] // Popup anchor point
    });

    const updatePosition = (position) => {
      const { latitude, longitude } = position.coords;

      if (mapRef.current && mapRef.current.leafletElement) {
        const map = mapRef.current.leafletElement;

        if (!markerRef.current) {
          markerRef.current = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
        } else {
          markerRef.current.setLatLng([latitude, longitude]);
        }

        map.setView([latitude, longitude], map.getZoom());
        console.log(`Marker updated: Lat: ${latitude}, Lng: ${longitude}`);

        // Add live tracking marker with bus number
        const busNumber = 'BUS123'; // Example bus number
        const liveTrackingIcon = L.divIcon({
          className: 'live-tracking-icon',
          html: `<div>${busNumber}</div>`,
          iconAnchor: [12, 12]
        });
        if (!liveTrackingMarkerRef.current) {
          liveTrackingMarkerRef.current = L.marker([latitude, longitude], { icon: liveTrackingIcon }).addTo(map);
        } else {
          liveTrackingMarkerRef.current.setLatLng([latitude, longitude]);
        }
      }
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    // Get initial position
    navigator.geolocation.getCurrentPosition(updatePosition, error);

    // Update position when it changes
    const watchId = navigator.geolocation.watchPosition(updatePosition, error);

    // Clean up function to remove the watch position listener
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div>
      <div id="map1" ref={mapRef} style={{ width: '100%', height: '90vh' }} />
      <div>
        <Link to="/" className="signup-button" style={{ display: 'block', textAlign: 'center' }}>Back to home👈</Link>
      </div>
    </div>
  );
};

export default MapComponent;
