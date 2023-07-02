import { useState } from 'react';
import './App.css';
import Create from './Components/Create';
import List from './Components/List';

function App() {
  const [data,setData] = useState([])
  return (
    <div className="container">
      <Create setData={setData}/>
      <List data={data}/>
    </div> 
  );
}

export default App;
