let id = 0;

function createData(name, type, description) {
    id += 1;
    return {id, name, type, description};
}

const items = [
    createData('Adamantine Armor', 'Armor', 'This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you\'re wearing it, any critical hit against you becomes a normal hit.\n'),
    createData('Animated Shield', 'Armor', 'While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.\n' +
        '\n' +
        'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.'),
    createData('Ring of Evasion', 'Ring', 'This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.'),
];

module.exports.index = function (req, res) {
    res.send(items);
    res.end();
};
