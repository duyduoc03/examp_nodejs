module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        FirstName: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        Mobile_Number: {
            type: Sequelize.STRING
        },
        User_Name: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },

    });

    return User;
};