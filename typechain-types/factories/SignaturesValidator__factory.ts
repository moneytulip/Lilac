/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SignaturesValidator,
  SignaturesValidatorInterface,
} from "../SignaturesValidator";

const _abi = [
  {
    inputs: [],
    name: "getDomainSeparator",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getNextNonce",
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

export class SignaturesValidator__factory {
  static readonly abi = _abi;
  static createInterface(): SignaturesValidatorInterface {
    return new utils.Interface(_abi) as SignaturesValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignaturesValidator {
    return new Contract(address, _abi, signerOrProvider) as SignaturesValidator;
  }
}
