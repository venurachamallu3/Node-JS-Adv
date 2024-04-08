const express = require("express")
const Tour = require('../Model/TourModel')
const Router = express.Router()
const tourController = require("../Controllers/tourController")

Router.route('/').get(tourController.getAllTours)
                 .post(tourController.createTour)

Router.route('/:id').get(tourController.getTour)
                    .delete(tourController.deleteTour)
                    .patch(tourController.updateTour)

module.exports = Router