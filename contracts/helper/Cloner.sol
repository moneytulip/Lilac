// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/proxy/Clones.sol";

/**
 * @title Cloner helper contract used to create minimal proxies
 */
contract Cloner {
    function clone(address implementation) external returns (address) {
        return Clones.clone(implementation);
    }
}
