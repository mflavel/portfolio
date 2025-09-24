import React, { useState, useEffect } from "react";
import { FormLabel, Input, Select, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import '../Css/bookingForm.css';


const BookingForm = () => {
    // helper to get today's date in YYYY-MM-DD for the date input
    const getTodaysDate = () => {
        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const [date, setDate] = useState(getTodaysDate());
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // availableTimes is loaded via fetchData so it can vary by date
    const [availableTimes, setAvailableTimes] = useState([]);
    const partyOccasion = ['Birthday', 'Anniversary', 'Other'];

    // Simulated fetch function that returns available times for a given date.
    // Replace this with a real API call (fetch/axios) as needed.
    const fetchData = (selectedDate) => {
        const baseTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        return new Promise((resolve) => {
            // simple deterministic filter based on day-of-month so results vary by date
            const dateToUse = selectedDate || getTodaysDate();
            const day = new Date(dateToUse).getDate();
            const filtered = baseTimes.filter((_, i) => ((i + day) % 2) === 0);
            // ensure there is at least one time available
            const result = filtered.length ? filtered : baseTimes;
            setTimeout(() => resolve(result), 200);
        });
    };

    // when the component mounts, fetch available times for today's date
    useEffect(() => {
        let mounted = true;
        fetchData(date).then((times) => {
            if (mounted) setAvailableTimes(times);
        });
        return () => { mounted = false; };
    }, []);

    // handle date changes by fetching times for the selected date
    const handleDateChange = (e) => {
        const val = e.target.value;
        setDate(val);
        // fetch new times for this date
        fetchData(val).then((times) => {
            setAvailableTimes(times);
            setTime('');
        });
    };


    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingPayload, setPendingPayload] = useState(null);

    //form submission function
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { date, time, guests, occasion, name, email, phone };
        // open custom confirmation dialog and hold payload until confirmed
        setPendingPayload(payload);
        setShowConfirm(true);
    };


    //confermation dialog functions for confirming
    const confirmReservation = () => {
        if (!pendingPayload) return;
        console.log('Reservation submitted:', pendingPayload);
        setShowConfirm(false);
        navigate('/conformation', { state: pendingPayload });
    };

    //confermation dialog functions for cancelling
    const cancelReservation = () => {
        setPendingPayload(null);
        setShowConfirm(false);
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
        <div className="booking-container" >
            <h1 style={{ textAlign: 'center', margin: '1rem 0', fontSize: '20px' }}><b>Reserve a Table</b></h1>
            <form className="booking-page" onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', gap: '8px' }}>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input className="input-booking" type="date" id="res-date" required value={date} onChange={handleDateChange} />
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select className="input-booking" id="res-time" placeholder="Select time" required value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                </Select>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input className="input-booking" type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select className="input-booking" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {partyOccasion.map((partyOption) => (
                        <option key={partyOption} value={partyOption}>{partyOption}</option>
                    ))}
                </Select>
                <FormLabel htmlFor="Name">Name</FormLabel>
                <Input className="input-booking" type="text" id="Name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                <FormLabel htmlFor="Email">Email</FormLabel>
                <Input className="input-booking" type="email" id="Email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormLabel htmlFor="Phone">Phone Number</FormLabel>
                <Input className="input-booking" type="tel" id="Phone" placeholder="Your Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Button
                    type="submit"
                    style={buttonStyle}
                    onClick={() => {
                        setClicked(true);
                        setTimeout(() => setClicked(false), 200);
                    }}
                >Make Your reservation</Button>
            </form>

            {/* conformation pop up */}
            {showConfirm && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '1.25rem',
                        borderRadius: '8px',
                        width: '90%',
                        maxWidth: '420px',
                        boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
                    }}>
                        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Confirm Reservation</h2>
                        <p style={{ marginBottom: '1rem' }}>Are you sure you want to make this reservation?</p>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <button type="button" onClick={cancelReservation} style={{ padding: '0.5rem 0.75rem' }}>Cancel</button>
                            <button type="button" onClick={confirmReservation} style={{ padding: '0.5rem 0.75rem', background: '#495E57', color: '#fff', border: 'none', borderRadius: '4px' }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingForm;