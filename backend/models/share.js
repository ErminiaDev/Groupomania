module.exports = (sequelize, Datatypes) => {
    const Share = sequelize.define("Share", {
        user_id: {
            type: Datatypes.SMALLINT,
            allowNull: false
        },
        post_id: {
            type: Datatypes.SMALLINT,
            allowNull: false
        },
        shared: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    });
    return Share;
};