import { useState } from 'react'
import reactLogo from './assets/Car_Driving.svg'
import './style.css'
import Layout from "./components/Layout";
import TripForm from "./components/TripForm";
import RouteInfo from "./components/RouteInfo";
import MapView from "./components/MapView";
import LogsDisplay from "./components/LogsDisplay";

function App() {
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState("planner"); // "planner" or "logs"

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "planner" && (
        <>
          <TripForm onResult={setResult} />
          {result && (
            <>
              <RouteInfo route={result.route} />
              <MapView geometry={result.route.geometry} />
            </>
          )}
        </>
      )}

      {activeTab === "logs" && result && (
        <LogsDisplay logs={result.logs} />
      )}
      {activeTab === "map" && result && (
        <MapView geometry={result.route.geometry} />
      )}

    </Layout>
  );
}

export default App;

