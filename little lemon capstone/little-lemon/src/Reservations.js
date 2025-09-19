import React from "react";
import Nav from "./Nav";

const Reservation = () => {
    return (
        <>
            <form style={{ display: 'grid', maxWidth: '400px', gap: '8px' }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                    style={{ backgroundColor: '#F4CE14', color: 'black', fontWeight: 'bold', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                />
            </form>
        </>
    );
};

export default Reservation;