let id = 0;

function createData(name, description, level, range, components, material, ritual, duration, concentration, castingTime, school, heroClass){
    id += 1;
    return {id, name, description, level, range, components, material, ritual, duration, concentration, castingTime, school, heroClass};
}

const spells = [
    createData("Abi-Dalzim's Horrid Wilting", 'You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren\'t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spells damage increases by 1d6 when you reach 5th Level (2d6)', '8th-level', '150 feet', 'V, S, M', 'A bit of sponge.', 'no', 'Instantaneous', 'no', 'Necromancy', 'Sorcerer, Wizard'),
];

module.exports.index = function (req, res) {
    res.send(spells);
    res.end();
};
