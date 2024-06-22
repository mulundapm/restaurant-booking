const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuItemSchema = new Schema({
    name: {type:String},
    category: {type:String},
    description: {type:String},
    img: {type:String},
    price: {type:Number},
})

const bookingSchema = new Schema({
    date: {type:Date},
    time: {type:String},
    visitors: {type:Number},
    occasion: {type:String},
    name: {type:String},
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema, 'menu_item')
const Booking = mongoose.model('Booking', bookingSchema, 'booking_form')
const mySchemas = {'MenuItem': MenuItem, 'Booking': Booking}

module.exports = mySchemas