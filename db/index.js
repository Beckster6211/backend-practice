let dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

// const pool = new Pool({
//   user: "xahfwmlvnvwhin",
//   host: "ec2-34-240-75-196.eu-west-1.compute.amazonaws.com",
//   database: "d2em644gtr50nr",
//   password: "08ce515c94fed48ca7ac63fad3b65c7e18fcdc0cbba880c7b757e56636f05561",
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
