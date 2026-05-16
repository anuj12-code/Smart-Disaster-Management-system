
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [disasters, setDisasters] = useState([]);
  const [form, setForm] = useState({
    title:"",
    description:"",
    location:"",
    severity:""
  });

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const res = await axios.get("http://localhost:5000/api/disasters");
    setDisasters(res.data);
  };

  const submitHandler = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/disasters", form);
    fetchData();
  };

  return (
    <div style={{padding:"20px", fontFamily:"Arial"}}>
      <h1>Smart Disaster Management System</h1>

      <form onSubmit={submitHandler}>
        <input placeholder="Title"
          onChange={(e)=>setForm({...form,title:e.target.value})} />
        <br /><br />

        <input placeholder="Description"
          onChange={(e)=>setForm({...form,description:e.target.value})} />
        <br /><br />

        <input placeholder="Location"
          onChange={(e)=>setForm({...form,location:e.target.value})} />
        <br /><br />

        <input placeholder="Severity"
          onChange={(e)=>setForm({...form,severity:e.target.value})} />
        <br /><br />

        <button type="submit">Report Disaster</button>
      </form>

      <hr />

      <h2>Reported Disasters</h2>

      {
        disasters.map((d,index)=>(
          <div key={index}
            style={{
              border:"1px solid gray",
              padding:"10px",
              marginBottom:"10px"
            }}>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <p><b>Location:</b> {d.location}</p>
            <p><b>Severity:</b> {d.severity}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
