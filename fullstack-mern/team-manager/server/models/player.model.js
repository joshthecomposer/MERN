const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Field is required."],
        minlength: [3, "Must be at least 3 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Field is required."],
        minlength: [3, "Must be at least 3 characters"]
    },
    position: {
        type: String,
        required: [true, "Field is required"],
        minlength: [3, "Must be at least 3 characters."]
    },
    isPlaying: {
        type: Number,
        required: [false],
        default: -1
    }
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;