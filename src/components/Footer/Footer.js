import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { footer_logo } from "../../assets";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img
              src={footer_logo}
              alt="ISEEKAIGO"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <p className="footer-text">
            ISEEKAIGO Project. All Rights Reserved 2024.
          </p>
        </div>
      </Container>
    </footer>
  );
}
