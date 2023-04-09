const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength:[5, 'Item must be at least 5 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'This must cost at least a penny.'],
        max:[9999, 'TOO DANG EXPENSIVE']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [5, 'Description must be at least 5 characters']
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;