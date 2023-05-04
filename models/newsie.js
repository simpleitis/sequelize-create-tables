module.exports = (sequelize, DataTypes) => {
    const Newsie = sequelize.define('Newsies', {
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sub_category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sort_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })

    // // "models" has access to all the models inside our project
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments, {
    //         // Below line ensure that when we delete a post, all the comments associated with the post if also deleted
    //         onDelete: 'cascade',
    //     })

    //     Posts.hasMany(models.Likes, {
    //         onDelete: 'cascade',
    //     })
    // }
    return Newsie
}
