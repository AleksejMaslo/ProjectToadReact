const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true},
    hitDie: {type: String, required: true},
    ability: {type: String, required: true},
    savingThrow: {type: String},
    armorAndWeapon: {type: String},
    avatar: {data: Buffer, type: String }
});

// Export the model
module.exports = mongoose.model('Character', CharacterSchema);