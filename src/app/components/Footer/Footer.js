import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img
              src="/assets/footer_logo.png"
              alt="ISEEKAIGO"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <p className="footer-text">
            ISEEKAIGO Project. All Rights Reserved 2025
          </p>
        </div>
      </Container>
    </footer>
  );
}
