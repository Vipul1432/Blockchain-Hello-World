const { ethers } = require('hardhat');

async function main() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    const helloWorld = await HelloWorld.deploy();

    console.log('HelloWorld deployed to:', helloWorld.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
