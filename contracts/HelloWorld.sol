// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title HelloWorld
 * @dev A simple smart contract that provides a function to return a greeting message.
 */
contract HelloWorld {
    function sayHello() external pure returns (string memory) {
        return "Hello, World!";
    }
}
