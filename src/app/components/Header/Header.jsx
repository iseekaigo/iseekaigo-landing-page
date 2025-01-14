'use client';

import React, { useState, useEffect } from "react";
import "./Header.css";
import { Nav, Container } from "react-bootstrap";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleChange = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  if (!isMounted) {
    return null; // Avoid rendering on server-side
  }

  return (
    <div id="header">
      <Container>
        <div className="content">
          <Nav className="nav">
            <div className="logo">
              <img
                src="/assets/logo.png"
                alt="ISEEKAIGO"
                className="h-16 md:h-24 w-auto"
              />
            </div>
            <div className="toggleBtn">
              {!toggle ? (
                <img src="/assets/hamburger.png" alt="toggle" onClick={toggleChange} />
              ) : (
                <img src="/assets/closeburger.png" alt="toggle" onClick={toggleChange} />
              )}
            </div>
            <ConnectButton  />
          </Nav>
          <div className="centerText">
            <h2 className="title">
              Experience Beyond your Reality
              <br />
              Step into Dynamic Worlds
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}
