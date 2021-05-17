const myCollection = require("./collection");

const chalk = require("chalk");
// console.log(chalk.blue("Hello World!"));

function describeCollection(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(chalk.bold.cyan(`I have a ${array[index].name} collection.`));
    console.log(chalk.yellow(`I have ${array[index].count} in my collection.`));
    console.log(
      chalk.bgWhite.green(`I collect them because ${array[index].whatILike}.`)
    );
    // console.log(
    //   ` `
    // );
  }
}

describeCollection(myCollection);
