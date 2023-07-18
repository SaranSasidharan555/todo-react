import React, { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';

function App() {
  const [data, setData] = useState([]);
  const [create, setcreate] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/view");
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact=async(id)=>{
    const res = await fetch(`http://localhost:8000/api/edit/${id}`, {
      method: "GET",
    });
  
    if (res.ok) {
      const row = await res.json();
     // console.log(row.data);
      setcreate(row.data);
      console.log(create);
    }
    };

  return (
    <div className="container">
      
  <Create fetchContacts={fetchContacts} /> 
  <Edit fetchContacts={fetchContacts} create={create}/>
      <List data={data} fetchContacts={fetchContacts} UpdateContact={UpdateContact}/>
    </div>
  );
}

export default App;
