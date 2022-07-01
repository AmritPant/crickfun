const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "config", "development.env"),
});
const app = require("./app");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}..`);
});

//  amrit/downloads/  --> linux
//  amrit\downloads  -> window
