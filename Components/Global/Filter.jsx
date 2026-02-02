import React from "react";
import { Filter_1, Filter_2, Filter_3, Filter_4, Filter_5 } from "../SVG/index";

const Filter = () => {
  return (
    <div className="col-md-12 pb-30">
      <div className="tf-soft flex items-center justify-between">
        <div className="soft-left">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle">
              <Filter_1 />
              <span className="inner">Category</span>
            </button>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle">
              <Filter_2 />
              <span className="inner">Items</span>
            </button>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle">
              <Filter_3 />
              <span className="inner">Status</span>
            </button>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle">
              <Filter_4 />
              <span className="inner">Price range</span>
            </button>
          </div>
        </div>
        <div className="soft-right">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle">
              <Filter_5 />
              <span>Sort by: recently added</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
