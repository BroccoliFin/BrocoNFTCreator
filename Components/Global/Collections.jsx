import React from "react";
import {
  SiEthereum,
  CiHeart,
  TbCurrencySolana,
  Collections_1,
} from "../SVG/index";

import collection from "../Data/collections.json";
const Collections = () => {
  return (
    <div className="tf-section top-collections mt-10">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section pb-20">
              <h2 className="tf-title ">Top collections</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="featured pt-10 swiper-container carousel3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  overflowX: "auto",
                }}
              >
                {collection?.map((item, index) => (
                  <div className="tf-card-collection style-1 relative ">
                    <div className="image">
                      <img
                        src={`assets/images/box-item/collection-${item?.image}.jpg`}
                        alt=""
                      />
                    </div>
                    <style jsx>{`
                      @media (max-width: 768px) {
                        .mobile-hidden {
                          display: none;
                        }
                      }
                    `}</style>
                    <div className="card-bottom mobile-hidden">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src={`assets/images/avatar/avatar-box-0${
                              index + 2
                            }.jpg`}
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <h5>
                            <a href="#">{item?.name}</a>
                          </h5>
                          <div className="infor">{item?.powerby}</div>
                        </div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <Collections_1 />
                          </div>
                          <p>{item?.item} Item</p>
                        </div>
                      </div>
                    </div>
                    <div className="like ">
                      <span className="wishlist-button mobile-hidden">
                        <CiHeart />
                      </span>
                      <p>{item?.like} like</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
