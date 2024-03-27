
import React, { useState } from 'react';

const Appointment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Description:', description);
    };

    return (
        <div>
            <h2>Request for an appointment here</h2>
            <form onSubmit={handleSubmit}>
                <label>Date of Appointment:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />
                
                <label>Time of Appointment:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required /><br />

                
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required /><br />
                
                <button type="Submit">Request Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;