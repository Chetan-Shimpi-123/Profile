import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import './App.css';

function App() {
    const [address,setAddress]= useState(" ");
    const [error,setError] =useState(null);
    const [mapData ,setMapData] =useState(null);
    const [isLoading, setIsLoading]=useState(false);

    const fetchMapData =async ()=>{
      if(!address.trim()){
        setError("Address cannotbe empty.");
        return;
      }
      setError(null);
      setIsLoading(true);

      try{
        const response= await fetch('https://api.mapservice.com/locate?address=${encodeURIComponent(address)}');
        if (!response.ok) {
          throw new Error("Failed to fetch map data. Please try again.");
        }
        const data = await response.json();
        setMapData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Map Service</h1>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
        <button onClick={fetchMapData}>Search</button>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {mapData && <div>Map Data: {JSON.stringify(mapData)}</div>}
      </div>
      
  
  );
};

export default App;
