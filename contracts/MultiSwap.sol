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

    struct PoolSwapArgs {
        IVault.SingleSwap singleSwap;
        IVault.FundManagement funds;
        uint256 limit;
    }

    struct StableSwap {
        address pool;
        uint8 tokenIndexFrom;
        uint8 tokenIndexTo;
        uint256 minDy;
    }

    constructor(address _vault) {
        vault = IVault(_vault);
    }

    function swap(
        PoolSwapArgs[] calldata poolSwapArgs,
        StableSwap[] calldata stableSwapArgs,
        bool[] calldata swapOrder,
        address from,
        address to,
        uint amount,
        uint256 deadline
    ) public {
        /*
            This allows for routing the swaps through the different pools
        */
        uint lastAmount = amount;
        IERC20(from).transferFrom(msg.sender, address(this), amount);
        for (uint i = 0; i < swapOrder.length; i++) {
            if (swapOrder[i]) {
                lastAmount = IVault(vault).swap(
                    poolSwapArgs[i].singleSwap,
                    poolSwapArgs[i].funds,
                    poolSwapArgs[i].limit,
                    deadline
                );
            } else {
                lastAmount = ISwap(stableSwapArgs[i].pool).swap(
                    stableSwapArgs[i].tokenIndexFrom,
                    stableSwapArgs[i].tokenIndexTo,
                    lastAmount,
                    stableSwapArgs[i].minDy,
                    deadline
                );
            }
        }
        uint balance = IERC20(to).balanceOf(address(this));
        IERC20(to).transfer(msg.sender, balance);
    }

    function poolToSwap(
        // weighted pool swap
        IVault.SingleSwap memory singleSwap,
        IVault.FundManagement memory funds,
        uint256 limit,

        // saddle swap
        address pool,
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
        ISwap(pool).swap(
            tokenIndexFrom,
            tokenIndexTo,
            dx,
            minDy,
            deadline
        );
    }

    function swapPoolSwap(
        // saddle swap1
        address swap,
        uint8 tokenIndexFrom,
        uint8 tokenIndexTo,
        uint256 dx,
        uint256 minDy,

        // weighted pool swap
        IVault.SingleSwap memory singleSwap,
        IVault.FundManagement memory funds,
        uint256 limit,

        // saddle swap2
        address swap2,
        uint8 tokenIndexFrom2,
        uint8 tokenIndexTo2,
        uint256 minDy2,

        // used by both
        uint256 deadline
    ) public returns(uint256) {
        uint256 swapDx = swapToPool(
            swap,
            tokenIndexFrom,
            tokenIndexTo,
            dx,
            minDy,

            singleSwap,
            funds,
            limit,

            deadline
        );

         return ISwap(swap2).swap(
            tokenIndexFrom2,
            tokenIndexTo2,
            swapDx,
            minDy2,
            deadline
        );
    }

    function swapToPool(
        // saddle swap
        address swap,
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
    ) public returns (uint256) {
        uint256 amount = ISwap(swap).swap(
            tokenIndexFrom,
            tokenIndexTo,
            dx,
            minDy,
            deadline
        );
        singleSwap.amount = amount;
        return IVault(vault).swap(
            singleSwap,
            funds,
            limit,
            deadline
        );
    }
}
