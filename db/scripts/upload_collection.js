let { query } = require("../index");
let myCollection = require("../../collection");

const text = `INSERT INTO my_collection(name, count, whatILike) VALUES ($1, $2, $3) RETURNING*;`;

async function populateTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].name,
      array[index].count,
      array[index].whatILike,
    ];
    let res = await query(text, values);
    console.log(res);
  }
}

populateTable(myCollection);
