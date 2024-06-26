'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tutor_Facility_Subject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Tutor_Facility_Subject.init({
        tutorId: DataTypes.INTEGER,
        facilityId: DataTypes.INTEGER,
        subject: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Tutor_Facility_Subject',
    });
    return Tutor_Facility_Subject;
};