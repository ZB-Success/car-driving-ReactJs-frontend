import { useState } from 'react'
import reactLogo from './assets/Car_Driving.svg'
import './App.css'
import Layout from "./components/Layout";
import TripForm from "./components/TripForm";
import RouteInfo from "./components/RouteInfo";
import MapView from "./components/MapView";
import LogsDisplay from "./components/LogsDisplay";

function App() {
  const [result, setResult] = useState(null);
   return (
    <Layout>
      <TripForm onResult={setResult} />
      {result && (
        <>
          <RouteInfo route={result.route} />
          <MapView geometry={result.route.geometry} />
          <LogsDisplay logs={result.logs} />
        </>
      )}
    </Layout>
  );
}

export default App;









