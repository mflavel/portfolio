import React, { useState, useEffect } from "react";
import { FormLabel, Input, Select, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const partyOccasion = ['Birthday', 'Anniversary', 'Other'];

    //test to check object are being submitted
    useEffect(() => {
        console.log('Reservation state changed:', { date, time, guests, occasion });
    }, [date, time, guests, occasion]);

    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { date, time, guests, occasion };
        console.log('Reservation submitted:', payload);
        navigate('/conformation', { state: payload });
    };

    const buttonStyle = {
        backgroundColor: clicked ? '#495E57' : '#F4CE14',
        color: 'black',
        fontWeight: 'bold',
        padding: '8px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', gap: '8px' }}>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input type="date" id="res-date" required value={date} onChange={(e) => setDate(e.target.value)} />
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time" placeholder="Select time" required value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                </Select>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {partyOccasion.map((partyOption) => (
                        <option key={partyOption} value={partyOption}>{partyOption}</option>
                    ))}
                </Select>
                <Button
                    type="submit"
                    style={buttonStyle}
                    onClick={() => {
                        setClicked(true);
                        setTimeout(() => setClicked(false), 200);
                    }}
                >Make Your reservation</Button>
            </form>
        </>
    );
};

export default BookingForm;