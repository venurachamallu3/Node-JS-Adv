const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, "A Tour must have Tour name"],
        unique: true
    },
    "duration": {
        type: Number,
        required: [true, "A Tour must have duration time"]
    },
    "price": {
        type: Number,
        required: [true, "A Tour must have Amount of Rupees"]
    },
    "difficulty": {
        type: String,
        default: "easy"
    },
    "rating": {
        type: Number,
        default: 4.3
    }
});

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
