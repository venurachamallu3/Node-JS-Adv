const express = require("express")
const User = require('../Model/userModel')
const Router = express.Router()
const userController = require("../Controllers/userController")

Router.route('/').get(userController.getAllUsers)
                 .post(userController.createUser)

Router.route('/:id').get(userController.getUser)
                    .delete(userController.deleteUser)
                    .patch(userController.updateUser)

module.exports = Router