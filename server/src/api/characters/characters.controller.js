const tileData = [
    {
        img: 'http://dndspeak.com/wp-content/uploads/2018/05/tumblr_p5p3fgdjWG1w6iwbho1_1280.jpg',
        name: 'Dragonborn',
    },
    {
        img: 'http://3.bp.blogspot.com/-tWSZxr8oKHo/Up7znlhojAI/AAAAAAAAAJc/5iWOdCqs6ag/s1600/1000x775_12857_Dwarf_2d_fantasy_dwarf_warrior_picture_image_digital_art.jpg',
        name: 'Dwarf',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        name: 'Image',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        name: 'Image',
    },
    {
        img: 'http://dndspeak.com/wp-content/uploads/2018/05/tumblr_p5p3fgdjWG1w6iwbho1_1280.jpg',
        name: 'Dragonborn',
    },
    {
        img: 'https://media.comicbook.com/2018/03/dndraces-1088003-1280x0.jpeg',
        name: 'Classes',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        name: 'Image',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        name: 'Image',
    },
];

module.exports.index = function (req, res) {
    res.send(tileData);
    res.end();
};
