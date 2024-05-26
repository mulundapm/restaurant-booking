import React from 'react'
import MainLayout from '../Layout/MainLayout'
import restaurantImage from '../asset/row-of-serviced-tables-row-in-a-cafe-terrace-2023-11-27-05-24-53-utc.jpeg'
import { Link } from "react-router-dom";

function BookingPage() {
  return (
    <MainLayout>
      <div className='booking'>
          <h1 className='green'>Reserve a table</h1>
          <img src={restaurantImage} alt="Restaurant" />
          <h6>39 Kingsroad, Chicago</h6>
          <form>
            <div className="row">
              <label htmlFor="res-date">Date</label>
              <input type="date" id="res-date"/>
            </div>
            <div className="row">
              <label htmlFor="res-time">Time</label>
              <select name="res-time" id="res-time">
                <option value="1900">19:00</option>
                <option value="1930">19:30</option>
                <option value="2000">20:00</option>
                <option value="2030">20:30</option>
                <option value="2100">21:00</option>
                <option value="2130">21:30</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="res-vistors">Visitors</label>
              <input type="number" id="res-vistors"/>
            </div>
            <div className="row">
              <label htmlFor="occasion">Occasion</label>
              <select name="occasion" id="occasion">
                <option value="Optional">Optional</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="res-name">Name</label>
              <input type="text" id="res-name"/>
            </div>
            <button className='primaryButton'><Link to="/confirmation">Reserve a table</Link></button>
          </form>
      </div>
    </MainLayout>

  )
}

export default BookingPage