const pkg = require("../package.json");
const Configstore = require("configstore");

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set("apiKey", key);
        return key;
    }

    getKey() {
        const key = this.conf.get("apiKey");
        if (!key) {
            throw new Error("NO API Key Found - https://www.coingecko.com/");
        }        
        return key;
    }

    deleteKey() {
        const key = this.conf.get("apiKey");
        if (!key) {
            throw new Error("NO API Key Found - https://www.coingecko.com/");
        }
        this.conf.delete("apiKey");
        return;
    }
}

module.exports = KeyManager;