import React from "react";
import Furniture1 from "../../assets/images/furniture1.jpg";
import Furniture2 from "../../assets/images/furniture2.jpg";
const Shop = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <h2 className="text-center">OUR FURNITURES</h2>
            <p className="text-center">
              There are many variations of passages of Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-md-6">
            <img src={Furniture1} className="w-100"></img>
            <h4 className="text-warning lh-lg">
              TEMPOR INCIDIDUNT UT LABORE ET DOLORE
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
          <div className="col col-12 col-md-6 mt-5 mt-md-0">
            <img src={Furniture2} className="w-100"></img>
            <h4 className="text-warning lh-lg">
              TEMPOR INCIDIDUNT UT LABORE ET DOLORE
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
