import React from 'react'
import MainLayout from '../Layout/MainLayout'

function ContactPage() {
  return (
    <MainLayout>
        <h5>Visit us</h5>
        <p>39 Kingsroad, Chicago</p>
        <h5>Opening hours</h5>
        <p>Monday to Thursday: 11:00 AM - 10:00 PM
Friday and Saturday: 11:00 AM - 11:00 PM
Sunday: 12:00 PM - 9:00 PM</p>
      <form>
        <h5>Contact us</h5>
        <p>Email: littlelemon@restaurant.com</p>
        <p>+1 1234 5678</p>
        <label htmlFor="contact-users">Your name: </label>
        <input type="text" />
        <label htmlFor="contact-email">Your email: </label>
        <input type="text" />
        <label htmlFor="contact-subject">Subject: </label>
        <input type="text" />
        <label htmlFor="contact-message">Message: </label>
        <input type="textarea"/>
      </form>
    </MainLayout>
  )
}

export default ContactPage