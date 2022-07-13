require("dotenv").config();
const { Pool } = require('pg');

// create an instance
module.exports = {
  pool:
    new Pool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      "max?": 25,
    }),
  poolConnect: function() {
    this.pool.connect()
      .then((res) => console.log("* successfully connected to postgres *"))
      .catch((err) => console.log(err.message))
  }
}



