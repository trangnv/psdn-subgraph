// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DelegateChanged extends ethereum.Event {
  get params(): DelegateChanged__Params {
    return new DelegateChanged__Params(this);
  }
}

export class DelegateChanged__Params {
  _event: DelegateChanged;

  constructor(event: DelegateChanged) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromDelegate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get toDelegate(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DelegateVotesChanged extends ethereum.Event {
  get params(): DelegateVotesChanged__Params {
    return new DelegateVotesChanged__Params(this);
  }
}

export class DelegateVotesChanged__Params {
  _event: DelegateVotesChanged;

  constructor(event: DelegateVotesChanged) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newBalance(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogNote extends ethereum.Event {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get foo(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get wad(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fax(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class LogSetAuthority extends ethereum.Event {
  get params(): LogSetAuthority__Params {
    return new LogSetAuthority__Params(this);
  }
}

export class LogSetAuthority__Params {
  _event: LogSetAuthority;

  constructor(event: LogSetAuthority) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSetOwner extends ethereum.Event {
  get params(): LogSetOwner__Params {
    return new LogSetOwner__Params(this);
  }
}

export class LogSetOwner__Params {
  _event: LogSetOwner;

  constructor(event: LogSetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get dst(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PSDN__checkpointsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getFromBlock(): BigInt {
    return this.value0;
  }

  getVotes(): BigInt {
    return this.value1;
  }
}

export class PSDN extends ethereum.SmartContract {
  static bind(address: Address): PSDN {
    return new PSDN("PSDN", address);
  }

  DELEGATION_TYPEHASH(): Bytes {
    let result = super.call(
      "DELEGATION_TYPEHASH",
      "DELEGATION_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DELEGATION_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DELEGATION_TYPEHASH",
      "DELEGATION_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DOMAIN_TYPEHASH(): Bytes {
    let result = super.call(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  allowance(src: Address, guy: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(src), ethereum.Value.fromAddress(guy)]
    );

    return result[0].toBigInt();
  }

  try_allowance(src: Address, guy: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(src), ethereum.Value.fromAddress(guy)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(guy: Address, wad: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(guy),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_approve(guy: Address, wad: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(guy),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approve1(guy: Address): boolean {
    let result = super.call("approve", "approve(address):(bool)", [
      ethereum.Value.fromAddress(guy)
    ]);

    return result[0].toBoolean();
  }

  try_approve1(guy: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address):(bool)", [
      ethereum.Value.fromAddress(guy)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authority(): Address {
    let result = super.call("authority", "authority():(address)", []);

    return result[0].toAddress();
  }

  try_authority(): ethereum.CallResult<Address> {
    let result = super.tryCall("authority", "authority():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(src: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(src)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(src: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(src)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkpoints(param0: Address, param1: BigInt): PSDN__checkpointsResult {
    let result = super.call(
      "checkpoints",
      "checkpoints(address,uint32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new PSDN__checkpointsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_checkpoints(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<PSDN__checkpointsResult> {
    let result = super.tryCall(
      "checkpoints",
      "checkpoints(address,uint32):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PSDN__checkpointsResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  decimals(): BigInt {
    let result = super.call("decimals", "decimals():(uint256)", []);

    return result[0].toBigInt();
  }

  try_decimals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("decimals", "decimals():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  delegates(param0: Address): Address {
    let result = super.call("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_delegates(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCurrentVotes(account: Address): BigInt {
    let result = super.call(
      "getCurrentVotes",
      "getCurrentVotes(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getCurrentVotes(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentVotes",
      "getCurrentVotes(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPriorVotes(account: Address, blockNumber: BigInt): BigInt {
    let result = super.call(
      "getPriorVotes",
      "getPriorVotes(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );

    return result[0].toBigInt();
  }

  try_getPriorVotes(
    account: Address,
    blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPriorVotes",
      "getPriorVotes(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonces(param0: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numCheckpoints(param0: Address): BigInt {
    let result = super.call(
      "numCheckpoints",
      "numCheckpoints(address):(uint32)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_numCheckpoints(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numCheckpoints",
      "numCheckpoints(address):(uint32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(dst: Address, wad: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(dst: Address, wad: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(src: Address, dst: Address, wad: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(wad)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    src: Address,
    dst: Address,
    wad: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(wad)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Approve1Call extends ethereum.Call {
  get inputs(): Approve1Call__Inputs {
    return new Approve1Call__Inputs(this);
  }

  get outputs(): Approve1Call__Outputs {
    return new Approve1Call__Outputs(this);
  }
}

export class Approve1Call__Inputs {
  _call: Approve1Call;

  constructor(call: Approve1Call) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Approve1Call__Outputs {
  _call: Approve1Call;

  constructor(call: Approve1Call) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class Burn1Call extends ethereum.Call {
  get inputs(): Burn1Call__Inputs {
    return new Burn1Call__Inputs(this);
  }

  get outputs(): Burn1Call__Outputs {
    return new Burn1Call__Outputs(this);
  }
}

export class Burn1Call__Inputs {
  _call: Burn1Call;

  constructor(call: Burn1Call) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Burn1Call__Outputs {
  _call: Burn1Call;

  constructor(call: Burn1Call) {
    this._call = call;
  }
}

export class DelegateCall extends ethereum.Call {
  get inputs(): DelegateCall__Inputs {
    return new DelegateCall__Inputs(this);
  }

  get outputs(): DelegateCall__Outputs {
    return new DelegateCall__Outputs(this);
  }
}

export class DelegateCall__Inputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelegateCall__Outputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }
}

export class DelegateBySigCall extends ethereum.Call {
  get inputs(): DelegateBySigCall__Inputs {
    return new DelegateBySigCall__Inputs(this);
  }

  get outputs(): DelegateBySigCall__Outputs {
    return new DelegateBySigCall__Outputs(this);
  }
}

export class DelegateBySigCall__Inputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class DelegateBySigCall__Outputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class Mint1Call extends ethereum.Call {
  get inputs(): Mint1Call__Inputs {
    return new Mint1Call__Inputs(this);
  }

  get outputs(): Mint1Call__Outputs {
    return new Mint1Call__Outputs(this);
  }
}

export class Mint1Call__Inputs {
  _call: Mint1Call;

  constructor(call: Mint1Call) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Mint1Call__Outputs {
  _call: Mint1Call;

  constructor(call: Mint1Call) {
    this._call = call;
  }
}

export class MoveCall extends ethereum.Call {
  get inputs(): MoveCall__Inputs {
    return new MoveCall__Inputs(this);
  }

  get outputs(): MoveCall__Outputs {
    return new MoveCall__Outputs(this);
  }
}

export class MoveCall__Inputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MoveCall__Outputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }
}

export class PullCall extends ethereum.Call {
  get inputs(): PullCall__Inputs {
    return new PullCall__Inputs(this);
  }

  get outputs(): PullCall__Outputs {
    return new PullCall__Outputs(this);
  }
}

export class PullCall__Inputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PullCall__Outputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }
}

export class PushCall extends ethereum.Call {
  get inputs(): PushCall__Inputs {
    return new PushCall__Inputs(this);
  }

  get outputs(): PushCall__Outputs {
    return new PushCall__Outputs(this);
  }
}

export class PushCall__Inputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PushCall__Outputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }
}

export class SetAuthorityCall extends ethereum.Call {
  get inputs(): SetAuthorityCall__Inputs {
    return new SetAuthorityCall__Inputs(this);
  }

  get outputs(): SetAuthorityCall__Outputs {
    return new SetAuthorityCall__Outputs(this);
  }
}

export class SetAuthorityCall__Inputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }

  get authority_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorityCall__Outputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get owner_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class StartCall extends ethereum.Call {
  get inputs(): StartCall__Inputs {
    return new StartCall__Inputs(this);
  }

  get outputs(): StartCall__Outputs {
    return new StartCall__Outputs(this);
  }
}

export class StartCall__Inputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }
}

export class StartCall__Outputs {
  _call: StartCall;

  constructor(call: StartCall) {
    this._call = call;
  }
}

export class StopCall extends ethereum.Call {
  get inputs(): StopCall__Inputs {
    return new StopCall__Inputs(this);
  }

  get outputs(): StopCall__Outputs {
    return new StopCall__Outputs(this);
  }
}

export class StopCall__Inputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class StopCall__Outputs {
  _call: StopCall;

  constructor(call: StopCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
