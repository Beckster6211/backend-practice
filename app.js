const { query } = require("./db/index");
const myCollection = require("./collection");

const text = `SELECT * FROM my_collection`;

async function selectAll(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [array[index]];
    let res = await query(text, values);
    console.log(res);
  }
}

selectAll(myCollection);
