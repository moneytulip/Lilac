/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vesting, VestingInterface } from "../Vesting";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "SetBeneficiary",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cliff",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "VestingInitialized",
    type: "event",
  },
  {
    inputs: [],
    name: "beneficiary",
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
    inputs: [
      {
        internalType: "address",
        name: "newBeneficiary",
        type: "address",
      },
    ],
    name: "changeBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cliffInSeconds",
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
    name: "durationInSeconds",
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
    name: "governance",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliffInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_durationInSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "released",
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
    name: "startTimestamp",
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
    name: "token",
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
    inputs: [],
    name: "vestedAmount",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805462010000600160b01b031916336201000002178155610e4b90819061003a90396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806338af3eed1461009e57806344b1231f146100cd5780634e8602bd146100e35780635aa6e675146100ec57806386d1a69f146100f457806396132521146100fe578063b20b15cd14610107578063d13f90b414610110578063dc07065714610123578063e6fd48bc14610136578063fc0c546a1461013f575b600080fd5b6000546100b7906201000090046001600160a01b031681565b6040516100c49190610c21565b60405180910390f35b6100d5610152565b6040519081526020016100c4565b6100d560035481565b6100b76102e8565b6100fc61036a565b005b6100d560055481565b6100d560025481565b6100fc61011e366004610c4a565b61042d565b6100fc610131366004610c9b565b6107be565b6100d560045481565b6001546100b7906001600160a01b031681565b600354600454600091429183906101699084610cce565b905060025481101561017f576000935050505090565b81811061020e576001546040516370a0823160e01b81526001600160a01b03909116906370a08231906101b6903090600401610c21565b60206040518083038186803b1580156101ce57600080fd5b505afa1580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102069190610ce5565b935050505090565b6001546040516370a0823160e01b81526000916001600160a01b0316906370a082319061023f903090600401610c21565b60206040518083038186803b15801561025757600080fd5b505afa15801561026b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028f9190610ce5565b9050806102a157600094505050505090565b6000600554826102b19190610cfe565b90506000846102c08584610d16565b6102ca9190610d35565b90506000600554826102dc9190610cce565b98975050505050505050565b60015460408051635aa6e67560e01b815290516000926001600160a01b031691635aa6e675916004808301926020929190829003018186803b15801561032d57600080fd5b505afa158015610341573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103659190610d57565b905090565b6000610374610152565b9050600081116103c25760405162461bcd60e51b81526020600482015260146024820152734e6f20746f6b656e7320746f2072656c6561736560601b60448201526064015b60405180910390fd5b806005546103d09190610cfe565b6005556040518181527ffb81f9b30d73d830c3544b34d827c08142579ee75710b490bab0b3995468c5659060200160405180910390a160005460015461042a916001600160a01b0391821691620100009091041683610957565b50565b600054610100900460ff166104485760005460ff1615610450565b6104506109ae565b6104b35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103b9565b600054610100900460ff161580156104d5576000805461ffff19166101011790555b6001600160a01b0386166105245760405162461bcd60e51b81526020600482015260166024820152755f746f6b656e2063616e6e6f7420626520656d70747960501b60448201526064016103b9565b6000546201000090046001600160a01b0316156105835760405162461bcd60e51b815260206004820181905260248201527f63616e6e6f7420696e697469616c697a65206c6f67696320636f6e747261637460448201526064016103b9565b6001600160a01b0385166105d85760405162461bcd60e51b815260206004820152601c60248201527b5f62656e65666963696172792063616e6e6f7420626520656d70747960201b60448201526064016103b9565b836106225760405162461bcd60e51b815260206004820152601a6024820152790737461727454696d657374616d702063616e6e6f7420626520360341b60448201526064016103b9565b428411156106835760405162461bcd60e51b815260206004820152602860248201527f737461727454696d657374616d702063616e6e6f742062652066726f6d207468604482015267652066757475726560c01b60648201526084016103b9565b816106c75760405162461bcd60e51b815260206004820152601460248201527306475726174696f6e2063616e6e6f7420626520360641b60448201526064016103b9565b818311156107175760405162461bcd60e51b815260206004820152601e60248201527f636c6966662069732067726561746572207468616e206475726174696f6e000060448201526064016103b9565b600180546001600160a01b0319166001600160a01b03888116919091179091556000805462010000600160b01b0319166201000092881692830217905560048590556003839055600284905560408051868152602081018690529081018490527fdbacc220742910855f69e0a18ac51a99d810079de20f740f1e022153ad7ba8419060600160405180910390a280156107b6576000805461ff00191690555b505050505050565b6107c66102e8565b6001600160a01b0316336001600160a01b0316146108365760405162461bcd60e51b815260206004820152602760248201527f6f6e6c7920676f7665726e616e63652063616e20706572666f726d20746869736044820152661030b1ba34b7b760c91b60648201526084016103b9565b6000546001600160a01b03828116620100009092041614156108b15760405162461bcd60e51b815260206004820152602e60248201527f62656e6566696369617279206d75737420626520646966666572656e7420667260448201526d6f6d2063757272656e74206f6e6560901b60648201526084016103b9565b6001600160a01b0381166109055760405162461bcd60e51b815260206004820152601b60248201527a62656e65666963696172792063616e6e6f7420626520656d70747960281b60448201526064016103b9565b6000805462010000600160b01b031916620100006001600160a01b03841690810291909117825560405190917f1008eccd86b7b0367a8fd91dc07c1796d0501cd3288389270be997f9cc24665b91a250565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526109a99084906109bf565b505050565b60006109b930610a91565b15905090565b6000610a14826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610aa09092919063ffffffff16565b8051909150156109a95780806020019051810190610a329190610d74565b6109a95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103b9565b6001600160a01b03163b151590565b6060610aaf8484600085610ab9565b90505b9392505050565b606082471015610b1a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103b9565b610b2385610a91565b610b6f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103b9565b600080866001600160a01b03168587604051610b8b9190610dc6565b60006040518083038185875af1925050503d8060008114610bc8576040519150601f19603f3d011682016040523d82523d6000602084013e610bcd565b606091505b5091509150610bdd828286610be8565b979650505050505050565b60608315610bf7575081610ab2565b825115610c075782518084602001fd5b8160405162461bcd60e51b81526004016103b99190610de2565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461042a57600080fd5b600080600080600060a08688031215610c6257600080fd5b8535610c6d81610c35565b94506020860135610c7d81610c35565b94979496505050506040830135926060810135926080909101359150565b600060208284031215610cad57600080fd5b8135610ab281610c35565b634e487b7160e01b600052601160045260246000fd5b600082821015610ce057610ce0610cb8565b500390565b600060208284031215610cf757600080fd5b5051919050565b60008219821115610d1157610d11610cb8565b500190565b6000816000190483118215151615610d3057610d30610cb8565b500290565b600082610d5257634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610d6957600080fd5b8151610ab281610c35565b600060208284031215610d8657600080fd5b81518015158114610ab257600080fd5b60005b83811015610db1578181015183820152602001610d99565b83811115610dc0576000848401525b50505050565b60008251610dd8818460208701610d96565b9190910192915050565b6020815260008251806020840152610e01816040850160208701610d96565b601f01601f1916919091016040019291505056fea26469706673582212202596b60cec3ab09ec1007315447f309cc918aec1e4ec7ac4f36bf0ff52e47eec64736f6c63430008090033";

type VestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vesting__factory extends ContractFactory {
  constructor(...args: VestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vesting";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vesting> {
    return super.deploy(overrides || {}) as Promise<Vesting>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static readonly contractName: "Vesting";
  public readonly contractName: "Vesting";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingInterface {
    return new utils.Interface(_abi) as VestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}
