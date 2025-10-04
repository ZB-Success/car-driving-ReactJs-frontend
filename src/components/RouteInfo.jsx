function RouteInfo({ route }) {
  if (!route) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-2">Route Information</h2>
      <p><span className="font-medium">Distance:</span> {route.distance_miles.toFixed(1)} miles</p>
      <p><span className="font-medium">Duration:</span> {route.duration_min.toFixed(1)} minutes</p>
    </div>
  );
}

export default RouteInfo;
