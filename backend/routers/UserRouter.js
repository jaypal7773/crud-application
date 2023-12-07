const express = require('express')
const User = require('../models/User');
const UserController = require('../controllers/UserController');
const UserRouter = express.Router()
const app = express();

app.use(express.json())
// console.log(express.json())
const bodyParser = require('body-parser')
UserRouter.use(bodyParser.json())
UserRouter.use(bodyParser.urlencoded({extended:true}))

UserRouter.get( 
    "/:id?",
    (req, res) => {
        const result = new UserController().getData(req.params.id)
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

UserRouter.post(
    "/create",
    (req, res) => {
        const result = new UserController().create(req.body)
        result.then(
            (success) => {
                res.send(success)
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

UserRouter.delete(
    "/delete/:id",
    (req,res) => {
        const result = new UserController().delete(req.params.id)
        result.then(
            (success) => {
                res.send(success)
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

UserRouter.patch(
    "/update/:id",
    (req,res) => {
        const id = req.params.id;
        const result = new UserController().update(id,req.body)
        result.then(
            (success) => {
                res.send(success)
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

module.exports = UserRouter;