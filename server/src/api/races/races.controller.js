let id = 0;

function createData(name, description, image) {
    id += 1;
    return {name, description, image};
}

const races = [
    createData('Dragonborn', 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.', 'dragonbornRace-art')
];

const tileData = [
    {
        img: 'https://pbs.twimg.com/media/Chy8nSnUUAABO-7.jpg',
        name: 'Dragonborn',
    },
    {
        img: 'http://3.bp.blogspot.com/-tWSZxr8oKHo/Up7znlhojAI/AAAAAAAAAJc/5iWOdCqs6ag/s1600/1000x775_12857_Dwarf_2d_fantasy_dwarf_warrior_picture_image_digital_art.jpg',
        name: 'Dwarf',
    },
    {
        img: 'https://pbs.twimg.com/media/DaM90-cVwAEh1V3.jpg',
        name: 'Elf',
    },
    {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/057fc7fc-e26d-4a78-8f0f-26f0a0a42109/dc1ors8-b0eb2dc8-4f45-45a8-a090-f80e58ec1c19.jpg/v1/fill/w_1045,h_764,q_70,strp/chromie_by_plainandplain_dc1ors8-pre.jpg',
        name: 'Gnome',
    },
    {
        img: 'https://images.ctfassets.net/vqe6wlb3f92g/4NHvjMkuTYgYKesOCqAIi/78875c751e7c89832240394fd5f5da87/genericfilename.jpg',
        name: 'Half-Elf',
    },
    {
        img: 'https://i.warosu.org/data/tg/img/0284/85/1385388929462.jpg',
        name: 'Halfling',
    },
    {
        img: 'https://66.media.tumblr.com/496a2f94632cb8c2870e4ca7032f842c/tumblr_owqaueG0V51t9x55so1_1280.jpg',
        name: 'Half-Orc',
    },
    {
        img: 'https://cdn.geekwire.com/wp-content/uploads/2016/05/13131546_10156787870930307_1928409544746084692_o.jpg',
        name: 'Human',
    },
    {
        img: 'https://magic.wizards.com/sites/mtg/files/images/featured/EN_Tibalt_Header.jpg',
        name: 'Tiefling',
    },
];

module.exports.index = function (req, res) {
    res.send(tileData);
    res.end();
};
