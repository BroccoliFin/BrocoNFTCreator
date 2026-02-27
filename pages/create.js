import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  Connection,
  clusterApiUrl,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import axios from "axios";
import { ShyftSdk, Network } from "@shyft-to/js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { UPLOAD_IPFS_IMAGE, UPLOAD_METADATA } from "../Context/constants";

//INTERNAL IMPORT
import { Create, Preloader, Loader } from "../Components/index";
import {
  SideBar_1,
  SideBar_2,
  SideBar_3,
  SideBar_4,
  SideBar_5,
  SideBar_6,
  FaExternalLinkAlt,
} from "../Components/SVG/index";

const SHYFT_AIP = process.env.NEXT_PUBLIC_SHYFT_API_KEY;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN;
const NFT_FEE = process.env.NEXT_PUBLIC_FEE;

const create = () => {
  const { connection } = useConnection();
  const [loader, setLoader] = useState(false);
  const [balance, setBalance] = useState();
  const [allowCreate, setAllowCreate] = useState(false);
  const {
    sendTransaction,
    connected,
    connect,
    disconnect,
    connecting,
    publicKey,
    wallet,
    wallets,
    select,
  } = useWallet();

  const network = clusterApiUrl(NETWORK);
  const connectionCustom = new Connection(network);

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [attributes, setAttributes] = useState({
    traitTypeOne: "",
    valueOne: "",
    traitTypeTwo: "",
    valueTwo: "",
  });

  const [nft, setNft] = useState({
    name: "",
    description: "",
    symbol: "",
    image: "",
    link: "",
  });

  const shyft = new ShyftSdk({
    apiKey: SHYFT_AIP,
    network: NETWORK == "devnet" ? Network.Devnet : Network.Mainnet,
  });

  const CREATE_NFT = async (nft, attributes) => {
    if (!publicKey) {
      console.error("Wallet not connected or metadata URI is missing");
      return;
    }
    setLoader(true);
    const metadataURI = await UPLOAD_METADATA(nft, attributes, publicKey);

    const changeFee = await CHARGE_FEE();

    if (changeFee) {
      if (metadataURI) {
        try {
          const response = await shyft.nft.createFromMetadata({
            wallet: publicKey.toString(),
            metadataUri: metadataURI,
          });

          console.log("NFT created successfully:", response);
          const encodedTransaction = response.encoded_transaction;

          // Decode the encoded transaction
          const transaction = Transaction.from(
            Buffer.from(encodedTransaction, "base64")
          );

          // Send the transaction
          const signature = await sendTransaction(transaction, connection);
          console.log("Transaction sent:", signature);

          // Confirm the transaction
          const confirmation = await connection.confirmTransaction(signature);
          console.log("Transaction confirmation:", confirmation);
          setLoader(false);
          notifySuccess("Transaction confirmation");
          window.location.href = "/";
        } catch (error) {
          console.log(
            "Error creating NFT:",
            error.response ? error.response.data : error
          );
          notifyError("Error creating NFT");
          setLoader(false);
        }
      }
    }
  };

  const handleImageChange = async (event) => {
    try {
      setLoader(true);
      const file = event.target.files[0];
      if (file) {
        const imgUrl = await UPLOAD_IPFS_IMAGE(file);
        console.log(imgUrl);
        setNft({ ...nft, image: imgUrl });
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        try {
          const balance = await connectionCustom.getBalance(
            new PublicKey(publicKey)
          );

          setBalance(balance / 1e9);
          const checkBal = balance / 1e9;

          if (checkBal > 2) {
            setAllowCreate(true);
          }
        } catch (error) {
          console.error("Error fetching balance:", error);
          setBalance(null);
        }
      }
    };

    fetchBalance();
  }, [connected, publicKey, connection]);

  const CHARGE_FEE = async () => {
    if (!publicKey) {
      notifyError("Wallet not connected");
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(ADMIN_ADDRESS),
          lamports: NFT_FEE * 1e9,
        })
      );

      const signature = await sendTransaction(transaction, connection);

      const confirmation = await connection.confirmTransaction(signature);
      console.log("Transaction confirmed:", confirmation);
      return confirmation;
    } catch (error) {
      console.error("Error sending SOL:", error);
      notifyError("Error sending SOL:");
    }
  };

  return (
    <>
      <Preloader />
      <div id="wrapper">
        <div id="page" className="market-page ">
          <div id="market-header">
            <div className="market-header flex items-center justify-between">
              <div className="admin_active" id="header_admin">
                <div className="popup-user relative">
                  <div className="user">
                    <img
                      src="assets/images/avatar/avatar-small-09.png"
                      alt=""
                    />
                    <span>@Robotoken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-canvas active">
            <div className="canvas">
              <a href="/">
                <span />
              </a>
            </div>
          </div>
          <div className="flat-tabs">
            <div className="section-menu-left">
              <div className="box-logo">
                <a href="/">
                  <img
                    src="logo-br.png"
                    style={{
                      width: "160px",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
              <div className="create menu-tab">
                <a
                  className="tf-button style-1 type-1 tablinks active"
                  data-tabs="create"
                >
                  <span>Create</span>
                </a>
              </div>
              <div className="over-content">
                <div className="content">
                  <h6>Menu</h6>
                  <ul className="menu-tab">
                    <li className="">
                      <a href="/">
                        <SideBar_1 />
                        <SideBar_2 />
                        Home
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <SideBar_3 />
                        <SideBar_4 />
                        Created
                      </a>
                    </li>
                    <li className="">
                      <a href="/">
                        <SideBar_5 />
                        <SideBar_6 />
                        Explore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom">
                <p>© 2025 Made By</p>
                <p>@DevBroco</p>
              </div>
            </div>
            <div className="content-tabs">
              <div id="create" className="tabcontent active">
                <div className="wrapper-content-create">
                  <div className="heading-section">
                    <h2 className="tf-title pb-30">Create Solana NFT</h2>
                  </div>
                  <div className="widget-tabs relative">
                    <div className="widget-content-tab">
                      <div className="widget-content-inner description active">
                        <div className="wrap-upload">
                          <div className="h-full">
                            <label className="uploadfile h-full flex items-center justify-center">
                              <div className="text-center">
                                <img
                                  src="assets/images/box-icon/upload.png"
                                  alt=""
                                />
                                <h5>Upload file</h5>
                                <p className="text">
                                  Drag or choose your file to upload
                                </p>
                                <div className="text filename">
                                  PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                                </div>
                                <input
                                  type="file"
                                  className=""
                                  name="file"
                                  onChange={handleImageChange}
                                />
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="wrap-content w-full">
                          <div
                            id="commentform"
                            className="comment-form"
                            noValidate="novalidate"
                          >
                            <fieldset className="name">
                              <label>Name *</label>
                              <input
                                type="text"
                                id="name"
                                placeholder="nft name"
                                name="name"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                                onChange={(e) =>
                                  setNft({ ...nft, name: e.target.value })
                                }
                              />
                            </fieldset>
                            <fieldset className="message">
                              <label>NFT Description *</label>
                              <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Please describe your nft*"
                                tabIndex={4}
                                aria-required="true"
                                required=""
                                defaultValue={""}
                                onChange={(e) =>
                                  setNft({
                                    ...nft,
                                    description: e.target.value,
                                  })
                                }
                              />
                            </fieldset>
                            <div className="flex gap30">
                              <fieldset className="price">
                                <label>Symbol</label>
                                <input
                                  type="text"
                                  id="price"
                                  placeholder="symbol"
                                  name="price"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setNft({ ...nft, symbol: e.target.value })
                                  }
                                />
                              </fieldset>
                              <fieldset className="website">
                                <label>Website Link</label>
                                <input
                                  type="text"
                                  id="website"
                                  placeholder="website"
                                  name="website"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setNft({ ...nft, link: e.target.value })
                                  }
                                />
                              </fieldset>
                            </div>
                            <fieldset className="blockchain">
                              <label>Blockchain</label>
                              <div className="widget-coins flex gap30 flex-wrap">
                                <div className="widget-coins-item flex items-center">
                                  <img
                                    src="assets/images/box-icon/coin-01.png"
                                    alt=""
                                  />
                                  <p>
                                    <a href="#">Bitcoin</a>
                                  </p>
                                </div>
                                <div className="widget-coins-item flex items-center">
                                  <img
                                    src="assets/images/box-icon/coin-02.png"
                                    alt=""
                                  />
                                  <p>
                                    <a href="#">Ethereum</a>
                                  </p>
                                </div>
                                <div className="widget-coins-item flex items-center">
                                  <img
                                    src="assets/images/box-icon/coin-03.png"
                                    alt=""
                                  />
                                  <p>
                                    <a href="#">Cardano</a>
                                  </p>
                                </div>
                                <div className="widget-coins-item flex items-center">
                                  <img
                                    src="assets/images/box-icon/coin-04.png"
                                    alt=""
                                  />
                                  <p>
                                    <a href="#">Solana</a>
                                  </p>
                                </div>
                              </div>
                            </fieldset>
                            <div className="flex gap30">
                              <fieldset className="price">
                                <label>Attributes</label>
                                <input
                                  type="text"
                                  id="price"
                                  placeholder="type"
                                  name="price"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setAttributes({
                                      ...attributes,
                                      traitTypeOne: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                              <fieldset className="value">
                                <label>*</label>
                                <input
                                  type="text"
                                  id="value"
                                  placeholder="value"
                                  name="value"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setAttributes({
                                      ...attributes,
                                      valueOne: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                            </div>
                            <div className="flex gap30">
                              <fieldset className="price">
                                <input
                                  type="text"
                                  id="price"
                                  placeholder="type"
                                  name="price"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setAttributes({
                                      ...attributes,
                                      traitTypeTwo: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                              <fieldset className="value">
                                <input
                                  type="text"
                                  id="value"
                                  placeholder="value"
                                  name="value"
                                  tabIndex={2}
                                  defaultValue=""
                                  aria-required="true"
                                  required=""
                                  onChange={(e) =>
                                    setAttributes({
                                      ...attributes,
                                      valueTwo: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                            </div>

                            <div className="btn-submit flex gap30 justify-center">
                              <button
                                onClick={() => window.location.reload()}
                                className="tf-button style-1 h50 active"
                              >
                                Cancel
                                <FaExternalLinkAlt />
                              </button>
                              {allowCreate ? (
                                <button
                                  className="tf-button style-1 h50"
                                  onClick={() => CREATE_NFT(nft, attributes)}
                                >
                                  Create NFT
                                  <FaExternalLinkAlt />
                                </button>
                              ) : (
                                <button className="tf-button style-1 h50">
                                  Minimum required 2 Sol
                                  <FaExternalLinkAlt />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default create;
