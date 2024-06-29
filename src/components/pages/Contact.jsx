import React from "react";
const Contact = () => {
  return (
    <>
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
    </>
  );
};
export default Contact;
