import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import {
  FaWallet,
  FaExternalLinkAlt,
  Header_1,
  LuSearch,
  TiSocialVimeo,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TbCurrencySolana,
  IoMenu,
} from "../SVG/index";

import { SHORTEN_ADDRESS } from "../../Context/constants";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

const Header = () => {
  const {
    connected,
    connect,
    disconnect,
    connecting,
    publicKey,
    wallet,
    wallets,
    select,
  } = useWallet();
  const [desktopNav, setDesktopNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [balance, setBalance] = useState();

  const network = clusterApiUrl(NETWORK);
  const connection = new Connection(network);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        try {
          const balance = await connection.getBalance(new PublicKey(publicKey));
          setBalance(balance / 1e9);
        } catch (error) {
          console.error("Error fetching balance:", error);
          setBalance(null);
        }
      }
    };

    if (connected) {
      fetchBalance();
    } else {
      setBalance(null);
    }
  }, [connected, publicKey, connection]);

  const handleClick = async () => {
    try {
      if (connected) {
        await disconnect();
      } else if (wallet && !connecting) {
        await connect();
      } else if (wallets.length > 0) {
        await select(wallets[0].adapter.name);
        await connect();
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  return (
    <div id="header_main" className="header_1 header-fixed">
      <div className="header_menu">
        <a rel="home" className="main-logo ">
          <img
            id="logo_header"
            src="logo.png"
            style={{
              width: "160px",
              height: "auto",
            }}
          />
        </a>
        <span
          style={{
            fontSize: "2.5rem",
          }}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <IoMenu />
        </span>
      </div>
      <div className="themesflat-container header_hide_main">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo ">
                  <div id="site-logo-inner ">
                    <a rel="home" className="main-logo ">
                      <img
                        id="logo_header"
                        src="logo.png"
                        style={{
                          width: "160px",
                          height: "auto",
                        }}
                      />
                    </a>
                  </div>
                </div>

                <div className="mobile-button">
                  <span />
                </div>

                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item  current-menu-item">
                      <a href="#home">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="#top">Top NFTs</a>
                    </li>
                    <li className="menu-item ">
                      <a href="#about">About</a>
                    </li>
                    <li className="menu-item ">
                      <a href="#popular">Popular</a>
                    </li>
                    <li className="menu-item ">
                      <a href="#action">Action</a>
                    </li>
                    <li className="menu-item">
                      <a href="#discover">Discover</a>
                    </li>
                  </ul>
                </nav>

                <div className="flat-wallet flex">
                  <div className="" id="wallet-header">
                    <a
                      href="#"
                      onClick={() => handleClick()}
                      id="connectbtn"
                      className="tf-button style-1"
                    >
                      <span>
                        {connected ? (
                          <span>
                            {SHORTEN_ADDRESS(publicKey.toString())}
                            &nbsp;&nbsp;&nbsp;
                            {balance?.toString().slice(0, 4)}&nbsp;
                            <TbCurrencySolana />
                          </span>
                        ) : (
                          "Connect Wallet"
                        )}
                      </span>
                      {!connected && <FaWallet />}
                    </a>
                  </div>

                  <div
                    onClick={() => setDesktopNav(!desktopNav)}
                    className="canvas"
                  >
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`canvas-nav-wrap ${desktopNav && "active"} `}>
        <div className="overlay-canvas-nav" />
        <div className="inner-canvas-nav">
          <div className="side-bar">
            <a href="index.html" rel="home" className="main-logo">
              <img
                id="logo_header"
                src="logo.png"
                style={{
                  width: "60px",
                  height: "auto",
                }}
              />
            </a>

            <div
              className="canvas-nav-close"
              onClick={() => setDesktopNav(!desktopNav)}
            >
              <Header_1 />
            </div>
            <div className="widget-search mt-30">
              <form
                action="#"
                method="get"
                role="search"
                className="search-form relative"
              >
                <input
                  type="search"
                  id="search"
                  className="search-field style-1"
                  placeholder="Search..."
                  defaultValue=""
                  name="s"
                  title="Search for"
                  required=""
                />
                <button
                  className="search search-submit"
                  type="submit"
                  title="Search"
                >
                  <LuSearch />
                </button>
              </form>
            </div>
            <div className="widget widget-categories">
              <h5 className="title-widget">Categories</h5>
              <ul>
                <li>
                  <div className="cate-item">
                    <a href="#">NFTs</a>
                  </div>
                  <div className="number">(1.483)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Digital Art</a>
                  </div>
                  <div className="number">(97)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Crypto</a>
                  </div>
                  <div className="number">(45)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Technology</a>
                  </div>
                  <div className="number">(728)</div>
                </li>
              </ul>
            </div>
            <div className="widget widget-menu style-4">
              <h5 className="title-widget">Company</h5>
              <ul>
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Platform status</a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h5 className="title-widget">Join the community</h5>
              <div className="widget-social">
                <ul className="flex">
                  <li>
                    <a href="#">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialVimeo />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-wrap ${mobileNav && "active"} `}>
        <div className="overlay-mobile-nav" />
        <div className="inner-mobile-nav">
          <div className="side-bar">
            <a href="/" rel="home" className="main-logo">
              <img
                id="logo_header"
                src="logo.png"
                style={{
                  width: "60px",
                  height: "auto",
                }}
              />
            </a>

            <div
              className="canvas-nav-close"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <Header_1 />
            </div>
            <a
              href="#"
              onClick={() => handleClick()}
              id="connectbtn"
              className="tf-button style-1 "
              style={{
                marginTop: "2rem",
              }}
            >
              <span>
                {" "}
                {connected ? (
                  <span>
                    {SHORTEN_ADDRESS(publicKey.toString())}
                    &nbsp;&nbsp;&nbsp;
                    {balance?.toString().slice(0, 4)}&nbsp;
                    <TbCurrencySolana />
                  </span>
                ) : (
                  "Connect Wallet"
                )}
              </span>
              {!connected && <FaWallet />}
            </a>
            <div className="widget-search mt-30">
              <div
                action="#"
                method="get"
                role="search"
                className="search-form relative"
              >
                <input
                  type="search"
                  id="search"
                  className="search-field style-1"
                  placeholder="Search..."
                  defaultValue=""
                  name="s"
                  title="Search for"
                  required=""
                />
                <button
                  className="search search-submit"
                  type="submit"
                  title="Search"
                >
                  <LuSearch />
                </button>
              </div>
            </div>

            <div className="widget widget-categories">
              <h5 className="title-widget">Categories</h5>
              <ul>
                <li>
                  <div className="cate-item">
                    <a href="#">NFTs</a>
                  </div>
                  <div className="number">(1.483)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Digital Art</a>
                  </div>
                  <div className="number">(97)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Crypto</a>
                  </div>
                  <div className="number">(45)</div>
                </li>
                <li>
                  <div className="cate-item">
                    <a href="#">Technology</a>
                  </div>
                  <div className="number">(728)</div>
                </li>
              </ul>
            </div>
            <div className="widget widget-menu style-4">
              <h5 className="title-widget">Company</h5>
              <ul>
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Platform status</a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h5 className="title-widget">Join the community</h5>
              <div className="widget-social">
                <ul className="flex">
                  <li>
                    <a href="#">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/broccolifinance">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialVimeo />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
