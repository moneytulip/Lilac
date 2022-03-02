// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./interfaces/ISwap.sol";
import "./pool-weighted/interfaces/IVault.sol";

/**
 * @title MultiSwap
 * @notice This contract abstracts the process of swapping a weighted pool followed by a saddle pool or vice versa
 */
contract MultiSwap {
    IVault public vault;
    ISwap public swap;

    constructor(address _vault, address _swap) {
        vault = IVault(_vault);
        swap = ISwap(_swap);
    }

    function poolToSwap(
        // weighted pool swap
        IVault.SingleSwap memory singleSwap,
        IVault.FundManagement memory funds,
        uint256 limit,

        // saddle swap
        uint8 tokenIndexFrom,
        uint8 tokenIndexTo,
        uint256 minDy,

        // used by both
        uint256 deadline
    ) public {
        uint256 dx = IVault(vault).swap(
            singleSwap,
            funds,
            limit,
            deadline
        );
        swap.swap(
            tokenIndexFrom,
            tokenIndexTo,
            dx,
            minDy,
            deadline
        );
    }

    function swapToPool(
        // saddle swap
        uint8 tokenIndexFrom,
        uint8 tokenIndexTo,
        uint256 dx,
        uint256 minDy,

        // weighted pool swap
        IVault.SingleSwap memory singleSwap,
        IVault.FundManagement memory funds,
        uint256 limit,

        // used by both
        uint256 deadline
    ) public {
        uint256 amount = swap.swap(
            tokenIndexFrom,
            tokenIndexTo,
            dx,
            minDy,
            deadline
        );
        singleSwap.amount = amount;
        IVault(vault).swap(
            singleSwap,
            funds,
            limit,
            deadline
        );
    }
}
