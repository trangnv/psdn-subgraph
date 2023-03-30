import { Transfer as TransferEvent } from "../generated/PSDN/PSDN";
import { Transaction } from "../generated/schema";

export function handleTransaction(event: TransferEvent): void {
  let entity = new Transaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.src = event.params.src;
  entity.dst = event.params.dst;
  entity.wad = event.params.wad;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // factory = Factory.load(BigInt.fromI32(1));
  // let factory = Factory.load("1");

  entity.save();
}
