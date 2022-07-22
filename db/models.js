const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    tgId: {type: DataTypes.INTEGER, unique: true},
    access: {type: DataTypes.INTEGER, defaultValue: 0},
    dialog: {type: DataTypes.INTEGER, defaultValue: 0},
    balance: {type: DataTypes.INTEGER, defaultValue: 0},
    refLink: {type: DataTypes.STRING},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    sum: {type: DataTypes.INTEGER, defaultValue: 0},
    status: {type: DataTypes.INTEGER, defaultValue: 0},
    item_id: {type: DataTypes.INTEGER, defaultValue: 0},
    item_title: {type: DataTypes.STRING},
    game_id: {type: DataTypes.INTEGER, defaultValue: 0},
    game_title: {type: DataTypes.STRING},
    game_status: {type: DataTypes.INTEGER, defaultValue: 0},
    datems: {type: DataTypes.INTEGER, defaultValue: 0},
    date: {type: DataTypes.STRING},
    customer_id: {type: DataTypes.INTEGER, defaultValue: 0},
    doer_id: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Review = sequelize.define('rewiev', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    sum: {type: DataTypes.INTEGER, defaultValue: 0},
    order_title: {type: DataTypes.STRING},
    order_id: {type: DataTypes.INTEGER, defaultValue: 0},
    rate: {type: DataTypes.INTEGER, defaultValue: 0},
    comment: {type: DataTypes.STRING},
    from: {type: DataTypes.INTEGER, defaultValue: 0},
})

module.exports = User;
