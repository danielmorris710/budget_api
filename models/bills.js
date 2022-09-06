const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: String,
    paid: Boolean
});

const Bills = mongoose.model('Bill', billSchema);

module.exports = Bills;