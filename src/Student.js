import React,{useState} from 'react';
import './Student.css'
import { FaSearchLocation } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Student = () => {
    
     const [busDetails, setBusDetails] = useState([
    {
        
      busNumber: 'ABC123',
      busDriverName: 'John Doe',
      driverPhoneNo: '123-456-7890',
      route: 'Route 1 ',
      
      currentLocation: 'Unknown'
    },
    {
      busNumber: 'XYZ456',
      busDriverName: 'Jane Smith',
      driverPhoneNo: '987-654-3210',
      route: 'Route 2 ',
      currentLocation: 'Unknown'
    },
    {
        busNumber: 'ABC123',
        busDriverName: 'John Doe',
        driverPhoneNo: '123-456-7890',
        route: 'Route 3 ',
        currentLocation: 'Unknown'
      },
      {
        busNumber: 'ABC123',
        busDriverName: 'John Doe',
        driverPhoneNo: '123-456-7890',
        route: 'Route 4 ',
        currentLocation: 'Unknown'
      },
    // Add more bus details as needed
  ]);
  

  return (
    <div className="container4">
      <h1>Student Profile</h1>
      
      <h6><TbBus /> Bus Details</h6>
      <div className='search'>
      <FaSearchLocation />
      <input type="text" id="searchInput" placeholder="Search..." />
      <br></br>
      <br></br>
      <br></br>
      </div>
     
     
      <div className="scrollbox1">
        {busDetails.map((bus, index) => (
          <div className="busDetails1" key={index}>
            
            <p>Bus Number: {bus.busNumber}</p>
            <p>Driver Name: {bus.busDriverName}</p>
            <p>Driver Phone No: {bus.driverPhoneNo}</p>
            <p>Route : {bus.route}</p>
            <p>Current Location: {bus.currentLocation}</p>
          </div>
        ))}
         <div>
        <Link to="/" className="signup-button" style={{ display: 'block', textAlign: 'center' }}>Back to home👈</Link>
        <Link to="/Main" className="signup-button" style={{ display: 'block', textAlign: 'center' }}>👉Parent Details</Link>
      </div>
      </div>
      </div>
    
  );



                
            
          
        
  
}

export default Student;
