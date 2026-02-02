import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { SHORTEN_ADDRESS } from "../../Context/constants";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

const ConnectWalletButton = () => {
  const { connected, publicKey } = useWallet();
  const [balance, setBalance] = useState(null);

  const network = clusterApiUrl(NETWORK || "devnet");
  const connection = new Connection(network);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey && connected) {
        try {
          const balance = await connection.getBalance(new PublicKey(publicKey));
          setBalance(balance / 1e9);
        } catch (error) {
          console.error("Error fetching balance:", error);
          setBalance(null);
        }
      } else {
        setBalance(null);
      }
    };

    if (connected) {
      fetchBalance();
    }
  }, [connected, publicKey]);

  return (
    <div className="connect-wallet-container">
      {connected && balance !== null && (
        <div className="wallet-info" style={{ marginRight: "10px" }}>
          <span style={{ marginRight: "10px" }}>
            {SHORTEN_ADDRESS(publicKey.toString())}
          </span>
          <span>
            {balance.toFixed(4)} SOL
          </span>
        </div>
      )}
      <WalletMultiButton className="wallet-adapter-button" />
    </div>
  );
};

export default ConnectWalletButton;

