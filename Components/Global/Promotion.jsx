import React from "react";

import { TbCurrencySolana } from "../SVG/index";
import promotionNfts from "../Data/promotion.json";

const TopSeller = ({ index, image, name, price }) => (
  <div key={index} className="tf-author-box style-3 text-center">
    <div className="author-avatar ">
      <img
        src={`assets/images/avatar/avatar-${image}.png`}
        alt=""
        className="avatar"
      />
      <div className="number">{index}</div>
    </div>
    <div className="author-infor ">
      <h5>
        <a href="author-2.html">{name}</a>
      </h5>
      <h6 className="price gem style-1">
        <i>
          <TbCurrencySolana />
        </i>
        7,080.95
      </h6>
    </div>
  </div>
);

const Seller = () => {
  return (
    <div id="top" className="tf-section seller ">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section">
              <h2 className="tf-title pb-30">Top NFTs Promotions</h2>
            </div>
          </div>

          <div className="col-md-12">
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
                overflowX: "auto",
              }}
            >
              {promotionNfts?.map((item, index) => (
                <TopSeller
                  index={index + 1}
                  image={item?.image}
                  name={item?.name}
                  price={item?.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
