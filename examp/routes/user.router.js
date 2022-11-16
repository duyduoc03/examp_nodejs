const users = require("../controllers/user.controller");

module.exports = app => {
    const users = require("../controllers/user.controller");

    var router = require("express").Router();

    router.get("/", users.home);

    router.get('/create', users.create);

    router.post('/post', users.postuser);

    router.get('/list',users.findAll);

    router.post("/create",users.create);
    app.use('/users', router);
}