// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Pronkey is ERC20 {
    constructor(address account, uint256 initialSupply)
        ERC20("Pronkey", "PRNKY")
    {
        _mint(account, initialSupply);
    }
}
