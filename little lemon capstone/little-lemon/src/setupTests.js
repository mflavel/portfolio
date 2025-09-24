// jest-dom adds custom jest matchers for asserting on DOM nodes.
// This file contains a lightweight test that verifies the BookingForm's
// fetch-like behavior populates the time select with at least one option.
import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('shows email validation error when invalid email is entered', async () => {
    render(<BookingForm />);

    // find the email input by placeholder and type an invalid email
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    await userEvent.click(emailInput);
    await userEvent.keyboard('not-an-email');

    // move focus away to trigger blur validation
    await userEvent.tab();

    // the Yup schema uses the message 'Invalid email' for invalid addresses
    await waitFor(() => {
        expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
});
