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
            <h6>Date:</h6>
            <p id='date'>03/12/2024</p>
          </div>
          <div className="row">
            <h6>Time:</h6>
            <p id='time'>20:00</p>
          </div>
          <div className="row">
            <h6>Visitors:</h6>
            <p id='visitor'>8</p>
          </div>
          <div className="row">
            <h6>Occasion:</h6>
            <p id='occasion'>Birthday</p>
          </div>
        </div>
        <button className='primaryButton'><Link to="/">Back to homepage</Link></button>
      </div>
    </MainLayout>
  )
}

export default ConfirmationPage