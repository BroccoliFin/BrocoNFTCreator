import React from "react";

import { FaWallet, FaExternalLinkAlt, CiHeart } from "../SVG/index";

const Action = ({ publicKey }) => {
  return (
    <div id="action" className="tf-section action">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="action__body">
              <h2>Discover, create and sell your own NFT</h2>
              <div className="flat-button flex">
                <a
                  href="#"
                  className="tf-button style-2 h50 w190 mr-10"
                  data-toggle="modal"
                  data-target="#popup_bid"
                >
                  Explore now
                  <FaExternalLinkAlt />
                </a>
                {publicKey && (
                  <a href="/create" className="tf-button style-2 h50 w230">
                    Create your first NFT
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <div className="bg-home7">
                <div className="swiper-container autoslider3reverse">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="assets/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
