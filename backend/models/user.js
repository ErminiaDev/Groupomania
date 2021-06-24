module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("User", {
        first_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        last_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    return User;
};