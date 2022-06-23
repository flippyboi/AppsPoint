const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
    
})


const App = sequelize.define('app', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    platform: { type: DataTypes.STRING },
    version: { type: DataTypes.STRING }
})

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Developer = sequelize.define('developer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

Category.hasMany(App)
App.belongsTo(Category)

Developer.hasMany(App)
App.belongsTo(Developer)

module.exports = {
    User,
    App,
    Category,
    Developer
}






