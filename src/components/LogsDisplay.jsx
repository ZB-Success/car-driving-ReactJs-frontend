// function LogsDisplay({ logs }) {
//   if (!logs) {
//     return (
//       <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
//         <p className="text-gray-700">No logs yet. Submit a trip to see logs.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-6">
//       <h3 className="text-lg font-bold">Daily Logs</h3>
//       {logs.map((day, i) => (
//         <div
//           key={i}
//           className="border bg-white rounded-md shadow-sm p-4 mt-4"
//         >
//           <h4 className="font-semibold mb-2">{day.date}</h4>
//           <ul className="space-y-1">
//             {day.entries.map((e, j) => (
//               <li key={j} className="text-sm">
//                 <span className="font-medium">{e.status}</span>: {e.start} →{" "}
//                 {e.end} ({e.minutes} min)
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default LogsDisplay;


function LogsDisplay({ logs }) {
  if (!logs) {
    return (
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-gray-700">
        No logs yet. Submit a trip to see logs.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Daily Logs</h3>

      {logs.map((day, i) => (
        <div
          key={i}
          className="border bg-white rounded-lg shadow-sm p-4 mb-6"
        >
          <h4 className="font-semibold text-blue-700 mb-3">{day.date}</h4>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Start</th>
                <th className="px-3 py-2 text-left">End</th>
                <th className="px-3 py-2 text-left">Minutes</th>
              </tr>
            </thead>
            <tbody>
              {day.entries.map((e, j) => (
                <tr key={j} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium">{e.status}</td>
                  <td className="px-3 py-2">{e.start}</td>
                  <td className="px-3 py-2">{e.end}</td>
                  <td className="px-3 py-2">{e.minutes.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-3 text-sm text-gray-600">
            <span className="font-semibold">Totals:</span>{" "}
            <strong>Driving</strong> = {day.totals.driving.toFixed(1)} min, &nbsp;&nbsp;&nbsp; <strong>Off Duty</strong>  = {" "} 
            {day.totals.off_duty.toFixed(1)} min, &nbsp;&nbsp;&nbsp; <strong>On Duty Not Driving</strong> = {" "}
            {day.totals.on_duty_not_driving.toFixed(1)} min
          </div>
        </div>
      ))}
    </div>
  );
}

export default LogsDisplay;
