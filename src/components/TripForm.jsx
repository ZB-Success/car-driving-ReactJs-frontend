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
  });

  const [message, setMessage] = useState(null); // {type: "success"|"error", text: "..."}

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/trip/", form, {
        headers: { "Content-Type": "application/json" },
      });
      onResult(res.data);
      setMessage({ type: "success", text: "Trip planned successfully!" });
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error submitting trip." });
    }

    // Auto-hide after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <>
      {/* Confirmation Box */}
      {message && (
        <div
          className={`mb-4 p-3 rounded text-white ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message.text}
        </div>
      )}

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
            required
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
            required
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
            required
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
            required
          />
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
    </>
  );
}

export default TripForm;
