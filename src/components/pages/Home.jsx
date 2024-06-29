import React from "react";
import styled from "styled-components";
import Furniture1 from "../../assets/images/furniture1.jpg";
import Furniture2 from "../../assets/images/furniture2.jpg";
import Project1 from "../../assets/images/project1.jpg";
import Project2 from "../../assets/images/project2.jpg";
import Project3 from "../../assets/images/project3.jpg";
import Loksans1 from "../../assets/images/loksans.png";
import Loksans2 from "../../assets/images/loksans2.png";

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://i.pinimg.com/736x/5d/bb/5e/5dbb5ef85962b2209b071c30c140a62d.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  div.animation-banner {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
`;

const Services = styled.div`
  i {
    font-size: 75px;
  }
`;

const About = styled.div`
  img {
    width: 100%;
  }
`;

const Who = styled.div`
  background-image: linear-gradient(
      rgba(255, 193, 7, 0.8),
      rgba(255, 193, 7, 0.8)
    ),
    url("https://assets-news.housing.com/news/wp-content/uploads/2022/02/22151854/indian-kitchen-feature-compressed.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Project = styled.div`
  div.carousel-item div.row:nth-child(2):hover {
    opacity: 0.5;
  }
`;

const Home = () => {
  return (
    <>
      <Banner
        id="carouselExample"
        className="carousel slide bg-danger vh-100"
        data-bs-ride="carausel"
      >
        <div className="carousel-inner h-100 animation-banner">
          <div className="carousel-item active">
            <h1 className="text-center display-1 fw-normal text-light">
              FURNITURE
            </h1>
            <p className="text-center h5 text-light lh-base fw-normal">
              There are many variations of passages of Lorem Ipsum available,
              but
              <br />
              the majority have suffered alteration in some fo
            </p>
            <div className="text-center mt-3">
              <button className="btn btn-warning text-light">Contact Us</button>
            </div>
          </div>
          <div className="carousel-item">
            <h1 className="text-center display-1 lh-base fw-normal text-light">
              FURNITURE
            </h1>
            <p className="text-center h5 text-light lh-base">
              There are many variations of passages of Lorem Ipsum available,
              but
              <br />
              the majority have suffered alteration in some fo
            </p>
            <div className="text-center mt-3">
              <button className="btn btn-warning">Contact Us</button>
            </div>
          </div>
          <div className="carousel-item">
            <h1 className="text-center display-1 lh-base fw-normal text-light">
              FURNITURE
            </h1>
            <p className="text-center h5 lh-base text-light">
              There are many variations of passages of Lorem Ipsum available,
              but
              <br />
              the majority have suffered alteration in some fo
            </p>
            <div className="text-center mt-3">
              <button className="btn btn-warning">Contact Us</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </Banner>
      {/* Services section starts */}
      <Services className="container py-5">
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
      </Services>
      {/* Services section ends */}
      {/* About section starts */}
      <About className="bg-warning py-5 text-light">
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
      </About>
      {/* About section ends */}
      {/* Furniture section starts */}
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
      {/* Furniture section ends */}
      {/* Who we are starts*/}
      <Who className="py-5 text-light">
        <div className="container">
          <div className="row">
            <div className="col col-12 d-flex flex-column align-items-center">
              <h2>WHO WE ARE ?</h2>
              <h6 className="lh-lg text-center">DESIGNERS AND INNOVATORS</h6>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut
              </p>
              <button className="btn btn-dark">GET A QUOTE</button>
            </div>
          </div>
        </div>
      </Who>
      {/* Who we are ends */}
      {/* Projects starts */}
      <Project className="container py-5">
        <div
          id="carauselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col col-12">
                  <h2 className="text-center">OUR PROJECTS</h2>
                  <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project1} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project2} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project3} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col col-12">
                  <h2 className="text-center">OUR PROJECTS</h2>
                  <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project1} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project2} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project3} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col col-12">
                  <h2 className="text-center">OUR PROJECTS</h2>
                  <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project1} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project2} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project3} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col col-12">
                  <h2 className="text-center">OUR PROJECTS</h2>
                  <p className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project1} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project2} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
                <div className="col col-12 col-sm-4 mb-3 mb-sm-0 position-relative">
                  <img src={Project3} className="w-100"></img>
                  <h5 className="position-absolute bottom-0 text-light text-center w-100">
                    MODERN HOME DESIGN
                  </h5>
                </div>
              </div>
            </div>
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carauselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carauselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button> */}
          </div>
        </div>
      </Project>
      {/* Projects ends */}
      {/* clients starts */}
      <div className="bg-warning py-5">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            {/* <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div> */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col col-12">
                    <h2 className="text-center">WHAT SAYS OUR CLIENTS</h2>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-7 col-12 border border-dark bg-dark text-light p-4 my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans1} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-7 col-12 border border-dark  bg-dark text-light p-4 ms-auto my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans2} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col col-12">
                    <h2 className="text-center">WHAT SAYS OUR CLIENTS</h2>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-7 col-12 border border-dark  bg-dark text-light p-4 my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans1} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-7 col-12 border border-dark  bg-dark text-light p-4 ms-auto my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans2} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col col-12">
                    <h2 className="text-center">WHAT SAYS OUR CLIENTS</h2>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-md-7 col-12 border border-dark  bg-dark text-light p-4 my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans1} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-7 col-12 border border-dark  bg-dark text-light p-4 ms-auto my-3">
                    <div className="row">
                      <div className="col col-2">
                        <img src={Loksans2} className="w-100"></img>
                      </div>
                      <div className="col col-10">
                        <h5>LOKSANS</h5>
                        <p>
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
          </div>
        </div>
      </div>
      {/* clients ends */}
      {/* Contact section starts */}
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-md-6">
            <h2>CONTACT US</h2>
            <form className="my-5">
              <input
                type="text"
                className="form-control fs-5 mb-4"
                placeholder="Name"
              ></input>
              <input
                type="email"
                className="form-control fs-5 mb-4"
                placeholder="Email"
              ></input>
              <input
                type="number"
                className="form-control fs-5 mb-4"
                placeholder="Phone Number"
              ></input>
              <textarea
                className="form-control fs-5 mb-4"
                rows="5"
                placeholder="Message"
              ></textarea>
              <input
                type="submit"
                className="btn btn-warning py-3 px-5 text-light"
              ></input>
            </form>
          </div>
          <div className="col col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14311.959942340312!2d86.2666168457969!3d26.26198842560138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee78c8772ad363%3A0x335e778dcfa6e53!2sJhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1714999980001!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
      {/* Contact section ends */}
    </>
  );
};
export default Home;
