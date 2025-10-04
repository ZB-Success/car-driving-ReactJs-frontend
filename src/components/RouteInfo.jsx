function RouteInfo({ route }) {
  if (!route) return null;

  const hours = Math.floor(route.duration_min / 60);
  const minutes = Math.round(route.duration_min % 60);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Route Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div className="p-4 border rounded bg-gray-50 text-center">
          <p className="text-sm text-gray-500">Distance</p>
          <p className="text-2xl font-bold text-blue-700">
            {route.distance_miles.toFixed(1)} mi
          </p>
        </div>
        <div className="p-4 border rounded bg-gray-50 text-center">
          <p className="text-sm text-gray-500">Estimated Duration</p>
          <p className="text-2xl font-bold text-blue-700">
            {hours}h {minutes}m
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;
