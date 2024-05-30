import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './pages/BookingPage';
import { InputProvider } from './context/InputContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

test("Able to submit booking when all fields has been filled", ()=> {
  const inputs = {
    date: "1996-12-26",
    time: "20:30",
    visitors: "2",
    occasion: "birthday",
    name: "Pam"
  }
  const handleSubmit = jest.fn();
  render(
    <BrowserRouter>
      <InputProvider>
        <BookingPage onSubmit={handleSubmit} />
      </InputProvider>
    </BrowserRouter>
  )

  fireEvent.change(screen.getByLabelText(/Date/), {target:{value: inputs.date}})
  fireEvent.change(screen.getByLabelText(/Time/), {target:{value: inputs.time}})
  fireEvent.change(screen.getByLabelText(/Visitors/), {target:{value: inputs.visitors}})
  fireEvent.change(screen.getByLabelText(/Occasion/), {target:{value: inputs.occasion}})
  fireEvent.change(screen.getByLabelText(/Name/), {target:{value: inputs.name}})

  fireEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith(inputs)
})


