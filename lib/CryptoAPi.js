const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = process.env.BASE_URL;
    }

    async getPriceData(cmd) {
        try {
            // Formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: cmd.curr.toUpperCase()
            });

            let url = `${this.baseUrl}/`;
            if (cmd.curr != undefined) {
                url += `?vs_currency=${cmd.curr.toLowerCase()}`;

            }
            if (cmd.coin != undefined) {
                url += `&ids=${cmd.coin.toLowerCase()}`;
            }

            let config = {
                method: 'get',
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'x-cg-api-key': `${this.apiKey}`
                }
            };

            const res = await axios.request(config);
            let output = '';
            if (res && res.data.length > 0) {
                res.data.forEach(coin => {
                    output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.current_price).green
                        } | Rank: ${JSON.stringify(coin.market_cap_rank).blue} \n`;
                });
                return output;
            } else {
                return null;
            }
        } catch (err) {
            handleAPIError(err);
        }
    }
}

function handleAPIError(err) {
    if (err.response.status === 401) {
        throw new Error('Your API key is invalid - Go to https://www.coingecko.com/');
    } else if (err.response.status === 404) {
        throw new Error('Your API is not responding');
    } else {
        throw new Error('Something is not working');
    }
}

module.exports = CryptoAPI;