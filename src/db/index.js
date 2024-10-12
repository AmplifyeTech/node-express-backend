import {db} from './schema/index.js';

const initializeDatabase = async () => {
    console.log('inside initializeDatabase');
    try {
      // * MAIN FUNCTION
      await db.sync({ alter: true }); // force <> alter
      console.log('Database & tables created or updated!-> A');
    } catch (err) {
      console.error('Error syncing with database:', err);
    }
  };
export default initializeDatabase;