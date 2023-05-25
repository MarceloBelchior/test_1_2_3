
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
axios.defaults.baseURL = 'http://localhost:3002';



function App() {
  const [searchResults, setSearchResults] = useState([]);
 useEffect(() => {
  const fetchData = async () => {
    try {
      ///get request to the backend
      const response = await axios.get('/api/getnumber');
   
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  if (searchResults.length === 0)
      fetchData();  
 });


  return (
    <div className="App">
       <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{JSON.stringify(result)}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
