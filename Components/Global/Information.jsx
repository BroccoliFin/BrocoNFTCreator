import React from "react";

import information from "../Data/information.json";

const InfoCard = ({ item, index }) => (
  <div
    key={index}
    data-wow-delay={`0.${index}s`}
    className="wow fadeInUp col-lg-3 col-md-6"
  >
    <div className={`tf-box-icon style-1 step${index + 1} relative`}>
      <div className="image">
        <img
          src={`assets/images/box-icon/icon-${item?.image}.png`}
          alt={item?.title}
        />
        <p>Step {index + 1}</p>
      </div>
      <h4 className="heading">
        <a href="contact-us.html">{item?.title}</a>
      </h4>
      <p className="content">{item?.description}</p>
      <div className="rainbow" />
    </div>
  </div>
);

const Created = () => {
  return (
    <div id="about" className="tf-section create-sell">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section">
              <h2 className="tf-title pb-30">
                Step by step Create and Sell Your NFTs
              </h2>
            </div>
          </div>
          {information?.map((item, index) => (
            <InfoCard item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Created;
