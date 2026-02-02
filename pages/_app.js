import "../styles/globals.css";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function App({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
            <Toaster />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      {/* <script src="assets/js/swiper.js"></script> */}
      <script src="assets/js/countto.js"></script>
      {/* <script src="assets/js/count-down.js"></script> */}
      <script src="assets/js/simpleParallax.min.js"></script>
      <script src="assets/js/gsap.js"></script>
      <script src="assets/js/SplitText.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/ScrollTrigger.js"></script>
      <script src="assets/js/gsap-animation.js"></script>
      <script src="assets/js/tsparticles.min.js"></script>
      {/* <script src="assets/js/tsparticles.js"></script> */}
      <script src="assets/js/main.js"></script>
    </>
  );
}
