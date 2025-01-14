import React from "react";
import "./Accordian.css";
import { Accordion } from "react-bootstrap";

export default function Accordian() {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0" className="faq-accordian-item">
          <Accordion.Header>When will the game be released?</Accordion.Header>
          <Accordion.Body className="white-body">
            While the game doesn’t have a fixed release date yet, we’re
            targeting the launch of version 1.0 around spring 2025. Stay tuned
            for exciting updates!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="faq-accordian-item">
          <Accordion.Header>
            Will there be a public test for the game?
          </Accordion.Header>
          <Accordion.Body className="white-body">
            Yes! The alpha testing wrapped up by the end of 2024. Beta testing
            is set to begin in February 2025. The wait is almost over!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="faq-accordian-item">
          <Accordion.Header>
            What platforms will the game be released on?
          </Accordion.Header>
          <Accordion.Body className="white-body">
            The game will primarily launch on mobile (Android and iOS). However,
            we’re exploring future possibilities for platforms like MetaQuest,
            AR glasses, Oculus, Apple Vision, Lens Spectacle, PS VR, and more!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="faq-accordian-item">
          <Accordion.Header>
            Will there be any airdrops or events?
          </Accordion.Header>
          <Accordion.Body className="white-body">
            Absolutely! Airdrops and play-to-earn events will launch during the
            public beta tests, offering a mix of online and offline activities
            to engage the community.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
