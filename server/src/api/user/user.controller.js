var logger = require('../../components/logger').createLogger(module)
    , errors = require('../../components/errors');

const user = {
    id : "admin123",
    name: "Super Admin"
};

module.exports.index = function (req, res) {
    if(req.session && !req.session.userid){
        req.session.userid = user.id;
    }
    res.send(user);
    res.end();
};
