import React from "react";

//INTERNAL IMPORT
import { NFTCard, Filter } from "../index";
import { FaArrowRightLong, CiHeart } from "../SVG/index";
import { SHORTEN_ADDRESS } from "../../Context/constants";

const Discover = ({ nfts, publicKey }) => {
  console.log(nfts);
  return (
    <div id="discover" className="tf-section discover-item loadmore-8-item">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section pb-30">
              <h2 className="tf-title ">Discover item</h2>
              <a
                href="https://t.me/mike2money"
                target="_blank"
                className=""
              >
                Discover more{" "}
                <i>
                  <FaArrowRightLong />
                </i>
              </a>
            </div>
          </div>
          <Filter />
          {nfts?.map((item, index) => (
            <div
              key={index}
              data-wow-delay={`0.${index}s`}
              className="wow fadeInUp  col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1">
                <div className="card-media">
                  <a href="#">
                    <img src={item?.image} alt={item?.name} />
                  </a>
                  <span className="wishlist-button ">
                    <CiHeart />
                  </span>
                  <div className="featured-countdown">
                    <span className="js-countdown">{item?.symbol}</span>
                  </div>
                  <div className="button-place-bid">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      <span>Get Offer</span>
                    </a>
                  </div>
                </div>
                <h5 className="name">
                  <a href="nft-detail-2.html">{item?.name}</a>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="assets/images/avatar/avatar-box-01.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Posted by:</span>
                    <h6>
                      <a href="#">{SHORTEN_ADDRESS(publicKey?.toString())}</a>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between">
                  <span className="text-bid">{item?.traitTypeOne}</span>
                  <h6 className="price gem">{item?.valueOne}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
