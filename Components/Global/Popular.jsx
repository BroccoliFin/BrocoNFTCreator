import React from "react";
import { SHORTEN_ADDRESS } from "../../Context/constants";
import { SiEthereum, CiHeart, TbCurrencySolana } from "../SVG/index";

const NewSaller = ({ nfts, publicKey }) => {
  const newArray = nfts;
  return (
    <div id="popular" className="tf-section-1 seller ">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section">
              <h2 className="tf-title pb-20">Popular items in last</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="featured pt-10 swiper-container carousel">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  overflowX: "auto",
                }}
              >
                {newArray
                  ?.map((item, index) => (
                    <div key={index} className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src={item?.image} alt={item?.name} />
                        </a>
                        <span className="wishlist-button ">
                          <CiHeart />
                        </span>

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
                            <a href="#">
                              {SHORTEN_ADDRESS(publicKey?.toString())}
                            </a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">{item?.traitTypeTwo}</span>
                        <h6 className="price gem">{item?.valueTwo}</h6>
                      </div>
                    </div>
                  ))
                  .slice(0, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSaller;
