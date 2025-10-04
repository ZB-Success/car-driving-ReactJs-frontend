import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ geometry }) {
  if (!geometry) {
    return (
      <div className="mt-6 p-4 bg-gray-50 border rounded text-gray-600">
        No route yet. Submit trip details to see the map.
      </div>
    );
  }

  // Convert GeoJSON [lon, lat] → Leaflet [lat, lon]
  const coords = geometry.coordinates.map((c) => [c[1], c[0]]);

  return (
    <div className="mt-6 bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-2 border-b bg-gray-50">
        <h3 className="text-md font-semibold text-gray-700">Route Map</h3>
      </div>
      <MapContainer
        center={coords[0]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Polyline positions={coords} color="blue" weight={4} />

        {/* Start Marker */}
        <Marker position={coords[0]}>
          <Popup>Start Location</Popup>
        </Marker>

        {/* End Marker */}
        <Marker position={coords[coords.length - 1]}>
          <Popup>Dropoff Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;
