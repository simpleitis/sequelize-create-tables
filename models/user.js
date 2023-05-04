module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        inviter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        role: {
            type: DataTypes.INTEGER,
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

     User.associate = (models) => {
         User.hasMany(models.Newsies, {
             // Below line ensure that when we delete a post, all the comments associated with the post if also deleted
             onDelete: 'cascade',
             foreignKey: 'user_id',
         })
     }
    return User
}
