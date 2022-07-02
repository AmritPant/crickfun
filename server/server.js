const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "config", "development.env"),
});

const app = require("./app");
const connectDatabase = require("./config/database");

const PORT = process.env.PORT;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}..`);
});
