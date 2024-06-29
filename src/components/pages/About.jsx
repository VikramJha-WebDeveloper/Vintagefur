import React from "react";
import styled from "styled-components";

const Abt = styled.div`
  img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <>
      <Abt className="bg-warning py-5 text-light">
        <div className="container">
          <div className="row">
            <div className="col col-12 mb-5 mb-md-0 col-md-6 d-flex flex-column justify-content-between align-items-start">
              <h2 className="display-5 fw-normal text-center">ABOUT US</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believableThere are many variations of passages of
                Lorem Ipsum available, but the majority have able
              </p>
              <button className="btn btn-dark">READ MORE</button>
            </div>
            <div className="col col-12 col-md-6">
              <img src="https://www.pngall.com/wp-content/uploads/11/Wooden-Furniture-Chair-PNG-Photo.png"></img>
            </div>
          </div>
        </div>
      </Abt>
    </>
  );
};

export default About;
