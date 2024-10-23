const { input } = require('@inquirer/prompts');
const colors = require("colors");
const { isRequired } = require("../utils");
const KeyManager = require("../lib/KeyManager.js");
const key = {
    async set() {
        const keyManager = new KeyManager();
        try {
            const res = await input({
                name: "key",
                message: "Enter API Key ".green + "https://www.coingecko.com/",
                validate: isRequired,
            });
            const key = keyManager.setKey(res);
            if (key) {
                console.log("API Key Set Successfully ->".blue, key);
            }
        } catch (error) {
            console.error('Prompt was interrupted. Exiting...')
        }
    },
    async show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log("Current API Key -> ", key);
            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    },
    async remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log("Key Removed Successfully".blue);

            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    }
}

module.exports = {
    key
}