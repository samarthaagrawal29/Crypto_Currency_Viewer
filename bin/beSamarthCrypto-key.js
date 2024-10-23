const { Command } = require("commander");
const program = new Command();
const {key} = require("../commands");

program
    .command("set")
    .description("Used to Manage API Key - https://www.coingecko.com/")
    .action(key.set)

program
    .command("show")
    .description("This Command is used to show all the currencies availbale.")
    .action(key.show)

program
    .command("remove")
    .description("This Command is used to remove the currency which is availbale.")
    .action(key.remove)

program
    .parse(process.argv);