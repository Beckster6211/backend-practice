const { query } = require("../index.js");

let statement = `DROP TABLE IF EXISTS my_collection`;

async function dropTable() {
  let res = await query(statement);
  console.log(res);
}

dropTable();
