// jest-dom adds custom jest matchers for asserting on DOM nodes.
// This file contains a lightweight test that verifies the BookingForm's
// fetch-like behavior populates the time select with at least one option.
import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import BookingForm from './pages/BookingForm';

test('fetchData provides at least one available booking time', async () => {
    render(<BookingForm />);

    // wait for options to be populated by the component's fetchData
    await waitFor(() => {
        const options = Array.from(document.querySelectorAll('option'));
        const timeOptions = options.filter(o => /^\d{2}:\d{2}$/.test(o.value));
        expect(timeOptions.length).toBeGreaterThan(0);
    }, { timeout: 1500 });
});
