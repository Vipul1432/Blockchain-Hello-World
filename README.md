# Blockchain-Hello-World
Express.js server interacting with an Ethereum smart contract, fetching a 'Hello, World!' greeting from the blockchain. Configured for Infura-supported Ethereum network. Educational project showcasing web server and blockchain interaction.

# Ethereum HelloWorld Smart Contract Project

This project demonstrates a simple Ethereum smart contract that prints "Hello, World!" on the blockchain. Additionally, it includes a Node.js server to create a simple API endpoint that interacts with the deployed smart contract.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Hardhat Ethereum development environment
- Infura API key
- MetaMask or other Ethereum wallet for deploying and interacting with smart contracts

### Installation

```bash
# Install dependencies
npm install

# Create an .env file in the project root and add the following:
INFURA_API_KEY=your_infura_api_key
PRIVATE_KEY=your_private_key

# Compile the smart contract
npx hardhat compile

# Deploy the smart contract to the Goerli testnet
npx hardhat run scripts/deploy.js --network goerli

# Start the Node.js server
node index.js
```

## Usage
Visit http://localhost:3000/hello in your web browser or make a GET request using a tool like curl or Postman to interact with the deployed smart contract and see the "Hello, World!" message.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details


```bash

Replace `your-username`, `your_infura_api_key`, and `your_private_key` with your actual information. Keep in mind that Markdown doesn`t support actual execution of commands, so users will need to run these commands in their terminal.

```
