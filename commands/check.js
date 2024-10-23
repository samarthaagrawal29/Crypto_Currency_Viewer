const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require("../lib/CryptoAPi")

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd);
            if (priceOutputData) {
                console.log(priceOutputData);
            } else {
                console.log("NO Data Found - https://www.coingecko.com/".red);
            }
        } catch (err) {
            console.error("Somthing Went Wrong, Try After Sometime!!".red);
        }
    }
};

module.exports = {
    check
};