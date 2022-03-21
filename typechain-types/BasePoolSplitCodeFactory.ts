/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BasePoolSplitCodeFactoryInterface extends utils.Interface {
  contractName: "BasePoolSplitCodeFactory";
  functions: {
    "getCreationCode()": FunctionFragment;
    "getCreationCodeContracts()": FunctionFragment;
    "getVault()": FunctionFragment;
    "isPoolFromFactory(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCreationCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationCodeContracts",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCreationCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationCodeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory",
    data: BytesLike
  ): Result;

  events: {
    "PoolCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export type PoolCreatedEvent = TypedEvent<[string], { pool: string }>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface BasePoolSplitCodeFactory extends BaseContract {
  contractName: "BasePoolSplitCodeFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasePoolSplitCodeFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCreationCode(overrides?: CallOverrides): Promise<[string]>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & { contractA: string; contractB: string }>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getCreationCode(overrides?: CallOverrides): Promise<string>;

  getCreationCodeContracts(
    overrides?: CallOverrides
  ): Promise<[string, string] & { contractA: string; contractB: string }>;

  getVault(overrides?: CallOverrides): Promise<string>;

  isPoolFromFactory(pool: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getCreationCode(overrides?: CallOverrides): Promise<string>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & { contractA: string; contractB: string }>;

    getVault(overrides?: CallOverrides): Promise<string>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "PoolCreated(address)"(pool?: string | null): PoolCreatedEventFilter;
    PoolCreated(pool?: string | null): PoolCreatedEventFilter;
  };

  estimateGas: {
    getCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    getCreationCodeContracts(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPoolFromFactory(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
