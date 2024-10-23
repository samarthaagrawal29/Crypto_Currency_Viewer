#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");
require('dotenv').config({ path: 'Make Sure to enter Path of env' });


program
    .version(pkg.version)
    .command("key", "Used to Manage API Key - https://www.coingecko.com/")
    .command("check", "Check Coin Price Info")
    .parse(process.argv)
