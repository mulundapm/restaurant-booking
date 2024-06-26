const express = require('express')
const router = express.Router()
const schemas = require('../model/schemas')
const cloudinary = require('cloudinary').v2

router.get('/menuitems', async (req,res) =>{
    const menuItem = schemas.MenuItem

    const menuItemsData = await menuItem.find({}).exec()
    if (menuItemsData) {
        res.send(JSON.stringify(menuItemsData))
    } else
    {res.send(menuItemsData)}
})


module.exports = router