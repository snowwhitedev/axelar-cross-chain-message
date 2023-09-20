npx hardhat verify --network goerli 0x0C78326d4E3cF0e7bb6BFc0824020157f33F7e5f "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
npx hardhat verify --network fuji 0xc3A44700852330207BA679fdc8D24A51470b67B4 "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706"
npx hardhat verify --network bsc-testnet 0xa1672574E9e7AE1692541476a6acceAD7251a4A9 "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1"
npx hardhat verify --network arbitrum-goerli 0x487Af23517DC22893D2229116c6c2AdDFC5b9Dd5 "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab"
npx hardhat verify --network mumbai 0xC8240117250F9e43d6Eca71966b9960910dA5a13 "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8"

== OmniCounter
- fuji: 0xFB0B023cc8FEEc75aD9FA17eCec42017AbF344e3
- goerli: 0x541cc9aab8965C4194bE8Fbe16ebf898F1a47E70

## 2023-01-26 Omnicounter on mainnet
Ethereum: 0xa77f5002174EA476012cD8E1708a9a0E9b4C9fDB
Arbitrum: 0xa77f5002174EA476012cD8E1708a9a0E9b4C9fDB


==== deployment 03-18 ====
npx hardhat --network goerli synthrAddChain --target-network fuji && npx hardhat --network goerli synthrAddChain --target-network bsc-testnet && npx hardhat --network goerli synthrAddChain --target-network arbitrum-goerli

npx hardhat --network fuji synthrAddChain --target-network goerli && npx hardhat --network fuji synthrAddChain --target-network bsc-testnet && npx hardhat --network fuji synthrAddChain --target-network arbitrum-goerli

npx hardhat --network bsc-testnet synthrAddChain --target-network goerli && npx hardhat --network bsc-testnet synthrAddChain --target-network fuji && npx hardhat --network bsc-testnet synthrAddChain --target-network arbitrum-goerli

npx hardhat --network arbitrum-goerli synthrAddChain --target-network goerli && npx hardhat --network arbitrum-goerli synthrAddChain --target-network fuji && npx hardhat --network arbitrum-goerli synthrAddChain --target-network bsc-testnet

npx hardhat --network metis-goerli synthrAddChain --target-network goerli && npx hardhat --network metis-goerli synthrAddChain --target-network fuji && npx hardhat --network metis-goerli synthrAddChain --target-network bsc-testnet && npx hardhat --network metis-goerli synthrAddChain --target-network mumbai && npx hardhat --network metis-goerli synthrAddChain --target-network arbitrum-goerli


### MVP
npx hardhat synthrSetBoundType --network goerli --target-network fuji && npx hardhat synthrSetBoundType --network goerli --target-network bsc-testnet && npx hardhat synthrSetBoundType --network goerli --target-network arbitrum-goerli

npx hardhat synthrSetBoundType --network fuji --target-network goerli && npx hardhat synthrSetBoundType --network fuji --target-network bsc-testnet && npx hardhat synthrSetBoundType --network fuji --target-network arbitrum-goerli

npx hardhat synthrSetBoundType --network bsc-testnet --target-network goerli && npx hardhat synthrSetBoundType --network bsc-testnet --target-network fuji && npx hardhat synthrSetBoundType --network bsc-testnet --target-network arbitrum-goerli

npx hardhat synthrSetBoundType --network arbitrum-goerli --target-network goerli && npx hardhat synthrSetBoundType --network arbitrum-goerli --target-network fuji && npx hardhat synthrSetBoundType --network arbitrum-goerli --target-network bsc-testnet


### 2023-06-03
D:\mywork\2021\Audace\Synthr\lz_aggregators>npx hardhat verify --network arbitrum-goerli 0xFfb3A525247A5bEC132339D6977e0B222A20dD5A
(node:18516) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Verifying implementation: 0x0b9F3A766e5Be744B1204f1a99b774B7c858e802
Nothing to compile
Successfully submitted source code for contract
contracts/SynthrAggregator.sol:SynthrAggregator at 0x0b9F3A766e5Be744B1204f1a99b774B7c858e802
for verification on the block explorer. Waiting for verification result...

Successfully verified contract SynthrAggregator on Etherscan.
https://goerli.arbiscan.io/address/0x0b9F3A766e5Be744B1204f1a99b774B7c858e802#code
Verifying proxy: 0xFfb3A525247A5bEC132339D6977e0B222A20dD5A
Contract at 0xFfb3A525247A5bEC132339D6977e0B222A20dD5A already verified.
Linking proxy 0xFfb3A525247A5bEC132339D6977e0B222A20dD5A with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0xA037966Aa54BAa03537bD9F3bBD07581A1Fdb1C5
Contract at 0xA037966Aa54BAa03537bD9F3bBD07581A1Fdb1C5 already verified.



## Staging
npx hardhat --network goerli synthrAddChainStaging --target-network fuji && npx hardhat --network goerli synthrAddChainStaging --target-network bsc-testnet && npx hardhat --network goerli synthrAddChainStaging --target-network arbitrum-goerli && npx hardhat --network goerli synthrAddChainStaging --target-network mumbai && npx hardhat --network goerli synthrAddChainStaging --target-network metis-goerli

npx hardhat --network fuji synthrAddChainStaging --target-network goerli && npx hardhat --network fuji synthrAddChainStaging --target-network bsc-testnet && npx hardhat --network fuji synthrAddChainStaging --target-network arbitrum-goerli && npx hardhat --network fuji synthrAddChainStaging --target-network mumbai && npx hardhat --network fuji synthrAddChainStaging --target-network metis-goerli

npx hardhat --network bsc-testnet synthrAddChainStaging --target-network goerli && npx hardhat --network bsc-testnet synthrAddChainStaging --target-network fuji && npx hardhat --network bsc-testnet synthrAddChainStaging --target-network arbitrum-goerli && npx hardhat --network bsc-testnet synthrAddChainStaging --target-network mumbai && npx hardhat --network bsc-testnet synthrAddChainStaging --target-network metis-goerli

npx hardhat --network mumbai synthrAddChainStaging --target-network goerli && npx hardhat --network mumbai synthrAddChainStaging --target-network fuji && npx hardhat --network mumbai synthrAddChainStaging --target-network bsc-testnet && npx hardhat --network mumbai synthrAddChainStaging --target-network arbitrum-goerli && npx hardhat --network mumbai synthrAddChainStaging --target-network metis-goerli  

npx hardhat --network metis-goerli synthrAddChainStaging --target-network goerli && npx hardhat --network metis-goerli synthrAddChainStaging --target-network fuji && npx hardhat --network metis-goerli synthrAddChainStaging --target-network bsc-testnet && npx hardhat --network metis-goerli synthrAddChainStaging --target-network mumbai && npx hardhat --network metis-goerli synthrAddChainStaging --target-network arbitrum-goerli

npx hardhat --network arbitrum-goerli synthrAddChainStaging --target-network goerli && npx hardhat --network arbitrum-goerli synthrAddChainStaging --target-network fuji && npx hardhat --network arbitrum-goerli synthrAddChainStaging --target-network bsc-testnet && npx hardhat --network arbitrum-goerli synthrAddChainStaging --target-network mumbai && npx hardhat --network arbitrum-goerli synthrAddChainStaging --target-network metis-goerli

###
npx hardhat synthrSetBoundTypeStaging --network goerli --target-network fuji && npx hardhat synthrSetBoundTypeStaging --network goerli --target-network bsc-testnet && npx hardhat synthrSetBoundTypeStaging --network goerli --target-network arbitrum-goerli && npx hardhat synthrSetBoundTypeStaging --network goerli --target-network mumbai

npx hardhat synthrSetBoundTypeStaging --network fuji --target-network goerli && npx hardhat synthrSetBoundTypeStaging --network fuji --target-network bsc-testnet && npx hardhat synthrSetBoundTypeStaging --network fuji --target-network arbitrum-goerli && npx hardhat synthrSetBoundTypeStaging --network fuji --target-network mumbai

npx hardhat synthrSetBoundTypeStaging --network bsc-testnet --target-network goerli && npx hardhat synthrSetBoundTypeStaging --network bsc-testnet --target-network fuji && npx hardhat synthrSetBoundTypeStaging --network bsc-testnet --target-network arbitrum-goerli && npx hardhat synthrSetBoundTypeStaging --network bsc-testnet --target-network mumbai

npx hardhat synthrSetBoundTypeStaging --network mumbai --target-network goerli && npx hardhat synthrSetBoundTypeStaging --network mumbai --target-network bsc-testnet && npx hardhat synthrSetBoundTypeStaging --network mumbai --target-network arbitrum-goerli && npx hardhat synthrSetBoundTypeStaging --network mumbai --target-network fuji

npx hardhat synthrSetBoundTypeStaging --network arbitrum-goerli --target-network goerli && npx hardhat synthrSetBoundTypeStaging --network arbitrum-goerli --target-network fuji && npx hardhat synthrSetBoundTypeStaging --network arbitrum-goerli --target-network bsc-testnet && npx hardhat synthrSetBoundTypeStaging --network arbitrum-goerli --target-network mumbai


### Staging fixed
[arbitrum-goerli]

>>> [arbitrum-goerli] chain
SynthrAggregator: 0x7F7Db6c09e39bCbB9FA0E6532426d335BdCc8A3E
SynthrBridge: 0x487Af23517DC22893D2229116c6c2AdDFC5b9Dd5

[goerli]
SynthrBridgeLightChain: 0x6ABDED02a3717aefC1eA1255E22dFD843cC1f99D

[fuji]
SynthrBridgeLightChain: 0xC27A0E3e938Ea734c379635B0107a8fE7d520f33

[bsc-testnet]
SynthrBridgeLightChain: 0x9789cA418ee5aeF036a87f2A6fd1A9B9b2fF2DDB

[mumbai]
SynthrBridgeLightChain: 0xf5f2F901Ae64AA2bC999CDE2F6731Bb81b75CDCb
