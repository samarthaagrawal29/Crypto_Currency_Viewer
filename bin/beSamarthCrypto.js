#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");
require('dotenv').config({ path: 'C://Users//samar//OneDrive//Desktop//Node CLI Crypto Price Viewer/.env' });


program
    .version(pkg.version)
    .command("key", "Used to Manage API Key - https://nomics.com")
    .command("check", "Check Coin Price Info")
    .parse(process.argv)
