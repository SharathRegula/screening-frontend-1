import React,{useState,useEffect} from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [appointments,setAppointments]=useState([]) // Using Usestate hook to store data from api
  const headers = ["Paitents", "Date", "Time", "Doctor", "Injury", "Action"]; // Headers to pass to child component
  //Fetching data from api using useEffect Hook
  useEffect(() => {
   (function(){
    fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
    .then(res=>res.json())
    .then(data=>setAppointments(data.appointments))
   })()
  }, []);
  return (
    <div className="m-10 p-5 border rounded-3xl border-gray-100">
      <h5 className='text-gray-500 text-xl font-bold sm:text-2xl'>Today's Appointment List</h5>
      <div className='mt-5'>

     <Table headers={headers} patients={appointments}/> {/*Passing data to child components as child*/}
      </div>
    </div>
  );
}

export default App;
