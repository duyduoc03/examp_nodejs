const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    res.render('create', {error: ''});
}

exports.home = (req, res) => {
    res.render('index')
}


exports.findAll = (req, res) => {
    const FirstName = req.query.FirstName;
    var check = FirstName ? { FirstName: { [Op.like]: `%${FirstName}%` } } : null;

    User.findAll({ where: check })
        .then(data => {
            console.log(data);
            res.render('list', {users: data || []});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.postuser = (req, res) => {
    if (!req.body.Mobile_Number) {
        res.render('create', {error: "Content can not be empty!"})
        return;
    }
    const user = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Mobile_Number: req.body.Mobile_Number,
        User_Name: req.body.User_Name,
        Password: bcrypt.hashSync(req.body.password, 8)
    }
    User.create(user)
        .then(data => {
            res.render('index')
        })
        .catch(err => {
            res.render('create', {error: err.message || "Error!"})
        });
};

