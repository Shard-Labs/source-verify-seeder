module.exports = (sequelize: any, Sequelize: any) => {
    const User: any = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return User;
}


