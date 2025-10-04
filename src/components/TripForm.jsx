import { useState } from "react";
import axios from "axios";

function TripForm({ onResult }) {
  const [form, setForm] = useState({
    driver: 1,
    start_datetime: "",
    current_location: "",
    pickup_location: "",
    dropoff_location: "",
    cycle_hours_used: 0,
    current_coords: "",
    pickup_coords: "",
    dropoff_coords: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/trip/", form);
      onResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting trip!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <label className="block text-sm font-medium">Start Date & Time</label>
        <input
          type="datetime-local"
          name="start_datetime"
          value={form.start_datetime}
          onChange={handleChange}
          className="mt-1 border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Current Location</label>
        <input
          type="text"
          name="current_location"
          value={form.current_location}
          onChange={handleChange}
          className="mt-1 border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Pickup Location</label>
        <input
          type="text"
          name="pickup_location"
          value={form.pickup_location}
          onChange={handleChange}
          className="mt-1 border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Dropoff Location</label>
        <input
          type="text"
          name="dropoff_location"
          value={form.dropoff_location}
          onChange={handleChange}
          className="mt-1 border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Cycle Hours Used</label>
        <input
          type="number"
          name="cycle_hours_used"
          value={form.cycle_hours_used}
          onChange={handleChange}
          className="mt-1 border p-2 rounded w-full"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Coordinates (lon,lat)</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input
            type="text"
            name="current_coords"
            placeholder="Current"
            value={form.current_coords}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="pickup_coords"
            placeholder="Pickup"
            value={form.pickup_coords}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="dropoff_coords"
            placeholder="Dropoff"
            value={form.dropoff_coords}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Plan Trip
        </button>
      </div>
    </form>
  );
}

export default TripForm;
