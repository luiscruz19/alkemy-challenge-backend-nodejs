module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        image: type.STRING,
        creation_date: type.DATE,
        rating: type.INTEGER
    });
}