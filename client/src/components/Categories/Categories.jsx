import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import scrollToTop from "../../Hooks/scrollToTop";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="../../img/category-1.jpg" alt="#" />
          <button>
            <Link className="link" to="/products/1" onLoad={scrollToTop}>
              Figures
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="../../img/category-4.jpg" alt="#" />
          <button>
            <Link className="link" to="/products/4">
              Clocks
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="../../img/category-2.jpg" alt="#" />
          <button>
            <Link className="link" to="/products/2">
              Coffee
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l ">
        <div className="row">
          <img src="../../img/category-3.jpg" alt="#" />
          <button>
            <Link className="link" to="/products/3">
              Plants
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="../../img/category-5.jpg" alt="#" />
          <button>
            <Link className="link" to="/products/5">
              Statues
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
