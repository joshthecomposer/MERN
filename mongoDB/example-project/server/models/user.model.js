const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'name is required'],
            minlength:[6, 'First name must be at least 6 characters.']
        },
        age: {
            type: Number,
            min: [1, 'You must be at least 1 year or older to exist'],
            max:[150,'You too old dawg.']
        }
    },
    {timestamps:true}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;