let { query } = require("../index");

let sqlStatement = `CREATE TABLE my_collection (
    id SERIAL PRIMARY KEY,
    name TEXT,
    count INTEGER,
    whatILike TEXT
)`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}

createTable();
