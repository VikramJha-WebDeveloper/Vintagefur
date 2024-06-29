import React from "react";
import styled from "styled-components";

const Serv = styled.div`
  i {
    font-size: 75px;
  }
`;

const Services = () => {
  return (
    <>
      <Serv className="container py-5">
        <div className="row">
          <div className="col col-12 text-center">
            <h2 className="text-center display-5 fw-normal">Our Services</h2>
            <p className="text-center lh-base">
              There are many variations of passages of Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-sm-6 mb-5 mb-lg-0 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <i className="fa-solid fa-chair text-warning"></i>
            <h3 className="lh-base">Furnitures</h3>
            <p className="text-center lh-base">
              There are many variations of passages of Lorem Ipsum available,
              but the
            </p>
            <button className="btn btn-warning text-light">READ MORE</button>
          </div>
          <div className="col col-12 col-sm-6 mb-5 mb-lg-0 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <i className="fa-solid fa-briefcase text-warning"></i>
            <h3 className="lh-base">Office</h3>
            <p className="lh-base text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the
            </p>
            <button className="btn btn-warning text-light">READ MORE</button>
          </div>
          <div className="col col-12 col-sm-6 mb-5 mb-lg-0 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <i className="fa-solid fa-house text-warning"></i>
            <h3 className="lh-base">Home</h3>
            <p className="text-center lh-base">
              There are many variations of passages of Lorem Ipsum available,
              but the
            </p>
            <button className="btn btn-warning text-light">READ MORE</button>
          </div>
          <div className="col col-12 col-sm-6 mb-5 mb-lg-0 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <i className="fa-solid fa-person-booth text-warning"></i>
            <h3 className="lh-base">Badroom</h3>
            <p className="text-center lh-base">
              There are many variations of passages of Lorem Ipsum available,
              but the
            </p>
            <button className="btn btn-warning text-light">READ MORE</button>
          </div>
        </div>
      </Serv>
    </>
  );
};
export default Services;
