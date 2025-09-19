import React from 'react';
import { useLocation } from 'react-router-dom';

const Conformation = () => {
    const { state } = useLocation();
    const { date, time, guests, occasion } = state || {};

    return (
        <>
            <h2>Reservation Confirmed</h2>
            <p>Thank you — your reservation has been received.</p>
            {state ? (
                <div>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Time:</strong> {time}</p>
                    <p><strong>Guests:</strong> {guests}</p>
                    <p><strong>Occasion:</strong> {occasion}</p>
                </div>
            ) : (
                <p>No reservation details were provided.</p>
            )}
        </>
    );
};

export default Conformation;