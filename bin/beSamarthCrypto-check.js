const { Command } = require("commander");
const program = new Command();
const { check } = require("../commands");

program
    .command("price")
    .description("Check Price of Coins")
    .option("--coin <type>", "Add Specific Coin type Like - bitcion, ethereum, tether")
    .option("--curr <currency>", "Change the Currency Like - INR, USD, Eur, JPY", "INR")
    .action((cmd) => {
        check.price(cmd);
    });

program
    .parse(process.argv);
