import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './pages/BookingPage';
import { InputProvider } from './context/InputContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

test("Able to submit booking when all fields has been filled", ()=> {
  const inputs = {
    date: "26-12-1996",
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

  fireEvent.change(screen.getByLabelText("Date"), {target:{value: inputs.date}})

  fireEvent.click(screen.getByRole("button"));

  expect(handleSubmit).toHaveBeenCalledWith(inputs)
})


