// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/// @notice Minimal proxy library
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @dev an interface to interact with the Payment Splitter base contract
interface IPaymentSplitter {
    function initializePaymentSplitter(
        address[] memory Payees_,
        uint256[] memory Shares_
    ) external;
}

contract PaymentFactory is Ownable, ReentrancyGuard {
    /// @notice cheaply clone contract functionality in an immutable way
    using Clones for address;

    /// @notice Base Payment Splitter address
    address public PaymentSplitterBase;

    /// @notice Address of protocol fee wallet;
    address public protocolAddress;

    /// @notice Protocol fee to charge
    uint256 public protocolFee;

    /// @notice PaymentSplitter contracts mapped by owner address
    mapping(address => address[]) public clonesPaymentSplitter;

    /// @notice Cloning events definition
    event NewPaymentSplitterClone(
        address indexed _newClone,
        address indexed _owner
    );

    receive() external payable {
        revert("Cryptogate: Please use Mint or Admin calls");
    }

    fallback() external payable {
        revert("Cryptogate: Please use Mint or Admin calls");
    }

    /**
     * @notice constructor
     * @param BasePaymentSplitter address of the Base Payment Splitter contract to be cloned
     **/
    constructor(
        address BasePaymentSplitter,
        uint256 _protocolFee,
        address _protocolAddress
    ) {
        PaymentSplitterBase = BasePaymentSplitter;
        protocolFee = _protocolFee;
        protocolAddress = _protocolAddress;
    }

    /**
     * @notice initializing the cloned contract
     * @param payees_ the payees addresses that will receive minting funds
     * @param shares_ share per payee
     **/
    function createPaymentClone(
        address[] memory payees_,
        uint256[] memory shares_
    ) external payable nonReentrant {
        require(msg.value == protocolFee, "ether sent mismatch");

        checkAndCollectFees(msg.value);

        address identicalChild = PaymentSplitterBase.clone();

        clonesPaymentSplitter[msg.sender].push(identicalChild);

        IPaymentSplitter(identicalChild).initializePaymentSplitter(
            payees_,
            shares_
        );

        emit NewPaymentSplitterClone(identicalChild, msg.sender);
    }

    /**
     * @notice function returns cloned Payment Splitter contracts by owner address
     * @param _owner owner address
     **/
    function getClonesPaymentSplitter(address _owner)
        external
        view
        returns (address[] memory)
    {
        return clonesPaymentSplitter[_owner];
    }

    /**
     * @notice Checks and collects protocol fees after cloning
     * @param amount protocol fee
     */
    function checkAndCollectFees(uint256 amount) internal {
        require(amount == protocolFee, "error AMOUNT NOT SAME AS FEE");
        /// @notice forward fund to Splitter contract using CALL to avoid 2300 stipend limit
        (bool success, ) = protocolAddress.call{value: amount}("");
        require(success, "Cryptogate: Failed to forward funds");
    }

    /**
     * @notice Owner can change protocol fee
     * @param amount amount of new protocol fee
     */
    function changeProtocolFee(uint256 amount) external onlyOwner {
        require(
            amount != protocolFee,
            "Cryptogate: New Protocol fee cannot be the same"
        );
        protocolFee = amount;
    }

    /**
     * @notice Owner can change protocol address
     * @param addr address of new protocol
     */
    function changeProtocolAddress(address addr) external onlyOwner {
        require(
            addr != address(0),
            "Cryptogate: New Protocol cannot be address 0"
        );
        require(
            addr != protocolAddress,
            "Cryptogate: New Protocol cannot be address 0"
        );
        protocolAddress = addr;
    }

    /**
     * @notice Get Protocol Fees
     */
    function getProtocolFees() public view returns (uint256) {
        return protocolFee;
    }

    /**
     * @notice Get Protocol Address
     */
    function getProtocolAddress() public view returns (address) {
        return protocolAddress;
    }
}
