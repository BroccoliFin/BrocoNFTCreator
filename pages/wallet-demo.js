import React from "react";
import { ConnectWalletButton } from "../Components/index";
import { useWallet } from "@solana/wallet-adapter-react";
import { SHORTEN_ADDRESS } from "../Context/constants";

const WalletDemo = () => {
  const { connected, publicKey } = useWallet();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "30px", color: "#333" }}>
          Solana Wallet Connection Demo
        </h1>
        
        <div style={{ marginBottom: "30px" }}>
          <ConnectWalletButton />
        </div>

        {connected && publicKey && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#333" }}>
              Wallet Connected!
            </h3>
            <p style={{ marginBottom: "10px", color: "#666" }}>
              <strong>Address:</strong> {publicKey.toString()}
            </p>
            <p style={{ color: "#666" }}>
              <strong>Short Address:</strong> {SHORTEN_ADDRESS(publicKey.toString())}
            </p>
          </div>
        )}

        {!connected && (
          <p style={{ marginTop: "20px", color: "#666" }}>
            Click the button above to connect your Solana wallet
          </p>
        )}
      </div>
    </div>
  );
};

export default WalletDemo;

