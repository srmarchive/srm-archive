import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>University Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">CT Papers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Semester Papers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Study Materials</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Support & Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Support</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Want to Collaborate or Promote with Us?</h5>
              <p>If you're interested in partnerships, promotions, or collaborations, let's connect!</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Your email address" />
                <button className="btn btn-primary" type="button">Connect</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 Archive, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
