// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @notice access control
import "@openzeppelin/contracts/access/Ownable.sol";

/// @notice security
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @notice payment splitter
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

/// @notice libraries
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title CryptogateWei
 * @notice On-chain payment gateway
 * @author Cryptoware
**/
contract CryptogateWei is 
    PaymentSplitter, 
    ReentrancyGuard, 
    Ownable 
{
    /// @notice using safe math for uints
    using SafeMath for uint256;

    /// @notice using a counter to increment next Id to be minted
    using Counters for Counters.Counter;

    struct PaymentOrders {
        address payer;
        uint256 price;
        uint64 paymentId;
        uint64 itemSKU;
        uint64 start_time;
    }

}