/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapMigrator, SwapMigratorInterface } from "../SwapMigrator";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "oldPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "oldPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "newPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "newPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "underlyingTokens",
            type: "address[]",
          },
        ],
        internalType: "struct SwapMigrator.MigrationData",
        name: "usdData_",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "migrateUSDPool",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdPoolMigrationData",
    outputs: [
      {
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "oldPoolLPTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "newPoolLPTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014c3380380620014c38339810160408190526200003491620006ce565b6020820151825160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b390604401602060405180830381600087803b1580156200008757600080fd5b505af11580156200009c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c2919062000827565b5060005b82608001515181101562000134576200011f836040015160001985608001518481518110620000f957620000f96200084b565b60200260200101516001600160a01b0316620001d860201b620003d2179092919060201c565b806200012b8162000861565b915050620000c6565b508151600080546001600160a01b03199081166001600160a01b0393841617825560208086015160018054841691861691909117905560408601516002805484169186169190911790556060860151600380549093169416939093179055608084015180518593620001ac92600492910190620005ae565b5050600580546001600160a01b0319166001600160a01b039390931692909217909155506200092b9050565b801580620002665750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200022957600080fd5b505afa1580156200023e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200026491906200088b565b155b620002de5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620003369185916200033b16565b505050565b600062000397826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200041960201b62000594179092919060201c565b805190915015620003365780806020019051810190620003b8919062000827565b620003365760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620002d5565b60606200042a848460008562000434565b90505b9392505050565b606082471015620004975760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620002d5565b6001600160a01b0385163b620004f05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620002d5565b600080866001600160a01b031685876040516200050e9190620008d8565b60006040518083038185875af1925050503d80600081146200054d576040519150601f19603f3d011682016040523d82523d6000602084013e62000552565b606091505b5090925090506200056582828662000570565b979650505050505050565b60608315620005815750816200042d565b825115620005925782518084602001fd5b8160405162461bcd60e51b8152600401620002d59190620008f6565b82805482825590600052602060002090810192821562000606579160200282015b828111156200060657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620005cf565b506200061492915062000618565b5090565b5b8082111562000614576000815560010162000619565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200066a576200066a6200062f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200069b576200069b6200062f565b604052919050565b6001600160a01b0381168114620006b957600080fd5b50565b8051620006c981620006a3565b919050565b60008060408385031215620006e257600080fd5b82516001600160401b0380821115620006fa57600080fd5b9084019060a082870312156200070f57600080fd5b6200071962000645565b82516200072681620006a3565b81526020838101516200073981620006a3565b8282015260408401516200074d81620006a3565b604083015260608401516200076281620006a3565b60608301526080840151838111156200077a57600080fd5b80850194505087601f8501126200079057600080fd5b835183811115620007a557620007a56200062f565b8060051b9350620007b882850162000670565b818152938501820193828101908a861115620007d357600080fd5b958301955b85871015620008015786519250620007f083620006a3565b8282529583019590830190620007d8565b8060808601525050508195506200081a818801620006bc565b9450505050509250929050565b6000602082840312156200083a57600080fd5b815180151581146200042d57600080fd5b634e487b7160e01b600052603260045260246000fd5b60006000198214156200088457634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200089e57600080fd5b5051919050565b60005b83811015620008c2578181015183820152602001620008a8565b83811115620008d2576000848401525b50505050565b60008251620008ec818460208701620008a5565b9190910192915050565b602081526000825180602084015262000917816040850160208701620008a5565b601f01601f19169190910160400192915050565b610b88806200093b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806334d3c307146100515780634fdf5d1d146100af5780638da5cb5b146100c4578063f0b312c0146100ef575b600080fd5b600054600154600254600354610077936001600160a01b03908116938116928116911684565b604080516001600160a01b03958616815293851660208501529184169183019190915290911660608201526080015b60405180910390f35b6100c26100bd3660046108cb565b610110565b005b6005546100d7906001600160a01b031681565b6040516001600160a01b0390911681526020016100a6565b6101026100fd366004610904565b61021a565b6040519081526020016100a6565b6005546001600160a01b0316331461016f5760405162461bcd60e51b815260206004820152600c60248201527f6973206e6f74206f776e6572000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526102169082906001600160a01b038516906370a082319060240160206040518083038186803b1580156101cd57600080fd5b505afa1580156101e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102059190610926565b6001600160a01b03851691906105ad565b5050565b600154600090610235906001600160a01b03163330866105f6565b600080546004546001600160a01b03909116906331cd52b090869067ffffffffffffffff8111156102685761026861093f565b604051908082528060200260200182016040528015610291578160200160208202803683370190505b506000196040518463ffffffff1660e01b81526004016102b3939291906109a9565b600060405180830381600087803b1580156102cd57600080fd5b505af11580156102e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261030991908101906109d2565b6002546040517f4d49e87d0000000000000000000000000000000000000000000000000000000081529192506000916001600160a01b0390911690634d49e87d9061035e908590889060001990600401610a90565b602060405180830381600087803b15801561037857600080fd5b505af115801561038c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b09190610926565b6003549091506103ca906001600160a01b031633836105ad565b949350505050565b80158061047457506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561043a57600080fd5b505afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610926565b155b6104e65760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610166565b6040516001600160a01b03831660248201526044810182905261058f9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261064d565b505050565b60606105a38484600085610732565b90505b9392505050565b6040516001600160a01b03831660248201526044810182905261058f9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161052b565b6040516001600160a01b03808516602483015283166044820152606481018290526106479085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161052b565b50505050565b60006106a2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166105949092919063ffffffff16565b80519091501561058f57808060200190518101906106c09190610ab5565b61058f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610166565b6060824710156107aa5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610166565b6001600160a01b0385163b6108015760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610166565b600080866001600160a01b0316858760405161081d9190610b03565b60006040518083038185875af1925050503d806000811461085a576040519150601f19603f3d011682016040523d82523d6000602084013e61085f565b606091505b509150915061086f82828661087a565b979650505050505050565b606083156108895750816105a6565b8251156108995782518084602001fd5b8160405162461bcd60e51b81526004016101669190610b1f565b6001600160a01b03811681146108c857600080fd5b50565b600080604083850312156108de57600080fd5b82356108e9816108b3565b915060208301356108f9816108b3565b809150509250929050565b6000806040838503121561091757600080fd5b50508035926020909101359150565b60006020828403121561093857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081518084526020808501945080840160005b8381101561099e57815187529582019590820190600101610982565b509495945050505050565b8381526060602082015260006109c2606083018561096e565b9050826040830152949350505050565b600060208083850312156109e557600080fd5b825167ffffffffffffffff808211156109fd57600080fd5b818501915085601f830112610a1157600080fd5b815181811115610a2357610a2361093f565b8060051b604051601f19603f83011681018181108582111715610a4857610a4861093f565b604052918252848201925083810185019188831115610a6657600080fd5b938501935b82851015610a8457845184529385019392850192610a6b565b98975050505050505050565b606081526000610aa3606083018661096e565b60208301949094525060400152919050565b600060208284031215610ac757600080fd5b815180151581146105a657600080fd5b60005b83811015610af2578181015183820152602001610ada565b838111156106475750506000910152565b60008251610b15818460208701610ad7565b9190910192915050565b6020815260008251806020840152610b3e816040850160208701610ad7565b601f01601f1916919091016040019291505056fea2646970667358221220acb71895fb364d7a6b35f194ef4049123eed59350938b07dce60cf8ab260d0e164736f6c63430008090033";

type SwapMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapMigrator__factory extends ContractFactory {
  constructor(...args: SwapMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SwapMigrator";
  }

  deploy(
    usdData_: SwapMigrator.MigrationDataStruct,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapMigrator> {
    return super.deploy(
      usdData_,
      owner_,
      overrides || {}
    ) as Promise<SwapMigrator>;
  }
  getDeployTransaction(
    usdData_: SwapMigrator.MigrationDataStruct,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(usdData_, owner_, overrides || {});
  }
  attach(address: string): SwapMigrator {
    return super.attach(address) as SwapMigrator;
  }
  connect(signer: Signer): SwapMigrator__factory {
    return super.connect(signer) as SwapMigrator__factory;
  }
  static readonly contractName: "SwapMigrator";
  public readonly contractName: "SwapMigrator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapMigratorInterface {
    return new utils.Interface(_abi) as SwapMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapMigrator {
    return new Contract(address, _abi, signerOrProvider) as SwapMigrator;
  }
}