const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOption = {
    origin: '*',
    creadential: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))
app.use('/', router)

// const dbOption = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.MONGODB_URL)
// mongoose.connect(process.env.MONGODB_URL, dbOption)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

// function connectMongoose(){
//     if (mongoose.connection.readyState === 1){
//         return mongoose.connection.asPromise();
//     }
//     return await mongoose.connect(process.env.MONGODB_URL)
// }

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



// MongoClient.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('DB Connected!'))
// .catch(err => console.log(err))