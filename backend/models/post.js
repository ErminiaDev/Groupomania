module.exports = (sequelize, Datatypes) => {
    const Post = sequelize.define("Post", {
        user_id: {
            type: Datatypes.SMALLINT,
            allowNull: false
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false
        },
        text: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    return Post;
};
