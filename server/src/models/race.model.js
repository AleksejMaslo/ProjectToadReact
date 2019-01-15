const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RaceSchema = new Schema({
    name: {type: String, required: true, max: 100},
    size: {type: String, required: true},
    speedWalking:{type: Number, required: true},
    speedBurrowing: {type: Number},
    img: {data: Buffer, type: String }
});


// Export the model
module.exports = mongoose.model('Race', RaceSchema);