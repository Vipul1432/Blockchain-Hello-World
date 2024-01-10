const express = require('express');
const { ethers } = require('hardhat');
const HelloWorldArtifact = require('./artifacts/contracts/HelloWorld.sol/HelloWorld.json');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set up Ethereum provider and contract instance
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`);
const contractAddress = process.env.CONTRACT_ADDRESS;
const helloWorldContract = new ethers.Contract(contractAddress, HelloWorldArtifact.abi, provider);

/**
 * Route for handling GET requests to '/hello'.
 *
 * This route calls the 'sayHello' function from the Ethereum smart contract,
 * captures the result, and responds with a JSON object containing the greeting message.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Asynchronous function that handles the request.
 */
app.get('/hello', async (req, res) => {
    try {
        // Call the sayHello function from contract
        const result = await helloWorldContract.sayHello();

        // Return the result as JSON
        res.json({ message: result });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/**
 * Start the Express server and listen on the specified port.
 *
 * This function initiates the server to listen on the provided port,
 * and logs a message indicating the server is running with the corresponding URL.
 *
 * @param {number} port - The port number on which the server will listen.
 * @param {Function} callback - Optional callback function to be executed once the server is running.
 * @returns {void}
 */
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
