## Synthr aggregator
This project is for cross chain compatibility of Synthr platform.
Synthr platform could be bridged on several evm compatible chains through this aggregator system which is based on LZ UA.

Synthr on Ethereum  <=== Synthr_Aggregator on Ethereum <-- LZ endpoint --> SynthAggregator on BSC ===> Synthr on BSC

Whenever any changes were happened on Ethereum(for example), it could be messaged to respective Synthr aggregator on BSC and the value on BSC would be updated and vice versa.  

### SynthrBridge
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/SynthrBridge.sol
This is the main smart contract which bridge messages between different chains based on LZ UA smart contract structure.
This consists of serval aggregator smart contracts - CollateralAggregator, SynthAggregator, DebtShareAggregator and etc.

## Aggregators

### CollateralAggregator
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/CollateralAggregator.sol

This aggregator smart contract is to track collateral deposit/withdraw status.

### SynthAggregator
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/SynthAggregator.sol

This aggregator is to track synth token issue/burn status.


### Liquidation aggregator
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/LiquidatorRewardsAggregator.sol
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/RewardEscrowV2Aggregator.sol

These smart contracts are for collateral liquidation aggregation over cross chains.

### DebtShareAggregator
https://github.com/Synthrio/synthr-aggregator/blob/master/contracts/DebtShareAggregator.sol

This aggregator is to track and aggregator user's debt share token balance over cross chains.

