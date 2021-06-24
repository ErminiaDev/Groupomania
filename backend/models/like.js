module.exports = (sequelize, Datatypes) => {
    const Like = sequelize.define("Like", {
        user_id: {
            type: Datatypes.SMALLINT,
            allowNull: false
        },
        post_id: {
            type: Datatypes.SMALLINT,
            allowNull: false
        },
        liked: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    });
    return Like;
};