/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneralizedSwapMigrator,
  GeneralizedSwapMigratorInterface,
} from "../GeneralizedSwapMigrator";

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
        indexed: true,
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "newPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "oldPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "newPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]",
          },
        ],
        indexed: false,
        internalType: "struct GeneralizedSwapMigrator.MigrationData",
        name: "mData",
        type: "tuple",
      },
    ],
    name: "AddMigrationData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "migrator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLPTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLPTokenAmount",
        type: "uint256",
      },
    ],
    name: "Migrate",
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
    inputs: [
      {
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "newPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "oldPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "newPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]",
          },
        ],
        internalType: "struct GeneralizedSwapMigrator.MigrationData",
        name: "mData",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "addMigrationData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
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
    name: "migrate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "migrationMap",
    outputs: [
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "oldPoolLPTokenAddress",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6119888061007e6000396000f3fe60806040526004361061007b5760003560e01c8063d2423b511161004e578063d2423b5114610104578063e36ad77e14610117578063f2fde38b1461018d578063fc22d0e5146101ad57600080fd5b80634fdf5d1d146100805780636f731330146100a2578063715018a6146100c25780638da5cb5b146100d7575b600080fd5b34801561008c57600080fd5b506100a061009b36600461122b565b6101db565b005b3480156100ae57600080fd5b506100a06100bd366004611316565b6102a0565b3480156100ce57600080fd5b506100a0610844565b3480156100e357600080fd5b506000546040516001600160a01b0390911681526020015b60405180910390f35b6100a0610112366004611444565b61087a565b34801561012357600080fd5b506101636101323660046114ca565b60016020819052600091825260409091208054918101546002909101546001600160a01b0392831692918216911683565b604080516001600160a01b03948516815292841660208401529216918101919091526060016100fb565b34801561019957600080fd5b506100a06101a83660046114ca565b61094d565b3480156101b957600080fd5b506101cd6101c83660046114e7565b6109e8565b6040519081526020016100fb565b6000546001600160a01b0316331461020e5760405162461bcd60e51b81526004016102059061151c565b60405180910390fd5b6040516370a0823160e01b815230600482015261029c9082906001600160a01b038516906370a082319060240160206040518083038186803b15801561025357600080fd5b505afa158015610267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028b9190611551565b6001600160a01b0385169190610cd0565b5050565b6000546001600160a01b031633146102ca5760405162461bcd60e51b81526004016102059061151c565b8061034c576001600160a01b0383811660009081526001602081905260409091200154161561034c5760405162461bcd60e51b815260206004820152602860248201527f63616e6e6f74206f7665727772697465206578697374696e67206d6967726174604482015267696f6e206461746160c01b6064820152608401610205565b60208201516001600160a01b03166103a65760405162461bcd60e51b815260206004820152601a60248201527f6f6c64506f6f6c4c50546f6b656e41646472657373203d3d20300000000000006044820152606401610205565b60408201516001600160a01b03166104005760405162461bcd60e51b815260206004820152601a60248201527f6e6577506f6f6c4c50546f6b656e41646472657373203d3d20300000000000006044820152606401610205565b60005b60208160ff1610156106725760405162415c3360e91b815260ff821660048201526000906001600160a01b038616906382b866009060240160206040518083038186803b15801561045357600080fd5b505afa925050508015610483575060408051601f3d908101601f191682019092526104809181019061156a565b60015b6104b25760008260ff16116104aa5760405162461bcd60e51b815260040161020590611587565b5060006104b5565b90505b835160405162415c3360e91b815260ff841660048201526001600160a01b03909116906382b866009060240160206040518083038186803b1580156104f957600080fd5b505afa925050508015610529575060408051601f3d908101601f191682019092526105269181019061156a565b60015b6105c05760008260ff16116105505760405162461bcd60e51b815260040161020590611587565b6001600160a01b03811615801561056e57508360600151518260ff16145b6105ba5760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f206d6174636820746f6b656e73206c69737400000000006044820152606401610205565b50610672565b806001600160a01b0316826001600160a01b0316148015610612575084606001518360ff16815181106105f5576105f56115d2565b60200260200101516001600160a01b0316826001600160a01b0316145b61065e5760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f206d6174636820746f6b656e73206c69737400000000006044820152606401610205565b50508061066a816115fe565b915050610403565b506001600160a01b03808416600090815260016020818152604092839020865181549086166001600160a01b03199182161782558288015193820180549487169482169490941790935592860151600284018054919095169216919091179092556060840151805185936106ed92600385019291019061119c565b505050602082015160405163095ea7b360e01b81526001600160a01b03858116600483015260001960248301529091169063095ea7b390604401602060405180830381600087803b15801561074157600080fd5b505af1158015610755573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610779919061161e565b5060005b8260600151518110156107fd576107ca83600001516000856060015184815181106107aa576107aa6115d2565b60200260200101516001600160a01b0316610d389092919063ffffffff16565b6107eb8360000151600019856060015184815181106107aa576107aa6115d2565b806107f58161163b565b91505061077d565b50826001600160a01b03167f3a4863f22c4536b6b3a7e8989396b0b2f9c10de870d877ec333df6cfec568d30836040516108379190611656565b60405180910390a2505050565b6000546001600160a01b0316331461086e5760405162461bcd60e51b81526004016102059061151c565b6108786000610e5c565b565b60005b82811015610947576000803086868581811061089b5761089b6115d2565b90506020028101906108ad91906116d6565b6040516108bb929190611724565b600060405180830381855af49150503d80600081146108f6576040519150601f19603f3d011682016040523d82523d6000602084013e6108fb565b606091505b50915091508115801561090b5750835b156109325761091981610eac565b60405162461bcd60e51b81526004016102059190611760565b5050808061093f9061163b565b91505061087d565b50505050565b6000546001600160a01b031633146109775760405162461bcd60e51b81526004016102059061151c565b6001600160a01b0381166109dc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610205565b6109e581610e5c565b50565b6001600160a01b0380841660009081526001602081815260408084208151608081018352815487168152938101548616848401526002810154909516838201526003850180548251818502810185019093528083529495869590936060860193929190830182828015610a8457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a66575b5050509190925250505060208101519091506001600160a01b0316610aeb5760405162461bcd60e51b815260206004820152601a60248201527f6d6967726174696f6e206973206e6f7420617661696c61626c650000000000006044820152606401610205565b6020810151610b05906001600160a01b0316333087610f11565b6000856001600160a01b03166331cd52b08684606001515167ffffffffffffffff811115610b3557610b35611264565b604051908082528060200260200182016040528015610b5e578160200160208202803683370190505b506000196040518463ffffffff1660e01b8152600401610b80939291906117ce565b600060405180830381600087803b158015610b9a57600080fd5b505af1158015610bae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bd691908101906117f7565b9050600082600001516001600160a01b0316634d49e87d83876000196040518463ffffffff1660e01b8152600401610c109392919061187d565b602060405180830381600087803b158015610c2a57600080fd5b505af1158015610c3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c629190611551565b6040840151909150610c7e906001600160a01b03163383610cd0565b60408051878152602081018390526001600160a01b0389169133917fd616b8856fa5febbdb06f07dd8d624380d02864619f3b796002f43bc36a4d1bc910160405180910390a3925050505b9392505050565b6040516001600160a01b038316602482015260448101829052610d3390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f49565b505050565b801580610dc15750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610d8757600080fd5b505afa158015610d9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbf9190611551565b155b610e2c5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610205565b6040516001600160a01b038316602482015260448101829052610d3390849063095ea7b360e01b90606401610cfc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060604482511015610ef157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60048201915081806020019051810190610f0b91906118a2565b92915050565b6040516001600160a01b03808516602483015283166044820152606481018290526109479085906323b872dd60e01b90608401610cfc565b6000610f9e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661101b9092919063ffffffff16565b805190915015610d335780806020019051810190610fbc919061161e565b610d335760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610205565b606061102a8484600085611032565b949350505050565b6060824710156110935760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610205565b6001600160a01b0385163b6110ea5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610205565b600080866001600160a01b031685876040516111069190611936565b60006040518083038185875af1925050503d8060008114611143576040519150601f19603f3d011682016040523d82523d6000602084013e611148565b606091505b5091509150611158828286611163565b979650505050505050565b60608315611172575081610cc9565b8251156111825782518084602001fd5b8160405162461bcd60e51b81526004016102059190611760565b8280548282559060005260206000209081019282156111f1579160200282015b828111156111f157825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906111bc565b506111fd929150611201565b5090565b5b808211156111fd5760008155600101611202565b6001600160a01b03811681146109e557600080fd5b6000806040838503121561123e57600080fd5b823561124981611216565b9150602083013561125981611216565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561129d5761129d611264565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112cc576112cc611264565b604052919050565b600067ffffffffffffffff8211156112ee576112ee611264565b5060051b60200190565b80151581146109e557600080fd5b8035611311816112f8565b919050565b60008060006060848603121561132b57600080fd5b833561133681611216565b925060208481013567ffffffffffffffff8082111561135457600080fd5b908601906080828903121561136857600080fd5b61137061127a565b823561137b81611216565b81528284013561138a81611216565b81850152604083013561139c81611216565b60408201526060830135828111156113b357600080fd5b80840193505088601f8401126113c857600080fd5b823591506113dd6113d8836112d4565b6112a3565b82815260059290921b8301840191848101908a8411156113fc57600080fd5b938501935b8385101561142357843561141481611216565b82529385019390850190611401565b606083015250945061143b9250505060408501611306565b90509250925092565b60008060006040848603121561145957600080fd5b833567ffffffffffffffff8082111561147157600080fd5b818601915086601f83011261148557600080fd5b81358181111561149457600080fd5b8760208260051b85010111156114a957600080fd5b602092830195509350508401356114bf816112f8565b809150509250925092565b6000602082840312156114dc57600080fd5b8135610cc981611216565b6000806000606084860312156114fc57600080fd5b833561150781611216565b95602085013595506040909401359392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006020828403121561156357600080fd5b5051919050565b60006020828403121561157c57600080fd5b8151610cc981611216565b6020808252602b908201527f4661696c656420746f2067657420746f6b656e7320756e6465726c79696e672060408201526a2634b630b1903837b7b61760a91b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff811415611615576116156115e8565b60010192915050565b60006020828403121561163057600080fd5b8151610cc9816112f8565b600060001982141561164f5761164f6115e8565b5060010190565b6000602080835260a0830160018060a01b0380865116838601528083870151166040860152806040870151166060860152606086015160808087015282815180855260c0880191508583019450600092505b808310156116ca578451841682529385019360019290920191908501906116a8565b50979650505050505050565b6000808335601e198436030181126116ed57600080fd5b83018035915067ffffffffffffffff82111561170857600080fd5b60200191503681900382131561171d57600080fd5b9250929050565b8183823760009101908152919050565b60005b8381101561174f578181015183820152602001611737565b838111156109475750506000910152565b602081526000825180602084015261177f816040850160208701611734565b601f01601f19169190910160400192915050565b600081518084526020808501945080840160005b838110156117c3578151875295820195908201906001016117a7565b509495945050505050565b8381526060602082015260006117e76060830185611793565b9050826040830152949350505050565b6000602080838503121561180a57600080fd5b825167ffffffffffffffff81111561182157600080fd5b8301601f8101851361183257600080fd5b80516118406113d8826112d4565b81815260059190911b8201830190838101908783111561185f57600080fd5b928401925b8284101561115857835182529284019290840190611864565b6060815260006118906060830186611793565b60208301949094525060400152919050565b6000602082840312156118b457600080fd5b815167ffffffffffffffff808211156118cc57600080fd5b818401915084601f8301126118e057600080fd5b8151818111156118f2576118f2611264565b611905601f8201601f19166020016112a3565b915080825285602082850101111561191c57600080fd5b61192d816020840160208601611734565b50949350505050565b60008251611948818460208701611734565b919091019291505056fea26469706673582212200abdeb2d653bac283ab9368c59fcda9ecbad28ce221923636911609919b35e6764736f6c63430008090033";

type GeneralizedSwapMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneralizedSwapMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GeneralizedSwapMigrator__factory extends ContractFactory {
  constructor(...args: GeneralizedSwapMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GeneralizedSwapMigrator";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneralizedSwapMigrator> {
    return super.deploy(overrides || {}) as Promise<GeneralizedSwapMigrator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GeneralizedSwapMigrator {
    return super.attach(address) as GeneralizedSwapMigrator;
  }
  connect(signer: Signer): GeneralizedSwapMigrator__factory {
    return super.connect(signer) as GeneralizedSwapMigrator__factory;
  }
  static readonly contractName: "GeneralizedSwapMigrator";
  public readonly contractName: "GeneralizedSwapMigrator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneralizedSwapMigratorInterface {
    return new utils.Interface(_abi) as GeneralizedSwapMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneralizedSwapMigrator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GeneralizedSwapMigrator;
  }
}
