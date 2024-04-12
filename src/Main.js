// Main.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Main.css';

const Main = ({ history }) => {
  // Define state to store search input value
  const [searchInput, setSearchInput] = useState('');
  // Define state to store search result status
  const [searchResult, setSearchResult] = useState('');

  // Define state to store data received from database
  const [data, setData] = useState([
    { Id: 1, Name: 'John Doe', class: '10th', Year: 2022, Department: 'Science', location: 'New York' },
    { Id: 2, Name: 'Jane Smith', class: '11th', Year: 2023, Department: 'Arts', location: 'Los Angeles' },
    // Add more data objects as needed
    { Id: 3, Name: 'Michael Johnson', class: '9th', Year: 2022, Department: 'Mathematics', location: 'Chicago' },
    { Id: 4, Name: 'Emily Brown', class: '12th', Year: 2022, Department: 'English', location: 'Houston' },
  { Id: 5, Name: 'David Lee', class: '10th', Year: 2023, Department: 'History', location: 'San Francisco' },
  { Id: 6, Name: 'Sarah Wilson', class: '11th', Year: 2022, Department: 'Biology', location: 'Miami' },
  { Id: 7, Name: 'Matthew Taylor', class: '12th', Year: 2023, Department: 'Physics', location: 'Seattle' },
  { Id: 8, Name: 'Olivia Martinez', class: '9th', Year: 2022, Department: 'Chemistry', location: 'Boston' },
    // Add more data objects as needed
  ]);

  // Function to filter student details based on ID
  const searchStudent = () => {
    const filter = searchInput.toUpperCase();
    const foundItems = data.filter(item => item.Id.toString().toUpperCase().indexOf(filter) > -1);

    // Update search result status only if searchInput is not empty
    if (searchInput.trim() !== '') {
      setSearchResult(foundItems.length ? '' : 'INVALID');
    }
  };

  // Function to handle keypress event in search input
  const searchKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchStudent();
      return false;
    }
    return true;
  };

  return (
    <div className="container1">
      <h1>Parents Profile</h1>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter ID..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={searchKeyPress}
        />
        <br></br>
        <br></br>
        <button className="search-button" onClick={searchStudent}>Search</button>
      </div>
      {/* Search result */}
      <div className="search-result">{searchResult}</div>
      {/* Student details */}
      <div className="scroll-box">
        {data.map(item => (
          <div key={item.Id} className="studitem" style={{ display: searchResult || item.Id.toString().includes(searchInput) ? '' : 'none' }}>
            <p>
              ID: {searchResult ? '' : item.Id} <br />
              {/* Link to navigate to map details page */}
              <Link to={`/MapDetails`}>Name: {item.Name}</Link> <br />
              Class: {item.class} <br />
              Year: {item.Year} <br />
              Department: {item.Department} <br />
              Current Location: {item.location}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/" className="signup-button" style={{ display: 'block', textAlign: 'center' }}>Back to home👈</Link>
        <Link to="/student" className="signup-button" style={{ display: 'block', textAlign: 'center' }}>👉Student Details</Link>
      </div>
    </div>
  );
};

export default Main;
