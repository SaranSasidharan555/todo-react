import React, { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import List from './Components/List';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:8000/view");
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="container">
      <Create setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
