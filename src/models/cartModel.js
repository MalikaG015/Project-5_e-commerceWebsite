const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User-project-5',
        required: true,
        unique: true
    },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'products-project-5' },
        quantity: { type: Number, required: true, minLen: 1 }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('cart-project-5', cartSchema)