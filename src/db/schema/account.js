import db from '../config.js';
import { DataTypes } from 'sequelize';

const Account = db.define('Account', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

export default Account;