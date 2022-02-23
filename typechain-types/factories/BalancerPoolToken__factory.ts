/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerPoolToken,
  BalancerPoolTokenInterface,
} from "../BalancerPoolToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101806040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b50604051620014cc380380620014cc8339810160408190526200005a91620002c2565b8280604051806040016040528060018152602001603160f81b81525085858160039080519060200190620000909291906200014f565b508051620000a69060049060208401906200014f565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c0948501909152815191909601209052929092526101205250506001600160a01b031661016052506200038c9050565b8280546200015d906200034f565b90600052602060002090601f016020900481019282620001815760008555620001cc565b82601f106200019c57805160ff1916838001178555620001cc565b82800160010185558215620001cc579182015b82811115620001cc578251825591602001919060010190620001af565b50620001da929150620001de565b5090565b5b80821115620001da5760008155600101620001df565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021d57600080fd5b81516001600160401b03808211156200023a576200023a620001f5565b604051601f8301601f19908116603f01168101908282118183101715620002655762000265620001f5565b816040528381526020925086838588010111156200028257600080fd5b600091505b83821015620002a6578582018301518183018401529082019062000287565b83821115620002b85760008385830101525b9695505050505050565b600080600060608486031215620002d857600080fd5b83516001600160401b0380821115620002f057600080fd5b620002fe878388016200020b565b945060208601519150808211156200031557600080fd5b5062000324868287016200020b565b604086015190935090506001600160a01b03811681146200034457600080fd5b809150509250925092565b600181811c908216806200036457607f821691505b602082108114156200038657634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161014051610160516110d3620003f9600039600081816101d301526105a10152600061048d01526000610a1a01526000610a6901526000610a440152600061099d015260006109c7015260006109f101526110d36000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610205578063a9059cbb14610218578063d505accf1461022b578063dd62ed3e1461024057600080fd5b806370a082311461018a5780637ecebe00146101b35780638d928af8146101c657806395d89b41146101fd57600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce567146101605780633644e5151461016f578063395093511461017757600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610253565b60405161010f9190610e6e565b60405180910390f35b61012b610126366004610edf565b6102e5565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610f09565b6102ff565b6040516012815260200161010f565b61013f61037a565b61012b610185366004610edf565b610389565b61013f610198366004610f45565b6001600160a01b031660009081526020819052604090205490565b61013f6101c1366004610f45565b6103c3565b6040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016815260200161010f565b6101026103e1565b61012b610213366004610edf565b6103f0565b61012b610226366004610edf565b610426565b61023e610239366004610f67565b610434565b005b61013f61024e366004610fda565b61059d565b6060600380546102629061100d565b80601f016020809104026020016040519081016040528092919081815260200182805461028e9061100d565b80156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b5050505050905090565b6000336102f381858561060e565b60019150505b92915050565b60008061030c853361059d565b9050610330336001600160a01b03871614806103285750838210155b61019e610766565b61033b858585610778565b336001600160a01b0386161480159061035657506000198114155b1561036f5761036f853361036a8685611058565b61060e565b506001949350505050565b6000610384610990565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102f3908290869061036a90879061106f565b6001600160a01b0381166000908152600560205260408120546102f9565b6060600480546102629061100d565b6000806103fd338561059d565b9050808310610417576104123385600061060e565b6102f3565b6102f3338561036a8685611058565b6000336102f3818585610778565b834211156104895760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000008888886104b88c610ab7565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061051382610adf565b9050600061052382878787610b48565b9050896001600160a01b0316816001600160a01b0316146105865760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610480565b6105918a8a8a61060e565b50505050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156105e257506000196102f9565b506001600160a01b038281166000908152600160209081526040808320938516835292905220546102f9565b6001600160a01b0383166106895760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b0382166107055760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b816107745761077481610b70565b5050565b6001600160a01b0383166107f45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b0382166108705760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b038316600090815260208190526040902054818110156108ff5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610480565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061093690849061106f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161098291815260200190565b60405180910390a350505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156109e957507f000000000000000000000000000000000000000000000000000000000000000046145b15610a1357507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b60006102f9610aec610990565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610b5987878787610bc3565b91509150610b6681610cb0565b5095945050505050565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610bfa5750600090506003610ca7565b8460ff16601b14158015610c1257508460ff16601c14155b15610c235750600090506004610ca7565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c77573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ca057600060019250925050610ca7565b9150600090505b94509492505050565b6000816004811115610cc457610cc4611087565b1415610ccd5750565b6001816004811115610ce157610ce1611087565b1415610d2f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610480565b6002816004811115610d4357610d43611087565b1415610d915760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610480565b6003816004811115610da557610da5611087565b1415610dfe5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610480565b6004816004811115610e1257610e12611087565b1415610e6b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610480565b50565b600060208083528351808285015260005b81811015610e9b57858101830151858201604001528201610e7f565b81811115610ead576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610eda57600080fd5b919050565b60008060408385031215610ef257600080fd5b610efb83610ec3565b946020939093013593505050565b600080600060608486031215610f1e57600080fd5b610f2784610ec3565b9250610f3560208501610ec3565b9150604084013590509250925092565b600060208284031215610f5757600080fd5b610f6082610ec3565b9392505050565b600080600080600080600060e0888a031215610f8257600080fd5b610f8b88610ec3565b9650610f9960208901610ec3565b95506040880135945060608801359350608088013560ff81168114610fbd57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610fed57600080fd5b610ff683610ec3565b915061100460208401610ec3565b90509250929050565b600181811c9082168061102157607f821691505b60208210811415610ad957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561106a5761106a611042565b500390565b6000821982111561108257611082611042565b500190565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220892acedb134102f82795720b61d7e89196342fa2e6e3c2de2cccae958386be4964736f6c63430008090033";

type BalancerPoolTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerPoolTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerPoolToken__factory extends ContractFactory {
  constructor(...args: BalancerPoolTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BalancerPoolToken";
  }

  deploy(
    tokenName: string,
    tokenSymbol: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancerPoolToken> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      vault,
      overrides || {}
    ) as Promise<BalancerPoolToken>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      vault,
      overrides || {}
    );
  }
  attach(address: string): BalancerPoolToken {
    return super.attach(address) as BalancerPoolToken;
  }
  connect(signer: Signer): BalancerPoolToken__factory {
    return super.connect(signer) as BalancerPoolToken__factory;
  }
  static readonly contractName: "BalancerPoolToken";
  public readonly contractName: "BalancerPoolToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerPoolTokenInterface {
    return new utils.Interface(_abi) as BalancerPoolTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerPoolToken {
    return new Contract(address, _abi, signerOrProvider) as BalancerPoolToken;
  }
}