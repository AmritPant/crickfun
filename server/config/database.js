const mongoose = require('mongoose');

const connectDatabase = async function () {
  const MONGO_PASSWORD = process.env.MONGODB_ATLAS_PASSWORD;
  const MONGO_USERNAME = process.env.MONGODB_USER;
  const TEMP_MONGO_URI = process.env.MONGODB_ATLAS_URI;

  const MONGO_URI = TEMP_MONGO_URI.replace(
    '<username>',
    MONGO_USERNAME
  ).replace('<password>', MONGO_PASSWORD);

  try {
    await mongoose.connect(MONGO_URI, () => {
      console.log(`Sucessfully connected to mongodb`);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
