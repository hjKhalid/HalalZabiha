module.exports = (sequelize, DataTypes) => {
    const signUp = sequelize.define(
      "signup",
      {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          defaultValue: "khalid",
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          defaultValue: "hussain",

          // allowNull defaults to true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            

        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,

          
        },
        confirmPassword:{
            type:DataTypes.STRING,
            allowNull:false
        }
      },
      {
        // Other model options go here
        tableName: "signup",
        timestamps: true,
      }
    );
  
    return signUp;
  };
  