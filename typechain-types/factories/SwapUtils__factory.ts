/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapUtils, SwapUtilsInterface } from "../SwapUtils";

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
    inputs: [],
    name: "MAX_ADMIN_FEE",
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
    name: "MAX_SWAP_FEE",
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
    name: "POOL_PRECISION_DECIMALS",
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
];

const _bytecode =
  "0x613ff561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100e55760003560e01c80630296ab50146100ea57806324c5c7511461010957806340370edf1461012b57806341b91c2614610159578063467e186c146101795780634b23603c1461019957806370467276146101ac57806370703e4a146101cc57806371906c2c146101ec57806373fd6b3e146101ff5780637d0481601461021f578063834b491014610232578063a5397b2214610245578063ab3d854414610265578063e069274214610270578063e7a4db8114610283578063f3de0362146102a3575b600080fd5b6100f2601281565b60405160ff90911681526020015b60405180910390f35b81801561011557600080fd5b5061012961012436600461381e565b6102af565b005b81801561013757600080fd5b5061014b610146366004613870565b610418565b604051908152602001610100565b81801561016557600080fd5b5061014b610174366004613870565b610d45565b81801561018557600080fd5b50610129610194366004613941565b611506565b61014b6101a7366004613979565b611569565b8180156101b857600080fd5b506101296101c7366004613941565b6115d4565b6101df6101da366004613941565b611630565b60405161010091906139bd565b61014b6101fa366004613a01565b61171f565b81801561020b57600080fd5b506101df61021a366004613a65565b6117fc565b61014b61022d366004613941565b611bf0565b61014b610240366004613ac8565b611c87565b81801561025157600080fd5b5061014b610260366004613b26565b611f10565b61014b6305f5e10081565b61014b61027e366004613b74565b6122ec565b81801561028f57600080fd5b5061014b61029e366004613ba9565b612382565b61014b6402540be40081565b60008260070180548060200260200160405190810160405280929190818152602001828054801561030957602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102eb575b5050505050905060005b815181101561041257600082828151811061033057610330613bd6565b6020026020010151905060006103e186600901848154811061035457610354613bd6565b9060005260206000200154836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161038b9190613bec565b60206040518083038186803b1580156103a357600080fd5b505afa1580156103b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103db9190613c00565b906126d1565b905080156103fd576103fd6001600160a01b03831686836126dd565b5050808061040a90613c2f565b915050610313565b50505050565b6000808460070180548060200260200160405190810160405280929190818152602001828054801561047357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610455575b5050505050905080518451146104d05760405162461bcd60e51b815260206004820181905260248201527f416d6f756e7473206d757374206d6174636820706f6f6c656420746f6b656e7360448201526064015b60405180910390fd5b60006040518061010001604052806000815260200160008152602001600081526020016104fc88612738565b81526020018760060160009054906101000a90046001600160a01b03166001600160a01b03168152602001600081526020018760090180548060200260200160405190810160405280929190818152602001828054801561057c57602002820191906000526020600020905b815481526020019060010190808311610568575b50505050508152602001876008018054806020026020016040519081016040528092919081815260200182805480156105d457602002820191906000526020600020905b8154815260200190600101908083116105c0575b5050505050815250905080608001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561061b57600080fd5b505afa15801561062f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106539190613c00565b60a08201819052156106815761067e6106748260c001518360e00151612743565b8260600151612851565b81525b600082516001600160401b0381111561069c5761069c61385a565b6040519080825280602002602001820160405280156106c5578160200160208202803683370190505b50905060005b83518110156109385760a08301511515806106ff575060008782815181106106f5576106f5613bd6565b6020026020010151115b61074b5760405162461bcd60e51b815260206004820152601e60248201527f4d75737420737570706c7920616c6c20746f6b656e7320696e20706f6f6c000060448201526064016104c7565b86818151811061075d5761075d613bd6565b60200260200101516000146108c057600084828151811061078057610780613bd6565b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016107b39190613bec565b60206040518083038186803b1580156107cb57600080fd5b505afa1580156107df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108039190613c00565b905061085733308a858151811061081c5761081c613bd6565b602002602001015188868151811061083657610836613bd6565b60200260200101516001600160a01b03166129d8909392919063ffffffff16565b6108a08186848151811061086d5761086d613bd6565b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161038b9190613bec565b8883815181106108b2576108b2613bd6565b602002602001018181525050505b6109098782815181106108d5576108d5613bd6565b60200260200101518460c0015183815181106108f3576108f3613bd6565b6020026020010151612a1090919063ffffffff16565b82828151811061091b5761091b613bd6565b60209081029190910101528061093081613c2f565b9150506106cb565b5061095461094a828460e00151612743565b8360600151612851565b6020830181905282511061099e5760405162461bcd60e51b8152602060048201526011602482015270442073686f756c6420696e63726561736560781b60448201526064016104c7565b6020820151604083015282516000906001600160401b038111156109c4576109c461385a565b6040519080825280602002602001820160405280156109ed578160200160208202803683370190505b5090508260a00151600014610bcb576000610a0d89600401548651612a1c565b905060005b8551811015610ba4576000610a5f8660000151610a598860c001518581518110610a3e57610a3e613bd6565b60200260200101518960200151612a3790919063ffffffff16565b90612a43565b9050610aa06402540be400610a59610a99888681518110610a8257610a82613bd6565b602002602001015185612a4f90919063ffffffff16565b8690612a37565b848381518110610ab257610ab2613bd6565b602002602001018181525050610b22610afa6402540be400610a598e60050154888781518110610ae457610ae4613bd6565b6020026020010151612a3790919063ffffffff16565b868481518110610b0c57610b0c613bd6565b60200260200101516126d190919063ffffffff16565b8b6009018381548110610b3757610b37613bd6565b9060005260206000200181905550610b74848381518110610b5a57610b5a613bd6565b6020026020010151868481518110610b0c57610b0c613bd6565b858381518110610b8657610b86613bd6565b60209081029190910101525080610b9c81613c2f565b915050610a12565b50610bc0610bb6848660e00151612743565b8560600151612851565b604085015250610be2565b8151610be09060098a019060208501906137be565b505b60008360a0015160001415610bfc57506020830151610c24565b835160a08501516040860151610c219291610a5991610c1b90846126d1565b90612a37565b90505b86811015610c725760405162461bcd60e51b815260206004820152601b60248201527a10dbdd5b191b89dd081b5a5b9d081b5a5b881c995c5d595cdd1959602a1b60448201526064016104c7565b83608001516001600160a01b03166340c10f1933836040518363ffffffff1660e01b8152600401610ca4929190613c4a565b600060405180830381600087803b158015610cbe57600080fd5b505af1158015610cd2573d6000803e3d6000fd5b50505050336001600160a01b03167f189c623b666b1b45b83d7178f39b8c087cb09774317ca2f53c2d3c3726f222a289848760200151610d1f868a60a00151612a1090919063ffffffff16565b604051610d2f9493929190613c9e565b60405180910390a29450505050505b9392505050565b600080604051806101000160405280600081526020016000815260200160008152602001610d7287612738565b81526020018660060160009054906101000a90046001600160a01b03166001600160a01b031681526020016000815260200186600901805480602002602001604051908101604052809291908181526020018280548015610df257602002820191906000526020600020905b815481526020019060010190808311610dde575b5050505050815260200186600801805480602002602001604051908101604052809291908181526020018280548015610e4a57602002820191906000526020600020905b815481526020019060010190808311610e36575b5050505050815250905080608001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e9157600080fd5b505afa158015610ea5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec99190613c00565b60a08201526007850180546040805160208084028201810190925282815260009390929091830182828015610f2757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f09575b505050505090508051855114610f7f5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74732073686f756c64206d6174636820706f6f6c20746f6b656e7360448201526064016104c7565b81608001516001600160a01b03166370a08231336040518263ffffffff1660e01b8152600401610faf9190613bec565b60206040518083038186803b158015610fc757600080fd5b505afa158015610fdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fff9190613c00565b841115801561100d57508315155b6110295760405162461bcd60e51b81526004016104c790613cd7565b600061103a87600401548351612a1c565b9050600082516001600160401b038111156110575761105761385a565b604051908082528060200260200182016040528015611080578160200160208202803683370190505b509050600083516001600160401b0381111561109e5761109e61385a565b6040519080825280602002602001820160405280156110c7578160200160208202803683370190505b5090506110e96110df8660c001518760e00151612743565b8660600151612851565b855260005b84518110156111895761115a89828151811061110c5761110c613bd6565b6020026020010151604051806060016040528060238152602001613f9d602391398860c00151848151811061114357611143613bd6565b6020026020010151612a749092919063ffffffff16565b82828151811061116c5761116c613bd6565b60209081029190910101528061118181613c2f565b9150506110ee565b5061119b6110df828760e00151612743565b602086015260005b845181101561130a5760006111ea8760000151610a598960c0015185815181106111cf576111cf613bd6565b60200260200101518a60200151612a3790919063ffffffff16565b9050600061121a84848151811061120357611203613bd6565b602002602001015183612a4f90919063ffffffff16565b905061122f6402540be400610a598884612a37565b85848151811061124157611241613bd6565b6020026020010181815250506112856112736402540be400610a598f60050154898881518110610ae457610ae4613bd6565b858581518110610b0c57610b0c613bd6565b8c600901848154811061129a5761129a613bd6565b90600052602060002001819055506112d78584815181106112bd576112bd613bd6565b6020026020010151858581518110610b0c57610b0c613bd6565b8484815181106112e9576112e9613bd6565b6020026020010181815250505050808061130290613c2f565b9150506111a3565b5061131c6110df828760e00151612743565b60408601819052855160a08701516000935061134292610a599190610c1b9084906126d1565b90508061138f5760405162461bcd60e51b815260206004820152601b60248201527a4275726e7420616d6f756e742063616e6e6f74206265207a65726f60281b60448201526064016104c7565b61139a816001612a10565b9050868111156113ea5760405162461bcd60e51b815260206004820152601b60248201527a1d1bdad95b905b5bdd5b9d080f881b585e109d5c9b905b5bdd5b9d602a1b60448201526064016104c7565b84608001516001600160a01b03166379cc679033836040518363ffffffff1660e01b815260040161141c929190613c4a565b600060405180830381600087803b15801561143657600080fd5b505af115801561144a573d6000803e3d6000fd5b5050505060005b84518110156114bc576114aa338a838151811061147057611470613bd6565b602002602001015187848151811061148a5761148a613bd6565b60200260200101516001600160a01b03166126dd9092919063ffffffff16565b806114b481613c2f565b915050611451565b50336001600160a01b03167f3631c28b1f9dd213e0319fb167b554d76b6c283a41143eb400a0d1adb1af175589848860200151610d1f868b60a001516126d190919063ffffffff16565b6305f5e10081111561152a5760405162461bcd60e51b81526004016104c790613cfe565b600482018190556040518181527fd88ea5155021c6f8dafa1a741e173f595cdf77ce7c17d43342131d7f06afdfe5906020015b60405180910390a15050565b60006115ca85858585896009018054806020026020016040519081016040528092919081815260200182805480156115c057602002820191906000526020600020905b8154815260200190600101908083116115ac575b5050505050612aa0565b5095945050505050565b6402540be4008111156115f95760405162461bcd60e51b81526004016104c790613cfe565b600582018190556040518181527fab599d640ca80cde2b09b128a4154a8dfe608cb80f4c9399c8b954b01fd35f389060200161155d565b60606117168360090180548060200260200160405190810160405280929190818152602001828054801561168357602002820191906000526020600020905b81548152602001906001019080831161166f575b5050505050838560060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116d957600080fd5b505afa1580156116ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117119190613c00565b612c2b565b90505b92915050565b60008061173c61172e84612d16565b61173785612738565b612851565b905060008360060160009054906101000a90046001600160a01b031690506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561179557600080fd5b505afa1580156117a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cd9190613c00565b905080156117f1576117e881610a59610a996012600a613e0b565b95945050505050565b506000949350505050565b6006840154600785018054604080516020808402820181019092528281526060946001600160a01b031693600093919290919083018282801561186857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161184a575b50506040516370a0823160e01b8152939450506001600160a01b038516926370a08231925061189c91503390600401613bec565b60206040518083038186803b1580156118b457600080fd5b505afa1580156118c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ec9190613c00565b86111561190b5760405162461bcd60e51b81526004016104c790613cd7565b8051841461195b5760405162461bcd60e51b815260206004820181905260248201527f6d696e416d6f756e7473206d757374206d6174636820706f6f6c546f6b656e7360448201526064016104c7565b6000876009018054806020026020016040519081016040528092919081815260200182805480156119ab57602002820191906000526020600020905b815481526020019060010190808311611997575b505050505090506000836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156119ed57600080fd5b505afa158015611a01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a259190613c00565b90506000611a34838a84612c2b565b905060005b8151811015611b3a57888882818110611a5457611a54613bd6565b90506020020135828281518110611a6d57611a6d613bd6565b60200260200101511015611ac05760405162461bcd60e51b815260206004820152601a602482015279616d6f756e74735b695d203c206d696e416d6f756e74735b695d60301b60448201526064016104c7565b611aef828281518110611ad557611ad5613bd6565b6020026020010151858381518110610b0c57610b0c613bd6565b8b6009018281548110611b0457611b04613bd6565b9060005260206000200181905550611b283383838151811061147057611470613bd6565b80611b3281613c2f565b915050611a39565b5060405163079cc67960e41b81526001600160a01b038616906379cc679090611b699033908d90600401613c4a565b600060405180830381600087803b158015611b8357600080fd5b505af1158015611b97573d6000803e3d6000fd5b503392507f88d38ed598fdd809c2bf01ee49cd24b7fdabf379a83d29567952b60324d58cef9150839050611bcb858d6126d1565b604051611bd9929190613e17565b60405180910390a29450505050505b949350505050565b60078201546000908210611c165760405162461bcd60e51b81526004016104c790613e39565b611716836009018381548110611c2e57611c2e613bd6565b9060005260206000200154846007018481548110611c4e57611c4e613bd6565b6000918252602090912001546040516370a0823160e01b81526001600160a01b03909116906370a082319061038b903090600401613bec565b600080611c9386612738565b9050600086600901805480602002602001604051908101604052809291908181526020018280548015611ce557602002820191906000526020600020905b815481526020019060010190808311611cd1575b50505050509050600087600801805480602002602001604051908101604052809291908181526020018280548015611d3c57602002820191906000526020600020905b815481526020019060010190808311611d28575b505050505090506000611d58611d528484612743565b85612851565b905060005b8351811015611e35578615611dbd57611d9a898983818110611d8157611d81613bd6565b905060200201358583815181106108f3576108f3613bd6565b848281518110611dac57611dac613bd6565b602002602001018181525050611e23565b611e04898983818110611dd257611dd2613bd6565b90506020020135604051806060016040528060238152602001613f9d6023913986848151811061114357611143613bd6565b848281518110611e1657611e16613bd6565b6020026020010181815250505b80611e2d81613c2f565b915050611d5d565b506000611e4b611e458585612743565b86612851565b905060008a60060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611e9f57600080fd5b505afa158015611eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed79190613c00565b90508715611efe57611ef183610a5983610c1b86846126d1565b9650505050505050611be8565b611ef183610a5983610c1b83876126d1565b600080866007018660ff1681548110611f2b57611f2b613bd6565b6000918252602090912001546040516370a0823160e01b81526001600160a01b03909116915081906370a0823190611f67903390600401613bec565b60206040518083038186803b158015611f7f57600080fd5b505afa158015611f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb79190613c00565b8411156120065760405162461bcd60e51b815260206004820152601d60248201527f43616e6e6f742073776170206d6f7265207468616e20796f75206f776e00000060448201526064016104c7565b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190612035903090600401613bec565b60206040518083038186803b15801561204d57600080fd5b505afa158015612061573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120859190613c00565b905061209c6001600160a01b0383163330886129d8565b6120cc81836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161038b9190613bec565b9450505060008060008860090180548060200260200160405190810160405280929190818152602001828054801561212357602002820191906000526020600020905b81548152602001906001019080831161210f575b505050505090506121378989898985612aa0565b90935091508483101561218c5760405162461bcd60e51b815260206004820181905260248201527f53776170206469646e277420726573756c7420696e206d696e20746f6b656e7360448201526064016104c7565b60006121d48a6008018960ff16815481106121a9576121a9613bd6565b9060005260206000200154610a596402540be400610a598e6005015488612a3790919063ffffffff16565b90506121ef87838b60ff16815181106108f3576108f3613bd6565b8a6009018a60ff168154811061220757612207613bd6565b9060005260206000200181905550612232816103db86858c60ff1681518110610b0c57610b0c613bd6565b8a6009018960ff168154811061224a5761224a613bd6565b906000526020600020018190555061229133858c6007018b60ff168154811061227557612275613bd6565b6000918252602090912001546001600160a01b031691906126dd565b604080518881526020810186905260ff8b8116828401528a166060820152905133917fc6c1e0630dbe9130cc068028486c0d118ddcea348550819defd5cb8c257f8a38919081900360800190a2509198975050505050505050565b6000806115ca8585858860060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561234557600080fd5b505afa158015612359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061237d9190613c00565b612dc6565b6006840154600785018054604080516020808402820181019092528281526000946001600160a01b031693859391929091908301828280156123ed57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116123cf575b50506040516370a0823160e01b8152939450506001600160a01b038516926370a08231925061242191503390600401613bec565b60206040518083038186803b15801561243957600080fd5b505afa15801561244d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124719190613c00565b8611156124905760405162461bcd60e51b81526004016104c790613cd7565b80518560ff16106124b35760405162461bcd60e51b81526004016104c790613e6b565b6000826001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156124ee57600080fd5b505afa158015612502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125269190613c00565b90506000806125378a8a8a86612dc6565b915091508682101561257c5760405162461bcd60e51b815260206004820152600e60248201526d191e480f081b5a5b905b5bdd5b9d60921b60448201526064016104c7565b6125da6125a96125a26402540be400610a598e6005015486612a3790919063ffffffff16565b8490612a10565b8b6009018a60ff16815481106125c1576125c1613bd6565b90600052602060002001546126d190919063ffffffff16565b8a6009018960ff16815481106125f2576125f2613bd6565b60009182526020909120015560405163079cc67960e41b81526001600160a01b038616906379cc67909061262c9033908d90600401613c4a565b600060405180830381600087803b15801561264657600080fd5b505af115801561265a573d6000803e3d6000fd5b505050506126783383868b60ff168151811061148a5761148a613bd6565b604080518a81526020810185905260ff8a168183015260608101849052905133917f43fb02998f4e03da2e0e6fff53fdbf0c40a9f45f145dc377fc30615d7d7a8a64919081900360800190a25098975050505050505050565b60006117168284613e94565b6127338363a9059cbb60e01b84846040516024016126fc929190613c4a565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612e2e565b505050565b600061171982612f00565b815181516060919081146127995760405162461bcd60e51b815260206004820152601f60248201527f42616c616e636573206d757374206d61746368206d756c7469706c696572730060448201526064016104c7565b6000816001600160401b038111156127b3576127b361385a565b6040519080825280602002602001820160405280156127dc578160200160208202803683370190505b50905060005b82811015612848576128198582815181106127ff576127ff613bd6565b6020026020010151878381518110610ae457610ae4613bd6565b82828151811061282b5761282b613bd6565b60209081029190910101528061284081613c2f565b9150506127e2565b50949350505050565b815160009081805b828110156128a15761288d86828151811061287657612876613bd6565b602002602001015183612a1090919063ffffffff16565b91508061289981613c2f565b915050612859565b50806128b257600092505050611719565b600081816128c08786612a37565b905060005b610100811015612999578260005b87811015612912576128fe6128f4898d8481518110610ae457610ae4613bd6565b610a598488612a37565b91508061290a81613c2f565b9150506128d3565b50929350839261296661294661292d83610c1b8b6001612a10565b6129406064610a5989610c1b8a846126d1565b90612a10565b610a5986610c1b612957868d612a37565b6129406064610a598b8f612a37565b93506129728486612fa7565b156129865783975050505050505050611719565b508061299181613c2f565b9150506128c5565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b60448201526064016104c7565b6040516001600160a01b03808516602483015283166044820152606481018290526104129085906323b872dd60e01b906084016126fc565b60006117168284613eab565b6000611716612a316004610c1b8560016126d1565b610a5985855b60006117168284613ec3565b60006117168284613ee2565b600081831115612a6a57612a638284613e94565b9050611719565b6117168383613e94565b60008184841115612a985760405162461bcd60e51b81526004016104c79190613f30565b505050900390565b600080600087600801805480602002602001604051908101604052809291908181526020018280548015612af357602002820191906000526020600020905b815481526020019060010190808311612adf575b505050505090506000612b068583612743565b905080518860ff16108015612b1e575080518760ff16105b612b3a5760405162461bcd60e51b81526004016104c790613e39565b6000612b8b828a60ff1681518110612b5457612b54613bd6565b6020026020010151612940858c60ff1681518110612b7457612b74613bd6565b60200260200101518a612a3790919063ffffffff16565b90506000612ba4612b9b8c612738565b8b8b8587612fbe565b9050612bc460016103db83868d60ff1681518110610b0c57610b0c613bd6565b9550612be66402540be400610a598d6004015489612a3790919063ffffffff16565b9450612c1b848a60ff1681518110612c0057612c00613bd6565b6020026020010151610a5987896126d190919063ffffffff16565b9550505050509550959350505050565b606081831115612c7a5760405162461bcd60e51b815260206004820152601a60248201527943616e6e6f742065786365656420746f74616c20737570706c7960301b60448201526064016104c7565b600084516001600160401b03811115612c9557612c9561385a565b604051908082528060200260200182016040528015612cbe578160200160208202803683370190505b50905060005b855181101561284857612ce784610a5987898581518110610ae457610ae4613bd6565b828281518110612cf957612cf9613bd6565b602090810291909101015280612d0e81613c2f565b915050612cc4565b606061171982600901805480602002602001604051908101604052809291908181526020018280548015612d6957602002820191906000526020600020905b815481526020019060010190808311612d55575b505050505083600801805480602002602001604051908101604052809291908181526020018280548015612dbc57602002820191906000526020600020905b815481526020019060010190808311612da8575b5050505050612743565b6000806000806000612dda89888a89613208565b8093508194508295505050506000612e1d846103db8c6008018b60ff1681548110612e0757612e07613bd6565b600091825260209091200154610a5986886126d1565b939a93995092975050505050505050565b6000612e83826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166134f49092919063ffffffff16565b8051909150156127335780806020019051810190612ea19190613f63565b6127335760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104c7565b600381015460018201546000919042821115610d3e576002840154845480831115612f6b57612f2f8285613e94565b612f398342613e94565b612f438386613e94565b612f4d9190613ec3565b612f579190613ee2565b612f619082613eab565b9695505050505050565b612f758285613e94565b612f7f8342613e94565b612f898584613e94565b612f939190613ec3565b612f9d9190613ee2565b612f619082613e94565b60006001612fb58484612a4f565b11159392505050565b805160009060ff86811690861614156130195760405162461bcd60e51b815260206004820152601d60248201527f43616e277420636f6d7061726520746f6b656e20746f20697473656c6600000060448201526064016104c7565b808660ff1610801561302d5750808560ff16105b6130725760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc81b5d5cdd081899481a5b881c1bdbdb60521b60448201526064016104c7565b600061307e8489612851565b90508060008061308e858c612a37565b90506000805b86811015613117578b60ff168114156130af578991506130df565b8a60ff1681146130da578881815181106130cb576130cb613bd6565b602002602001015191506130df565b613105565b6130e98483612a10565b93506131026130f88389612a37565b610a598789612a37565b94505b8061310f81613c2f565b915050613094565b506131346131258388612a37565b610a596064610c1b888a612a37565b9350600061315161314a84610a59896064612a37565b8590612a10565b9050600086815b6101008110156131bf57909150819061318b61317d8a6103db87612940876002612a37565b610a598a6129408680612a37565b91506131978284612fa7565b156131ad575098506117e8975050505050505050565b806131b781613c2f565b915050613158565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e7665726765000060448201526064016104c7565b60008060008061321788612d16565b905080518760ff161061323c5760405162461bcd60e51b81526004016104c790613e39565b60006040518060a00160405280600081526020016000815260200160008152602001600081526020016000815250905061327589612738565b60808201819052613287908390612851565b8082526132a79061329f908890610a59908b90612a37565b8251906126d1565b60208201528151829060ff8a169081106132c3576132c3613bd6565b60200260200101518711156133175760405162461bcd60e51b815260206004820152601a6024820152795769746864726177206578636565647320617661696c61626c6560301b60448201526064016104c7565b61332b816080015189848460200151613503565b604082015281516000906001600160401b0381111561334c5761334c61385a565b604051908082528060200260200182016040528015613375578160200160208202803683370190505b5090506133878a600401548451612a1c565b606083015260005b83518110156134585760008482815181106133ac576133ac613bd6565b602002602001015190506134286134216402540be400610a5987606001518f60ff1687146133fa57885160208a01516133f5916133ee91610a59908a90612a37565b87906126d1565b610c1b565b610c1b89604001516103db8b60000151610a598d602001518b612a3790919063ffffffff16565b82906126d1565b83838151811061343a5761343a613bd6565b6020908102919091010152508061345081613c2f565b91505061338f565b50600061348761347284608001518c858760200151613503565b838c60ff1681518110610b0c57610b0c613bd6565b90506134bb8b6008018b60ff16815481106134a4576134a4613bd6565b600091825260209091200154610a598360016126d1565b9050808360400151858c60ff16815181106134d8576134d8613bd6565b6020026020010151965096509650505050509450945094915050565b6060611be88484600085613654565b815160009060ff8516811161352a5760405162461bcd60e51b81526004016104c790613e6b565b826000806135388985612a37565b905060005b848110156135b5578860ff1681146135a35761357b88828151811061356457613564613bd6565b602002602001015184612a1090919063ffffffff16565b92506135a0613596868a8481518110610ae457610ae4613bd6565b610a59868a612a37565b93505b806135ad81613c2f565b91505061353d565b506135d26135c38286612a37565b610a596064610c1b878b612a37565b925060006135e86125a283610a598a6064612a37565b9050600087815b6101008110156131bf5790915081906136226136148b6103db87612940876002612a37565b610a59896129408680612a37565b915061362e8284612fa7565b1561364257509650611be895505050505050565b8061364c81613c2f565b9150506135ef565b6060824710156136b55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104c7565b6001600160a01b0385163b61370c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c7565b600080866001600160a01b031685876040516137289190613f80565b60006040518083038185875af1925050503d8060008114613765576040519150601f19603f3d011682016040523d82523d6000602084013e61376a565b606091505b509150915061377a828286613785565b979650505050505050565b60608315613794575081610d3e565b8251156137a45782518084602001fd5b8160405162461bcd60e51b81526004016104c79190613f30565b8280548282559060005260206000209081019282156137f9579160200282015b828111156137f95782518255916020019190600101906137de565b50613805929150613809565b5090565b5b80821115613805576000815560010161380a565b6000806040838503121561383157600080fd5b8235915060208301356001600160a01b038116811461384f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561388557600080fd5b833592506020808501356001600160401b03808211156138a457600080fd5b818701915087601f8301126138b857600080fd5b8135818111156138ca576138ca61385a565b8060051b604051601f19603f830116810181811085821117156138ef576138ef61385a565b60405291825284820192508381018501918a83111561390d57600080fd5b938501935b8285101561392b57843584529385019392850192613912565b979a979950505050604095909501359450505050565b6000806040838503121561395457600080fd5b50508035926020909101359150565b803560ff8116811461397457600080fd5b919050565b6000806000806080858703121561398f57600080fd5b8435935061399f60208601613963565b92506139ad60408601613963565b9396929550929360600135925050565b6020808252825182820181905260009190848201906040850190845b818110156139f5578351835292840192918401916001016139d9565b50909695505050505050565b600060208284031215613a1357600080fd5b5035919050565b60008083601f840112613a2c57600080fd5b5081356001600160401b03811115613a4357600080fd5b6020830191508360208260051b8501011115613a5e57600080fd5b9250929050565b60008060008060608587031215613a7b57600080fd5b843593506020850135925060408501356001600160401b03811115613a9f57600080fd5b613aab87828801613a1a565b95989497509550505050565b8015158114613ac557600080fd5b50565b60008060008060608587031215613ade57600080fd5b8435935060208501356001600160401b03811115613afb57600080fd5b613b0787828801613a1a565b9094509250506040850135613b1b81613ab7565b939692955090935050565b600080600080600060a08688031215613b3e57600080fd5b85359450613b4e60208701613963565b9350613b5c60408701613963565b94979396509394606081013594506080013592915050565b600080600060608486031215613b8957600080fd5b8335925060208401359150613ba060408501613963565b90509250925092565b60008060008060808587031215613bbf57600080fd5b84359350602085013592506139ad60408601613963565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0391909116815260200190565b600060208284031215613c1257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415613c4357613c43613c19565b5060010190565b6001600160a01b03929092168252602082015260400190565b600081518084526020808501945080840160005b83811015613c9357815187529582019590820190600101613c77565b509495945050505050565b608081526000613cb16080830187613c63565b8281036020840152613cc38187613c63565b604084019590955250506060015292915050565b6020808252600d908201526c1f2628173130b630b731b2a7b360991b604082015260600190565b6020808252600f908201526e08ccaca40d2e640e8dede40d0d2ced608b1b604082015260600190565b600181815b80851115613d62578160001904821115613d4857613d48613c19565b80851615613d5557918102915b93841c9390800290613d2c565b509250929050565b600082613d7957506001611719565b81613d8657506000611719565b8160018114613d9c5760028114613da657613dc2565b6001915050611719565b60ff841115613db757613db7613c19565b50506001821b611719565b5060208310610133831016604e8410600b8410161715613de5575081810a611719565b613def8383613d27565b8060001904821115613e0357613e03613c19565b029392505050565b60006117168383613d6a565b604081526000613e2a6040830185613c63565b90508260208301529392505050565b602080825260189082015277546f6b656e20696e646578206f7574206f662072616e676560401b604082015260600190565b6020808252600f908201526e151bdad95b881b9bdd08199bdd5b99608a1b604082015260600190565b600082821015613ea657613ea6613c19565b500390565b60008219821115613ebe57613ebe613c19565b500190565b6000816000190483118215151615613edd57613edd613c19565b500290565b600082613eff57634e487b7160e01b600052601260045260246000fd5b500490565b60005b83811015613f1f578181015183820152602001613f07565b838111156104125750506000910152565b6020815260008251806020840152613f4f816040850160208701613f04565b601f01601f19169190910160400192915050565b600060208284031215613f7557600080fd5b8151610d3e81613ab7565b60008251613f92818460208701613f04565b919091019291505056fe43616e6e6f74207769746864726177206d6f7265207468616e20617661696c61626c65a2646970667358221220a9b202f7c6400d31edd2800352bb7ef5c074edf653fef4e46bfa873fe62035b564736f6c63430008090033";

type SwapUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapUtils__factory extends ContractFactory {
  constructor(...args: SwapUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SwapUtils";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapUtils> {
    return super.deploy(overrides || {}) as Promise<SwapUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapUtils {
    return super.attach(address) as SwapUtils;
  }
  connect(signer: Signer): SwapUtils__factory {
    return super.connect(signer) as SwapUtils__factory;
  }
  static readonly contractName: "SwapUtils";
  public readonly contractName: "SwapUtils";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapUtilsInterface {
    return new utils.Interface(_abi) as SwapUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapUtils {
    return new Contract(address, _abi, signerOrProvider) as SwapUtils;
  }
}
