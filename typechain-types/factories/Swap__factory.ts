/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Swap, SwapInterface } from "../Swap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "NewAdminFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "NewSwapFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newWithdrawFee",
        type: "uint256",
      },
    ],
    name: "NewWithdrawFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityImbalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensBought",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityOne",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensSold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensBought",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "soldId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "boughtId",
        type: "uint128",
      },
    ],
    name: "TokenSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "minToMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateRemoveLiquidity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "calculateRemoveLiquidityOneToken",
    outputs: [
      {
        internalType: "uint256",
        name: "availableTokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndexFrom",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "tokenIndexTo",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "calculateSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
    ],
    name: "calculateTokenAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAPrecise",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getAdminBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "getTokenIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVirtualPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "_pooledTokens",
        type: "address[]",
      },
      {
        internalType: "uint8[]",
        name: "decimals",
        type: "uint8[]",
      },
      {
        internalType: "string",
        name: "lpTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lpTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "rampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "minAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "maxBurnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityImbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityOneToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "setAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopRampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndexFrom",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "tokenIndexTo",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapStorage",
    outputs: [
      {
        internalType: "uint256",
        name: "initialA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialATime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureATime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adminFee",
        type: "uint256",
      },
      {
        internalType: "contract LPToken",
        name: "lpToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAdminFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061269b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638456cb5911610104578063b28cb6dc116100a2578063e6ab280611610071578063e6ab2806146103fa578063ef0a712f1461040d578063f2fad2b614610420578063f2fde38b1461043357600080fd5b8063b28cb6dc146103cf578063c4db7fa0146103e2578063d46300fd146103ea578063e25aa5fa146103f257600080fd5b80638da5cb5b116100de5780638da5cb5b14610385578063916955861461039657806391ceb3eb146103a9578063a95b089f146103bc57600080fd5b80638456cb591461035757806384cdd9bc1461035f5780638beb60b61461037257600080fd5b80634d49e87d116101715780635fd65f0f1161014b5780635fd65f0f1461029657806366c0bd24146102ff578063715018a61461032457806382b866001461032c57600080fd5b80634d49e87d1461025a578063593d132c1461026d5780635c975abb1461028057600080fd5b8063342a87a1116101ad578063342a87a11461021957806334e199071461022c5780633e3a15601461023f5780633f4ba83a1461025257600080fd5b80630419b45a146101d45780630ba81959146101de57806331cd52b0146101f9575b600080fd5b6101dc610446565b005b6101e6610507565b6040519081526020015b60405180910390f35b61020c610207366004611ca4565b610593565b6040516101f09190611cf7565b6101e6610227366004611d4c565b61067f565b6101dc61023a366004611d78565b61071e565b6101e661024d366004611d91565b6107b6565b6101dc61089c565b6101e6610268366004611dcc565b6108d0565b6101dc61027b366004611e1d565b610959565b60655460ff1660405190151581526020016101f0565b60c95460ca5460cb5460cc5460cd5460ce5460cf546102c1969594939291906001600160a01b031687565b604080519788526020880196909652948601939093526060850191909152608084015260a08301526001600160a01b031660c082015260e0016101f0565b61031261030d366004611e5f565b6109f8565b60405160ff90911681526020016101f0565b6101dc610a6f565b61033f61033a366004611e83565b610aa3565b6040516001600160a01b0390911681526020016101f0565b6101dc610b1b565b6101e661036d366004611dcc565b610b4d565b6101dc610380366004611d78565b610bd6565b6033546001600160a01b031661033f565b6101e66103a4366004611e9e565b610c3f565b6101e66103b7366004611e83565b610d3c565b6101e66103ca366004611eeb565b610db1565b6101dc6103dd3660046120d8565b610e58565b6101dc611596565b6101e66115f8565b6101e6611633565b6101e66104083660046121c1565b61166e565b6101e661041b366004611d78565b6116af565b61020c61042e366004611d78565b61173c565b6101dc610441366004611e5f565b6117cd565b6033546001600160a01b031633146104795760405162461bcd60e51b815260040161047090612218565b60405180910390fd5b73__$a4e4384d4f8ec13c7a898ae597a4175ef6$__6324c5c75160c96104a76033546001600160a01b031690565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201526044015b60006040518083038186803b1580156104ed57600080fd5b505af4158015610501573d6000803e3d6000fd5b50505050565b60405163c9b64dcb60e01b815260c9600482015260009073__$a50a14a4f4d416df093fe8223c9bbe01e7$__9063c9b64dcb906024015b60206040518083038186803b15801561055657600080fd5b505af415801561056a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e919061224d565b905090565b6060600260975414156105b85760405162461bcd60e51b815260040161047090612266565b600260975581428110156105de5760405162461bcd60e51b81526004016104709061229d565b6040516339feb59f60e11b815273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__906373fd6b3e9061061c9060c9908a908a908a906004016122fd565b60006040518083038186803b15801561063457600080fd5b505af4158015610648573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106709190810190612327565b60016097559695505050505050565b60405163703493a160e11b815260c960048201526024810183905260ff8216604482015260009073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__9063e06927429060640160206040518083038186803b1580156106dd57600080fd5b505af41580156106f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610715919061224d565b90505b92915050565b6033546001600160a01b031633146107485760405162461bcd60e51b815260040161047090612218565b60405163119f861b60e21b815260c960048201526024810182905273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__9063467e186c906044015b60006040518083038186803b15801561079b57600080fd5b505af41580156107af573d6000803e3d6000fd5b5050505050565b6000600260975414156107db5760405162461bcd60e51b815260040161047090612266565b600260975581428110156108015760405162461bcd60e51b81526004016104709061229d565b60405163e7a4db8160e01b815260c960048201526024810187905260ff861660448201526064810185905273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__9063e7a4db81906084015b60206040518083038186803b15801561086457600080fd5b505af4158015610878573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610670919061224d565b6033546001600160a01b031633146108c65760405162461bcd60e51b815260040161047090612218565b6108ce611868565b565b6000600260975414156108f55760405162461bcd60e51b815260040161047090612266565b6002609755814281101561091b5760405162461bcd60e51b81526004016104709061229d565b6040516340370edf60e01b815273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__906340370edf9061084c9060c9908a908a908a906004016123b8565b6033546001600160a01b031633146109835760405162461bcd60e51b815260040161047090612218565b6040516358fdd79b60e01b815260c96004820152602481018390526044810182905273__$a50a14a4f4d416df093fe8223c9bbe01e7$__906358fdd79b9060640160006040518083038186803b1580156109dc57600080fd5b505af41580156109f0573d6000803e3d6000fd5b505050505050565b6001600160a01b038116600081815260d36020526040812054909160ff90911690610a2282610aa3565b6001600160a01b0316146107185760405162461bcd60e51b8152602060048201526014602482015273151bdad95b88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606401610470565b6033546001600160a01b03163314610a995760405162461bcd60e51b815260040161047090612218565b6108ce60006118fb565b60d05460009060ff831610610ae95760405162461bcd60e51b815260206004820152600c60248201526b4f7574206f662072616e676560a01b6044820152606401610470565b60d0805460ff8416908110610b0057610b006123e3565b6000918252602090912001546001600160a01b031692915050565b6033546001600160a01b03163314610b455760405162461bcd60e51b815260040161047090612218565b6108ce61194d565b600060026097541415610b725760405162461bcd60e51b815260040161047090612266565b60026097558142811015610b985760405162461bcd60e51b81526004016104709061229d565b6040516320dc8e1360e11b815273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__906341b91c269061084c9060c9908a908a908a906004016123b8565b6033546001600160a01b03163314610c005760405162461bcd60e51b815260040161047090612218565b604051633823393b60e11b815260c960048201526024810182905273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__90637046727690604401610783565b600060026097541415610c645760405162461bcd60e51b815260040161047090612266565b60026097558142811015610c8a5760405162461bcd60e51b81526004016104709061229d565b60405163529cbd9160e11b815260c9600482015260ff808916602483015287166044820152606481018690526084810185905273__$a4e4384d4f8ec13c7a898ae597a4175ef6$__9063a5397b229060a40160206040518083038186803b158015610cf457600080fd5b505af4158015610d08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2c919061224d565b6001609755979650505050505050565b60d05460009060ff831610610d885760405162461bcd60e51b8152602060048201526012602482015271496e646578206f7574206f662072616e676560701b6044820152606401610470565b60d2805460ff8416908110610d9f57610d9f6123e3565b90600052602060002001549050919050565b6040516312c8d80f60e21b815260c9600482015260ff8085166024830152831660448201526064810182905260009073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__90634b23603c906084015b60206040518083038186803b158015610e1857600080fd5b505af4158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e50919061224d565b949350505050565b600054610100900460ff16610e735760005460ff1615610e77565b303b155b610eda5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610470565b600054610100900460ff16158015610efc576000805461ffff19166101011790555b610f046119c8565b610f0c611a07565b6001895111610f5d5760405162461bcd60e51b815260206004820152601960248201527f5f706f6f6c6564546f6b656e732e6c656e677468203c3d2031000000000000006044820152606401610470565b602089511115610faf5760405162461bcd60e51b815260206004820152601960248201527f5f706f6f6c6564546f6b656e732e6c656e677468203e203332000000000000006044820152606401610470565b87518951146110005760405162461bcd60e51b815260206004820152601f60248201527f5f706f6f6c6564546f6b656e7320646563696d616c73206d69736d61746368006044820152606401610470565b6000885167ffffffffffffffff81111561101c5761101c611f27565b604051908082528060200260200182016040528015611045578160200160208202803683370190505b50905060005b8a518160ff1610156112f55760ff8116156111345760d360008c8360ff1681518110611079576110796123e3565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff161580156110f557508a8160ff16815181106110bd576110bd6123e3565b60200260200101516001600160a01b03168b6000815181106110e1576110e16123e3565b60200260200101516001600160a01b031614155b6111345760405162461bcd60e51b815260206004820152601060248201526f4475706c696361746520746f6b656e7360801b6044820152606401610470565b60006001600160a01b03168b8260ff1681518110611154576111546123e3565b60200260200101516001600160a01b031614156111b35760405162461bcd60e51b815260206004820152601d60248201527f546865203020616464726573732069736e277420616e204552432d32300000006044820152606401610470565b601260ff168a8260ff16815181106111cd576111cd6123e3565b602002602001015160ff1611156112265760405162461bcd60e51b815260206004820152601a60248201527f546f6b656e20646563696d616c732065786365656473206d61780000000000006044820152606401610470565b61125c8a8260ff168151811061123e5761123e6123e3565b602002602001015160ff16601260ff16611a3690919063ffffffff16565b61126790600a6124f3565b828260ff168151811061127c5761127c6123e3565b6020026020010181815250508060d360008d8460ff16815181106112a2576112a26123e3565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908360ff16021790555080806112ed906124ff565b91505061104b565b50620f4240861061133d5760405162461bcd60e51b81526020600482015260126024820152715f612065786365656473206d6178696d756d60701b6044820152606401610470565b6305f5e10085106113875760405162461bcd60e51b81526020600482015260146024820152735f6665652065786365656473206d6178696d756d60601b6044820152606401610470565b6402540be40084106113db5760405162461bcd60e51b815260206004820152601960248201527f5f61646d696e4665652065786365656473206d6178696d756d000000000000006044820152606401610470565b60006113e684611a42565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b7690611417908c908c9060040161256c565b602060405180830381600087803b15801561143157600080fd5b505af1158015611445573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611469919061259a565b6114b55760405162461bcd60e51b815260206004820152601c60248201527f636f756c64206e6f7420696e6974206c70546f6b656e20636c6f6e65000000006044820152606401610470565b60cf80546001600160a01b0319166001600160a01b0383161790558a516114e39060d09060208e0190611ba3565b5081516114f79060d1906020850190611c08565b508a5167ffffffffffffffff81111561151257611512611f27565b60405190808252806020026020018201604052801561153b578160200160208202803683370190505b5080516115509160d291602090910190611c08565b5061155c876064611adf565b60c95561156a876064611adf565b60ca55505060cd84905560ce839055801561158b576000805461ff00191690555b505050505050505050565b6033546001600160a01b031633146115c05760405162461bcd60e51b815260040161047090612218565b6040516378a7108f60e11b815260c9600482015273__$a50a14a4f4d416df093fe8223c9bbe01e7$__9063f14e211e906024016104d5565b604051632c28533f60e21b815260c9600482015260009073__$a50a14a4f4d416df093fe8223c9bbe01e7$__9063b0a14cfc9060240161053e565b604051631c641b0b60e21b815260c9600482015260009073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__906371906c2c9060240161053e565b604051630834b49160e41b815260009073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__9063834b491090610e009060c9908890889088906004016125b7565b6040516303e8240b60e51b815260c960048201526024810182905260009073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__90637d0481609060440160206040518083038186803b15801561170457600080fd5b505af4158015611718573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610718919061224d565b6040516338381f2560e11b815260c960048201526024810182905260609073__$a4e4384d4f8ec13c7a898ae597a4175ef6$__906370703e4a9060440160006040518083038186803b15801561179157600080fd5b505af41580156117a5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107189190810190612327565b6033546001600160a01b031633146117f75760405162461bcd60e51b815260040161047090612218565b6001600160a01b03811661185c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610470565b611865816118fb565b50565b60655460ff166118b15760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610470565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60655460ff16156119935760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610470565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118de3390565b600054610100900460ff166119ef5760405162461bcd60e51b8152600401610470906125e4565b6119f7611aeb565b6119ff611b12565b6108ce611b42565b600054610100900460ff16611a2e5760405162461bcd60e51b8152600401610470906125e4565b6108ce611b75565b6000610715828461262f565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116611ada5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610470565b919050565b60006107158284612646565b600054610100900460ff166108ce5760405162461bcd60e51b8152600401610470906125e4565b600054610100900460ff16611b395760405162461bcd60e51b8152600401610470906125e4565b6108ce336118fb565b600054610100900460ff16611b695760405162461bcd60e51b8152600401610470906125e4565b6065805460ff19169055565b600054610100900460ff16611b9c5760405162461bcd60e51b8152600401610470906125e4565b6001609755565b828054828255906000526020600020908101928215611bf8579160200282015b82811115611bf857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611bc3565b50611c04929150611c43565b5090565b828054828255906000526020600020908101928215611bf8579160200282015b82811115611bf8578251825591602001919060010190611c28565b5b80821115611c045760008155600101611c44565b60008083601f840112611c6a57600080fd5b50813567ffffffffffffffff811115611c8257600080fd5b6020830191508360208260051b8501011115611c9d57600080fd5b9250929050565b60008060008060608587031215611cba57600080fd5b84359350602085013567ffffffffffffffff811115611cd857600080fd5b611ce487828801611c58565b9598909750949560400135949350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d2f57835183529284019291840191600101611d13565b50909695505050505050565b803560ff81168114611ada57600080fd5b60008060408385031215611d5f57600080fd5b82359150611d6f60208401611d3b565b90509250929050565b600060208284031215611d8a57600080fd5b5035919050565b60008060008060808587031215611da757600080fd5b84359350611db760208601611d3b565b93969395505050506040820135916060013590565b60008060008060608587031215611de257600080fd5b843567ffffffffffffffff811115611df957600080fd5b611e0587828801611c58565b90989097506020870135966040013595509350505050565b60008060408385031215611e3057600080fd5b50508035926020909101359150565b6001600160a01b038116811461186557600080fd5b8035611ada81611e3f565b600060208284031215611e7157600080fd5b8135611e7c81611e3f565b9392505050565b600060208284031215611e9557600080fd5b61071582611d3b565b600080600080600060a08688031215611eb657600080fd5b611ebf86611d3b565b9450611ecd60208701611d3b565b94979496505050506040830135926060810135926080909101359150565b600080600060608486031215611f0057600080fd5b611f0984611d3b565b9250611f1760208501611d3b565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611f6657611f66611f27565b604052919050565b600067ffffffffffffffff821115611f8857611f88611f27565b5060051b60200190565b600082601f830112611fa357600080fd5b81356020611fb8611fb383611f6e565b611f3d565b82815260059290921b84018101918181019086841115611fd757600080fd5b8286015b84811015611ffb578035611fee81611e3f565b8352918301918301611fdb565b509695505050505050565b600082601f83011261201757600080fd5b81356020612027611fb383611f6e565b82815260059290921b8401810191818101908684111561204657600080fd5b8286015b84811015611ffb5761205b81611d3b565b835291830191830161204a565b600082601f83011261207957600080fd5b813567ffffffffffffffff81111561209357612093611f27565b6120a6601f8201601f1916602001611f3d565b8181528460208386010111156120bb57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600080610100898b0312156120f557600080fd5b883567ffffffffffffffff8082111561210d57600080fd5b6121198c838d01611f92565b995060208b013591508082111561212f57600080fd5b61213b8c838d01612006565b985060408b013591508082111561215157600080fd5b61215d8c838d01612068565b975060608b013591508082111561217357600080fd5b506121808b828c01612068565b9550506080890135935060a0890135925060c089013591506121a460e08a01611e54565b90509295985092959890939650565b801515811461186557600080fd5b6000806000604084860312156121d657600080fd5b833567ffffffffffffffff8111156121ed57600080fd5b6121f986828701611c58565b909450925050602084013561220d816121b3565b809150509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006020828403121561225f57600080fd5b5051919050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526010908201526f111958591b1a5b99481b9bdd081b595d60821b604082015260600190565b81835260006001600160fb1b038311156122e057600080fd5b8260051b8083602087013760009401602001938452509192915050565b84815283602082015260606040820152600061231d6060830184866122c7565b9695505050505050565b6000602080838503121561233a57600080fd5b825167ffffffffffffffff81111561235157600080fd5b8301601f8101851361236257600080fd5b8051612370611fb382611f6e565b81815260059190911b8201830190838101908783111561238f57600080fd5b928401925b828410156123ad57835182529284019290840190612394565b979650505050505050565b8481526060602082015260006123d26060830185876122c7565b905082604083015295945050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561244a578160001904821115612430576124306123f9565b8085161561243d57918102915b93841c9390800290612414565b509250929050565b60008261246157506001610718565b8161246e57506000610718565b8160018114612484576002811461248e576124aa565b6001915050610718565b60ff84111561249f5761249f6123f9565b50506001821b610718565b5060208310610133831016604e8410600b84101617156124cd575081810a610718565b6124d7838361240f565b80600019048211156124eb576124eb6123f9565b029392505050565b60006107158383612452565b600060ff821660ff811415612516576125166123f9565b60010192915050565b6000815180845260005b8181101561254557602081850181015186830182015201612529565b81811115612557576000602083870101525b50601f01601f19169290920160200192915050565b60408152600061257f604083018561251f565b8281036020840152612591818561251f565b95945050505050565b6000602082840312156125ac57600080fd5b8151611e7c816121b3565b8481526060602082015260006125d16060830185876122c7565b9050821515604083015295945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082821015612641576126416123f9565b500390565b6000816000190483118215151615612660576126606123f9565b50029056fea264697066735822122080de71c9ccd601e4c0bc85d697d80138e7501a26342c4155a774f7a4eff051c764736f6c63430008090033";

type SwapConstructorParams =
  | [linkLibraryAddresses: SwapLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Swap__factory extends ContractFactory {
  constructor(...args: SwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Swap__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    this.contractName = "Swap";
  }

  static linkBytecode(linkLibraryAddresses: SwapLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a4e4384d4f8ec13c7a898ae597a4175ef6\\$__", "g"),
      linkLibraryAddresses["contracts/SwapUtils.sol:SwapUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a50a14a4f4d416df093fe8223c9bbe01e7\\$__", "g"),
      linkLibraryAddresses[
        "contracts/AmplificationUtils.sol:AmplificationUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Swap> {
    return super.deploy(overrides || {}) as Promise<Swap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Swap {
    return super.attach(address) as Swap;
  }
  connect(signer: Signer): Swap__factory {
    return super.connect(signer) as Swap__factory;
  }
  static readonly contractName: "Swap";
  public readonly contractName: "Swap";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapInterface {
    return new utils.Interface(_abi) as SwapInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Swap {
    return new Contract(address, _abi, signerOrProvider) as Swap;
  }
}

export interface SwapLibraryAddresses {
  ["contracts/SwapUtils.sol:SwapUtils"]: string;
  ["contracts/AmplificationUtils.sol:AmplificationUtils"]: string;
}
