import React, { useContext } from 'react'
import MainLayout from '../Layout/MainLayout'
import check from '../asset/Solid check.svg'
import { Link } from 'react-router-dom'
import { InputContext } from '../context/InputContext'

function ConfirmationPage() {
  const {inputs} = useContext(InputContext)
  return (
    <MainLayout>
      <div className="confirmation">
        <h1 className='green'>Confirmation</h1>
        <img src={check} alt="check icon" />
        <h5>Table reserved for {inputs.name}</h5>
        <div className="res-info">
          <div className="row">
            <h6>Date:</h6>
            <p id='date'>{inputs.date}</p>
          </div>
          <div className="row">
            <h6>Time:</h6>
            <p id='time'>{inputs.time}</p>
          </div>
          <div className="row">
            <h6>Visitors:</h6>
            <p id='visitor'>{inputs.visitors}</p>
          </div>
          <div className="row">
            <h6>Occasion:</h6>
            <p id='occasion'>{inputs.occasion}</p>
          </div>
        </div>
        <button className='primaryButton'><Link to="/">Back to homepage</Link></button>
      </div>
    </MainLayout>
  )
}

export default ConfirmationPage