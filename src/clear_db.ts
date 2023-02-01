import mongoose from "mongoose";
import config from "./config";

const clearDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.dbConnectLink);

    await mongoose.connection.db.dropDatabase()
};

clearDB()
  .then(() => {
    console.log("db cleared");
    process.exit(0);
  })
  .catch(() => {
    console.log("db !!! NOT !!! cleared");
    process.exit(0);
  });
