import React, { useContext, useState, useEffect} from 'react'
import MainLayout from '../Layout/MainLayout'
import restaurantImage from '../asset/row-of-serviced-tables-row-in-a-cafe-terrace-2023-11-27-05-24-53-utc.jpeg'
import { useNavigate } from 'react-router-dom';
import { InputContext } from '../context/InputContext';
import { fetchAPI } from '../api';


function BookingPage({onSubmit}) {
const {inputs, setInputs}= useContext(InputContext)
const navigate = useNavigate();
const [availableTimes, setAvailableTimes] = useState([]);

  const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, [name]: value}))
}

  const handleSubmit=(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (onSubmit) {
      onSubmit(data);
      
    }
    console.log(JSON.stringify(inputs));
    navigate('/confirmation');
  }

  useEffect(() => {
    if (inputs.date) {
      const date = new Date(inputs.date);
      const times = fetchAPI(date);
      setAvailableTimes(times);
    }
  }, [inputs.date]);

  return (
    <MainLayout>
        <div className='booking'>
            <h1 className='green'>Reserve a table</h1>
            <img src={restaurantImage} alt="Restaurant" />
            <h6>39 Kingsroad, Chicago</h6>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={inputs.date||""}
                  onChange={handleChange}/>
              </div>
              <div className="row">
                <label htmlFor="time">Time</label>
                <select
                  name="time"
                  value={inputs.time}
                  id="time"
                  onChange={handleChange}
                  autoComplete="off">
                {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
                ))}
                </select>
              </div>
              <div className="row">
                <label htmlFor="visitors">Visitors</label>
                <input
                  type="number"
                  name="visitors"
                  id="visitors"
                  value={inputs.visitors}
                  onChange={handleChange}
                  autoComplete="off"/>
              </div>
              <div className="row">
                <label htmlFor="occasion">Occasion</label>
                <select
                  name="occasion"
                  value={inputs.occasion}
                  id="occasion"
                  onChange={handleChange}
                  autoComplete="off">
                  <option value="">Select</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div className="row">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  id="name"
                  onChange={handleChange}
                  autoComplete="off"/>
              </div>
              <button type='submit' className='primaryButton' > Reserve a table</button>
            </form>
        </div>
    </MainLayout>

  )
}

export default BookingPage
