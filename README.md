
# Project Title

> A brief description of what your project does and who it's for.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Installation

### Prerequisites

- Node.js (version 12.x or higher)
- npm (Node Package Manager) or yarn
- Need a API key from CoinGecko - https://www.coingecko.com/en/developers/dashboard
- Make sure to enter path of env file in beSamarthCrypto.js in line no - 5

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/samarthaagrawal29/Crypto_Currency_Viewer.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Crypto_Currency_Viewer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   OR if you're using `yarn`:
   ```bash
   yarn install
   ```
4. Create a new file named `.env` in the root directory and add these
    ```
    API_KEY = apiKey
    BASE_URL = https://api.coingecko.com/api/v3/coins/markets
    ```
5. Then we have to set key in the Application using
    ```
    crypto key set - enter
    then enter the following API key by CoinGecko
    ```
---

## Usage

### Running the project

To start the project, run:

```bash
npm link
npm crypto
```
OR if you're using `yarn`:
```bash
yarn link
crypto
```

### Scripts

- **First Link the bin file to the global**: `npm link`
- **Start the application**: `crypto`

---

## Cammond related to key setup Application
- This is a command line interface application which is used to veiw crypto currency rate
- **crypto key -h**: This command will show the help option
- **crypto key set**: This command is used to setup the key in the application which is given by CoinGecko.
- **crypto key show**: This command is used to check the existing key present in the application for the API.
- **crypto key remove**: This command is used to remove the existing API key in the application.

## Coomand to use Application
- This is a command line interface application which is used to veiw crypto currency rate
- **crypto check -h**: This command will show the help option.
- **crypto check price**: This command is used to show the prices of all coins with the name and rank in crypto market.
- **crypto check price --curr INR**: This command is used to show the prices with specific currency - you can change the currency as well- like - eur, usd, jpy and more.
- **crypto check price --coin bitcoin**: This command is used to show the prices of specific coin - you can check for other coin as well- like - ethereum, solana and more - NOTE use full name only.
- **crypto check price --coin bitcoin --curr jpy**: This command is used to show the price specific coin and also show the price in the currency mentioned.
---

## Contributing

Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.


## Contact

Created by [Samartha Agrawal](https://github.com/samarthaagrawal29) - feel free to reach out!
Credit goes to - CoinGecko - https://docs.coingecko.com/reference
