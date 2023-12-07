const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routers/UserRouter');
// const User = require('./models/User');
const cors = require('cors')

const app = express();
app.use(cors())
app.use("/user" , UserRouter)



app.use(express.json())

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://jaypalsinghsonigara01:Py9EqkU74vMYF5u@cluster0.bnthyag.mongodb.net/?retryWrites=true&w=majority",
    {
        dbName:"ishop"
    }
).then(
    () => {
        app.listen(5000, () => {
            console.log(`Server started on port`);
        });
    }
).catch(
    () => {
        console.log("Unable to connect database")
    }
)