import React, { useState } from 'react';
import './Attendance.css';
import { Link } from 'react-router-dom';
const Attendance= () => {
  // State to store the attendance status of each student
  const [students, setStudents] = useState([
    { id: 1, name: 'Dharani', department: 'Computer Science', year: 'Third', present: false,location: '10.30AM' },
    { id: 2, name: 'Amrutha', department: 'Electrical Engineering', year: 'Second', present: false,location:'8.30AM' },
    { id: 3, name: 'Akshaya', department: 'Mechanical Engineering', year: 'First', present: false ,location:'9.30AM'},
    { id: 4, name: 'Priya', department: 'Computer Science', year: 'Third', present: false,location: '7.30AM' },
    { id: 5, name: 'Evangline', department: 'Electrical Engineering', year: 'Second', present: false,location:'11.30AM' },
    { id: 6, name: 'Fazliya', department: 'Mechanical Engineering', year: 'First', present: false ,location:'6.30AM'},
    { id: 7, name: 'Mirudulla', department: 'Computer Science', year: 'Third', present: false,location: '10.30AM' },
    { id: 8, name: 'Pavithra', department: 'Electrical Engineering', year: 'Second', present: false,location:'7.30AM' },
    { id: 9, name: 'Surya', department: 'Mechanical Engineering', year: 'First', present: false ,location:'6.30AM'},
  ]);


  // Function to toggle the attendance status of a student
  const toggleAttendance = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

   // Function to generate department and year label
   const getDepartmentYearLabel = (department, year) => {
    return `${department} ${getOrdinalSuffix(year)} Year`;
  };

  // Function to get the ordinal suffix for the year (e.g., 1st, 2nd, 3rd, 4th)
  const getOrdinalSuffix = (year) => {
    if (year === 'First') return '1st';
    if (year === 'Second') return '2nd';
    if (year === 'Third') return '3rd';
    return `${year}th`; // For other cases like Fourth, Fifth, etc.
  };

  const updateLocation = (id, newLocation) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, location: newLocation } : student
    ));
  };

  

  return (
    <div className='Attend'>
      <h2>Student Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            
            <th>Department&Year</th>
            <th>Arrived</th>
            <th>Last updated on</th>
            
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{getDepartmentYearLabel(student.department, student.year)}</td>
              <td>
                <button onClick={() => toggleAttendance(student.id)}>
                  {student.present ? 'Yes' : 'No'}
                </button>
              </td>
              <td>{student.location}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <div >
          <Link to="/" className="signup-button" align="center">Back to home👈</Link>
        </div>
    </div>
  );
};

export default Attendance;
