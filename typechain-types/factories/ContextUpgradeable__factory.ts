/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ContextUpgradeable,
  ContextUpgradeableInterface,
} from "../ContextUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "_initialized",
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
];

export class ContextUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ContextUpgradeableInterface {
    return new utils.Interface(_abi) as ContextUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContextUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as ContextUpgradeable;
  }
}