const { Sequelize, DataTypes } = require("sequelize");
const {Connect} = require('../db/config')
const {sequelize} = require('../db/config')
// connected the db 
Connect()


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.signUp= require('./signUp')(sequelize,DataTypes)
db.sequelize.sync({ force: false });


// db.user = require("./User")(sequelize, DataTypes);
// db.contact = require("./contactuser")(sequelize, DataTypes);
// db.signIn = require("./signin")(sequelize, DataTypes);
// db.signUp = require("./signUp")(sequelize, DataTypes);
// db.sequelize.sync({ force: false });

module.exports = db;