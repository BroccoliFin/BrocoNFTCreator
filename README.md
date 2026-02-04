# BrocoNFTCreator

Solana NFT Creator DApp — Create and mint NFTs on Solana using Next.js, Phantom Wallet & Metaplex.  
Supports IPFS (Pinata), Shyft API for metadata, and Formspree for forms.

### Features
- Connect Phantom/Solana wallet
- Upload image + metadata (name, description, attributes)
- Mint NFT on devnet (switch to mainnet in .env)
- IPFS upload via Pinata
- Real-time feedback with toast notifications
- Responsive UI

### Prerequisites
- Node.js v18+ (tested on 18.12+)
- NPM 8+
- Solana wallet (Phantom recommended)
- Accounts: Pinata (IPFS), Shyft API key, Formspree (optional)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/BroccoliFin/BrocoNFTCreator.git
   ```
   ```bash
   cd BrocoNFTCreator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   
   Copy .env.example to .env.local
   
   Fill in your keys, address, fees:
   ```
   PINATA KEYS
   NEXT_PUBLIC_PINATA_AIP_KEY = <YOUR_PUBLIC_PINATA_AIP_KEY>
   NEXT_PUBLIC_PINATA_SECRECT_KEY = <YOUR_PUBLIC_PINATA_SECRECT_KEY>
   SHYFT
   NEXT_PUBLIC_SHYFT_AIP_KEY = <YOUR_PUBLIC_SHYFT_AIP_KEY>
   NETWORK
   NEXT_PUBLIC_NETWORK = devnet
   NEXT_PUBLIC_NETWORK = mainnet
   FORMSPREE
   NEXT_PUBLIC_FORMSPREE_API = <YOUR_PUBLIC_FORMSPREE_API>
   ADMIN 
   NEXT_PUBLIC_ADMIN = <YOUR_SOLANA_WALLET_ADDRESS>
   NEXT_PUBLIC_FEE = 0.5
   ```

4.Run locally:
   ```bash
   npm run dev
   ```

### Usage
- Connect your wallet (Phantom/Solflare).
- Upload image and fill metadata.
- Click "Mint NFT" → confirm tx in wallet.
- View minted NFT on Solana Explorer (devnet).

Tips: Use devnet for testing! Get free SOL from faucets below.

### Useful Links
- Devnet SOL Faucet: https://faucet.solana.com/
- Solana Playground (programs): https://beta.solpg.io/
- Solana Explorer: https://explorer.solana.com/
- Shyft Docs: https://docs.shyft.to/
- Pinata IPFS: https://pinata.cloud/
























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
