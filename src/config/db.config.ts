import {Sequelize} from 'sequelize';
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging:()=>true  // you can turn off logs in console
});