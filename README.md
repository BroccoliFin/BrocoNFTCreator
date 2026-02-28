![Image](![Uploading Снимок экрана 2026-02-28 в 15.53.07.png…])



<h1 align="center">BrocoNFTCreator</h1>


<p align="center">
  <strong>Solana NFT Creator DApp</strong>
</p>





Create and mint NFTs on Solana using Next.js, Phantom Wallet & Metaplex.  
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
 
### PINATA KEYS
NEXT_PUBLIC_PINATA_API_KEY = <YOUR_PUBLIC_PINATA_API_KEY>
NEXT_PUBLIC_PINATA_SECRET_KEY = <YOUR_PUBLIC_PINATA_SECRET_KEY>

### SHYFT
NEXT_PUBLIC_SHYFT_API_KEY = <YOUR_PUBLIC_SHYFT_API_KEY>

### NETWORK
NEXT_PUBLIC_NETWORK = devnet
NEXT_PUBLIC_NETWORK = mainnet

### FORMSPREE
NEXT_PUBLIC_FORMSPREE_API = <YOUR_PUBLIC_FORMSPREE_API>

### ADMIN 
NEXT_PUBLIC_ADMIN = <YOUR_SOLANA_WALLET_ADDRESS>
NEXT_PUBLIC_FEE = 0.5

   

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

### License
- MIT License

### Contact & Support
- GitHub: https://github.com/BroccoliFin
- X (Twitter): https://x.com/broccolifinance
- Telegram: https://t.me/mike2money
- Issues/PRs welcome!

