const express = require('express')
const router = express.Router()
const schemas = require('../model/schemas')

router.get('/menuitems', async (req,res) =>{
    const menuItem = schemas.MenuItem

    const menuItemsData = await menuItem.find({}).exec()
    if (menuItemsData) {
        res.send(JSON.stringify(menuItemsData))
    } else
    {res.send(menuItemsData)}
})

module.exports = router