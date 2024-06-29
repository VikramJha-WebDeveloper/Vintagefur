import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  input::placeholder {
    color: grey;
  }
`;

const Footer = () => {
  return (
    <>
      <Foot className=" py-5 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-6 col-lg-3">
              <h4>INFORMATION</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nulla iusto fugiat voluptates tenetur deserunt
                corporis inventore saepe placeat accusamus repudiandae a rerum
                distinctio voluptatem.
              </p>
            </div>
            <div className="col col-12 col-sm-6 col-lg-3">
              <h4>LET US HELP YOU</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nulla iusto fugiat voluptates tenetur deserunt
                corporis inventore saepe placeat accusamus repudiandae a rerum
                distinctio voluptatem.
              </p>
            </div>
            <div className="col col-12 col-sm-6 col-lg-3">
              <h4>USEFUL LINKS</h4>
              <a href="#" className="text-light text-decoration-none">
                About Us
              </a>
              <br />
              <a href="#" className="text-light text-decoration-none">
                Careers
              </a>
              <br />
              <a href="#" className="text-light text-decoration-none">
                Sell on shopee
              </a>
              <br />
              <a href="#" className="text-light text-decoration-none">
                Press and News
              </a>
              <br />
              <a href="#" className="text-light text-decoration-none">
                Competitions
              </a>
              <br />
              <a href="#" className="text-light text-decoration-none">
                Terms and Conditions
              </a>
            </div>
            <div className="col col-12 col-sm-6 col-lg-3">
              <h4>OUR DESIGN</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nulla iusto fugiat voluptates tenetur deserunt
                corporis inventore saepe placeat accusamus repudiandae a rerum
                distinctio voluptatem.
              </p>
            </div>
            <div className=" col col-12 col-sm-6 ms-auto mt-3 border-bottom">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark border-0"
                  placeholder="Enter Your Email"
                ></input>
                <button
                  type="button"
                  className="btn btn-outline-secondary text-light fw-bolder border-0"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Foot>

      {/* Copyright section starts */}
      <div className="p-3">
        <p className="text-center fw-light m-0">
          2024 All Rights Reserved. Design by Free html Templates Distribution
          By ThemeWagon
        </p>
      </div>
      {/* Copyright section ends */}
    </>
  );
};

export default Footer;
