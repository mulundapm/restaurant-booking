import React, { createContext , useState} from 'react'
import MainLayout from '../Layout/MainLayout'
import restaurantImage from '../asset/row-of-serviced-tables-row-in-a-cafe-terrace-2023-11-27-05-24-53-utc.jpeg'
import { useNavigate } from 'react-router-dom';

function BookingPage() {

  const[inputs, setInputs] = useState({
    date: "",
    time: "",
    visitors: "",
    occasion: "",
    name: ""
  })

  const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const navigate = useNavigate();

  const handleSubmit=(e) =>{
    e.preventDefault();
    console.log(JSON.stringify(inputs));
    navigate('/confirmation', {state: inputs});
  }

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
                  <option value="" disabled hidden>Select</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
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
                <label name="occasion">Occasion</label>
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
export const InputContext = createContext({})