module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Groups', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })

    // "models" has access to all the models inside our project
    Group.associate = (models) => {
        Group.hasMany(models.Newsies, {
            // Below line ensure that when we delete a post, all the comments associated with the post if also deleted
            onDelete: 'cascade',
            foreignKey: 'group_id',
        })
    }
    return Group
}
