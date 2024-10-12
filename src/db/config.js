import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


  const dbCredDev = {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "burewards",
    dialect: process.env.DB_DIALECT || 'postgres',

  }
  const db = new Sequelize(dbCredDev);


//   const dbCred = {
//     host: process.env.DB_HOST || "localhost",
//     port: parseInt(process.env.DB_PORT || "5432"),
//     user: process.env.DB_USER || 'postgres',
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_NAME || "flake",
//     dialect: process.env.DB_DIALECT as Dialect || 'postgres',
//     ssl : {
//       require: true,
//       rejectUnauthorized: false
//     }
  
//   };

// const db = new Sequelize(dbCred.database, dbCred.user, dbCred.password, {
//   host: dbCred.host,
//   dialect: dbCred.dialect,
//   port: dbCred.port,
//   dialectOptions: {
//     ssl: {
//       require: dbCred.ssl.require,
//       rejectUnauthorized: dbCred.ssl.rejectUnauthorized,
//       // If you have a specific CA certificate to use, you can include it here
//       // ca: fs.readFileSync(path.resolve(__dirname, 'path_to_your_ca_cert.crt')).toString()
//     }
//   }
// });





db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;