import React, { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';

function App() {
  const [data, setData] = useState([]);
  const [create, setcreate] = useState([]);
  const [showcreate, setshowcreate] = useState(true);
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
      setshowcreate(false);
   console.log(showcreate);
      setcreate(row.data);
      console.log(create);
    }
    };

  return (
    <div className="container">

      
           {showcreate ?   <Create fetchContacts={fetchContacts} /> :  <Edit setshowcreate={setshowcreate} fetchContacts={fetchContacts} create={create}/>}

 
      <List data={data} fetchContacts={fetchContacts} UpdateContact={UpdateContact}/>
    </div>
  );
}

export default App;
