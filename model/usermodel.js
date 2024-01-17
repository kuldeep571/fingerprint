const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fingerprint: { 
        type: String,
        required: true, 
    } 
}, {timestamps: true});

module.exports = mongoose.model('fingerprint', userSchema);