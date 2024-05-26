import React from 'react'
import MainLayout from '../Layout/MainLayout'
import check from '../asset/Solid check.svg'
import { Link } from 'react-router-dom'

function ConfirmationPage() {
  return (
    <MainLayout>
      <div className="confirmation">
        <h1 className='green'>Confirmation</h1>
        <img src={check} alt="check icon" />
        <h5>Table reserved for userName</h5>
        <div className="res-info">
          <div className="row">
            <label htmlFor="res-date">Date:</label>
            <p id='res-date'>03/12/2024</p>
          </div>
          <div className="row">
            <label htmlFor="res-time">Time:</label>
            <p id='res-date'>20:00</p>
          </div>
          <div className="row">
            <label htmlFor="res-visitor">Visitors:</label>
            <p id='res-date'>8</p>
          </div>
          <div className="row">
            <label htmlFor="occasion">Occasion:</label>
            <p id='occasion'>Birthday</p>
          </div>
        </div>
        <button className='primaryButton'><Link to="/">Back to homepage</Link></button>
      </div>
    </MainLayout>
  )
}

export default ConfirmationPage