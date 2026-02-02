# Solana NFT Creator DApp with Next.js, Phantom Wallet, & Metaplex | Solana Blockchain Dapp

Build & Deploy a Solana NFT Creator DApp with Next.js, Phantom Wallet, & Metaplex | Solana Blockchain Dapp


#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v18.12.1 || LATEST
  NPM: 8.19.2 || LATEST
```

## Final Code Instruction

If you download the final source code then you can follow the following instructions to run the Dapp successfully





#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v18.12.1 || LATEST
  NPM: 8.19.2 || LATEST
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```
  Get: Free Test Faucets
  URL : https://beta.solpg.io/
  URL : https://faucet.solana.com/
```

#### Solana Playground

We are using Solana Playground for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```
  OPEN: Solana Playground
  URL: https://beta.solpg.io/
```

#### Solana Network

```
  OPEN: Solana Network
  URL: https://explorer.solana.com/
```



#### PACKAGE JSON

```
{
  "name": "solana-nfts",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@next/font": "13.4.13",
    "axios": "^1.6.8",
    "next": "13.4.13",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "@metaplex/js": "^4.12.0",
    "@shyft-to/js": "^0.2.40",
    "@solana/wallet-adapter-phantom": "^0.9.24",
    "@solana/wallet-adapter-react": "^0.15.35",
    "@solana/wallet-adapter-react-ui": "^0.9.35",
    "@solana/wallet-adapter-wallets": "^0.19.32",
    "@solana/web3.js": "^1.95.4"
  }
}

```

#### ENV.LOCAL

```
# PINATE KEYS
NEXT_PUBLIC_PINATA_AIP_KEY = <YOUR_PUBLIC_PINATA_AIP_KEY>
NEXT_PUBLIC_PINATA_SECRECT_KEY = <YOUR_PUBLIC_PINATA_SECRECT_KEY>

#  SHYFT
NEXT_PUBLIC_SHYFT_AIP_KEY = <YOUR_PUBLIC_SHYFT_AIP_KEY>

#  NETWORK
NEXT_PUBLIC_NETWORK = devnet
# NEXT_PUBLIC_NETWORK = mainnet

#FORMSPREE
NEXT_PUBLIC_FORMSPREE_API = <YOUR_PUBLIC_FORMSPREE_API>

# ADMIN 
NEXT_PUBLIC_ADMIN = <YOUR_SOLANA_WALLET_ADDRESS>
NEXT_PUBLIC_FEE = 0.5
```
