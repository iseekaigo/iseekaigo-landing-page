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
            The game still does not have any fixed released date. But we plan to release the 1.0 version
            around spring 2025. Stay tuned for further updates!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="faq-accordian-item">
          <Accordion.Header>Will there be a public test for the game?</Accordion.Header>
          <Accordion.Body className="white-body">
            Public tests will be available at holidays of the end year in 2024, so pretty close! There will be public alpha test first and then
            followed by public beta tests!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="faq-accordian-item">
          <Accordion.Header>What platforms will the game will be released on?</Accordion.Header>
          <Accordion.Body className="white-body">
            The platform will be mainly released on mobile (Android and iOS), However we are open to
            further possibilities in the future for other platforms like MetaQuest, AR glasses, Oculus, Apple vision, Lens Spectacle, PS VR, and more!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="faq-accordian-item">
          <Accordion.Header>Will there be any airdrops or events?</Accordion.Header>
          <Accordion.Body className="white-body">
            Airdrops and events will be mixed and there will be offline and online events at the same time the public tests are being held.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
