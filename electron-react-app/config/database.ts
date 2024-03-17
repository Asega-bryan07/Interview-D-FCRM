import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('user_db', '', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // in order to log SQL queries
});
