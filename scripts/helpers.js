const { ethers } = require("hardhat");

const PT_DEPOSIT_COLLATERAL = 1;
const PT_MINT_SYNTH = 2;
const PT_WITHDRAW_COLLATERAL = 3;
const PT_BURN_SYNTH = 4;
const PT_EXCHANGE = 5;
const PT_LIQUIDATE = 6;
const PT_BRIDGE_SYNTH = 7;

function getAddressPack(address) {
  const addressPacked = ethers.utils.solidityPack(["address"], [address]);
  return addressPacked;
}

function getPayloadForDeposit(account, collateralKey, amount) {
  const accountPacked = getAddressPack(account);
  const abiCoder = ethers.utils.defaultAbiCoder;

  const payload = abiCoder.encode(
    ["uint16", "bytes", "bytes32", "uint"],
    [PT_DEPOSIT_COLLATERAL, accountPacked, collateralKey, amount]
  );

  return payload;
}

function getPayloadForMint(account, synthKey, synthAmount) {
  const accountPacked = getAddressPack(account);
  const abiCoder = ethers.utils.defaultAbiCoder;

  const payload = abiCoder.encode(
    ["uint16", "bytes", "bytes32", "uint"],
    [PT_MINT_SYNTH, accountPacked, synthKey, synthAmount]
  );

  return payload;
}

function getPayloadForWithdraw(account, collateralKey, amount) {
  const accountPacked = getAddressPack(account);
  const abiCoder = ethers.utils.defaultAbiCoder;

  const payload = abiCoder.encode(["uint16", "bytes", "bytes32", "uint"], [PT_WITHDRAW_COLLATERAL, accountPacked, collateralKey, amount]);
  return payload;
}

function getPayloadForBurn(accountForSynth, synthKey, synthAmount) {
  const abiCoder = ethers.utils.defaultAbiCoder;
  const accountPacked = getAddressPack(accountForSynth);

  const payload = abiCoder.encode(["uint16", "bytes", "bytes32", "uint"], [3, accountPacked, synthKey, synthAmount]);
  return payload;
}

function getPayloadForExchange(fromAccount, sourceCurrencyKey, sourceAmount, destAccount, destCurrencyKey, destAmount, fee) {
  const abiCoder = ethers.utils.defaultAbiCoder;
  const fromPack = getAddressPack(fromAccount);
  const destPack = getAddressPack(destAccount);

  const payload = abiCoder.encode(
    ['uint16', 'bytes', 'bytes32', 'uint', 'bytes', 'bytes32', 'uint', 'uint'],
    [PT_EXCHANGE, fromPack, sourceCurrencyKey, sourceAmount, destPack, destCurrencyKey, destAmount, fee]
  )

  return payload;
}

function getPayloadForLiquidate(account, collateralKey, collateralAmount) {
  const abiCoder = ethers.utils.defaultAbiCoder;
  const accountPack = getAddressPack(account);

  const payload = abiCoder.encode(
    ['uint16', 'bytes', 'bytes32', 'uint'],
    [PT_LIQUIDATE, accountPack, collateralKey, collateralAmount]
  );
  return payload;
}

function getPayloadForBridge(account, synthKey, amount) {
  const abiCoder = ethers.utils.defaultAbiCoder;
  const accountPack = getAddressPack(account);

  const payload = abiCoder.encode(
    ['uint16', 'bytes', 'bytes32', 'uint'],
    [PT_BRIDGE_SYNTH, accountPack, synthKey, amount]
  );
  return payload;
}

function getPayloadForBridgeLightChain(account, synthKey, amount, chainId) {
  const abiCoder = ethers.utils.defaultAbiCoder;
  const accountPack = getAddressPack(account);

  const payload = abiCoder.encode(
    ['uint16', 'bytes', 'bytes32', 'uint', 'uint16'],
    [PT_BRIDGE_SYNTH, accountPack, synthKey, amount, chainId]
  );
  return payload;
}

module.exports = {
  getPayloadForDeposit,
  getPayloadForMint,
  getPayloadForWithdraw,
  getPayloadForBurn,
  getPayloadForExchange,
  getPayloadForLiquidate,
  getPayloadForBridge,
  getPayloadForBridgeLightChain,
  PT_DEPOSIT_COLLATERAL,
  PT_MINT_SYNTH,
  PT_WITHDRAW_COLLATERAL,
  PT_BURN_SYNTH,
  PT_EXCHANGE,
  PT_LIQUIDATE,
  PT_BRIDGE_SYNTH
}
