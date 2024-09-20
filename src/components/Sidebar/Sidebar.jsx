import React from "react";
import "./Sidebar.css";
import { arrowRight } from "../../assets";
import { MdClose } from 'react-icons/md'; // Import your desired icon

const Sidebar = ({ toggleChange }) => {
  return (
    <>
      <article className="sidebar">
        <div className="content">
          <div className="top-section">
 <div className="flex items-center justify-center">
      <MdClose
        onClick={toggleChange}
        className="cursor-pointer w-8 h-8" // Adjust size as needed
      />
    </div>
          </div>

          <div className="links">
            <a className="link" href="#overview">
              <h2>Overview</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#roadmap">
              <h2>Roadmap & Utility</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#traits">
              <h2>Trait Rarity</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
            <a className="link" href="#faq">
              <h2>FAQs</h2>
              <img src={arrowRight} alt="arrow" />
            </a>
          </div>

          <div className="mid-text">
            <p>Join the ISEEKAIGO Community</p>
          </div>
          <div className="footer-btns">
            <button className="btn btn-connect">Join Discord</button>
            <button className="btn btn-mint">Follow Twitter</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Sidebar;
