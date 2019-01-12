const tileData = [
    {
        img: 'https://i.pinimg.com/originals/6d/4c/e6/6d4ce6955f599c6cb4eae7b673c5a856.jpg',
        name: 'Barbarian',
    },
    {
        img: 'https://i.pinimg.com/originals/78/3e/0d/783e0d278a724af17fed4faa5c6261a1.jpg',
        name: 'Bard',
    },
    {
        img: 'https://i.pinimg.com/originals/76/71/b6/7671b64c56e5132b34f6ed1138a7f4b8.jpg',
        name: 'Cleric',
    },
    {
        img: 'https://i.pinimg.com/originals/b8/75/a3/b875a38cbe91ade78c42a46caa5545d6.jpg',
        name: 'Druid',
    },
    {
        img: 'https://i.pinimg.com/originals/c6/26/a3/c626a36d0bf2e42e2b46f3ac29a53333.png',
        name: 'Fighter',
    },
    {
        img: 'https://static.wixstatic.com/media/759eb4_68ec77b59fd943588772f4c3fcceb7b7.jpg',
        name: 'Monk',
    },
    {
        img: 'https://wallpapertag.com/wallpaper/full/9/5/e/134084-best-paladin-wallpaper-1920x1080.jpg',
        name: 'Paladin',
    },
    {
        img: 'https://i.pinimg.com/originals/9c/a5/c2/9ca5c2142d658502fd00fb4178668189.jpg',
        name: 'Ranger',
    },
    {
        img: 'https://i.pinimg.com/originals/81/1a/7a/811a7aa0c7621053c62ab5fa17a1ec8d.png',
        name: 'Rogue',
    },
    {
        img: 'https://www.this-is-cool.co.uk/wp-content/gallery/izzy-medrano/the-fantasy-art-of-izzy-medrano-3.jpg',
        name: 'Sorcerer',
    },
    {
        img: 'https://pbs.twimg.com/media/DQfmzFUVwAERu1V.jpg',
        name: 'Warlock',
    },
    {
        img: 'https://i.pinimg.com/originals/79/22/24/7922243a0fa21bac863210d6ff80a302.jpg',
        name: 'Wizard',
    },
];

module.exports.index = function (req, res) {
    res.send(tileData);
    res.end();
};
