// Importing necessary modules
import hardhat from 'hardhat';
const { ethers } = hardhat;
import { assert } from 'chai';

describe('HelloWorld', function () {
    let helloWorld;

    // Deploy the contract before each test
    beforeEach(async function () {
        const HelloWorld = await ethers.getContractFactory('HelloWorld');
        helloWorld = await HelloWorld.deploy();
        await helloWorld.deployed();
    });

    // Test case for the sayHello function
    it('Should return "Hello, World!"', async function () {
        const result = await helloWorld.sayHello();
        assert.equal(result, 'Hello, World!');
    });
});
