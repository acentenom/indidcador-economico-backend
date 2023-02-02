const server = require("./src/app.js");
require('dotenv').config();
const { PORT } = process.env


server.listen(process.env.PORT, () => {
  console.log(`%s listening ${process.env.PORT}` ); // eslint-disable-line no-console
});
