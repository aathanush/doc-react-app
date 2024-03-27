import React from 'react';
import './Doctor.css'; // Import the CSS file

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  {id: 3, name: 'Dr. AarthiMohan', specialization: 'General' },
  {id: 4, name: 'Dr. Smith', specialization: 'Child specialist' }
];

const Doctor = () => {
  const handleAppointment = (doctor) => {
    // Handle appointment logic for the selected doctor
    console.log(`Appointment made with ${doctor.name}`);
  };

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
          <button onClick={() => handleAppointment(doctor)}>Make Appointment</button>
        </div>
      ))}
    </div>
  );
}

export default Doctor;