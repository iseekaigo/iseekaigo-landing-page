import React from "react";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#061829] text-white">
      <Container>
        <div className="content">
          <h4 className="text-base w-4/5 lg:px-16 text-white">FAQ A.K.A. the guidance for those in need</h4>
          <div className="top-text w-4/5 lg:px-16 my-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <h2 className="text-sm md:text-base lg:text-lg text-white opacity-50">
              Can't find what you are looking for? reach us on email iseekaigocontact@gmail.com!
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian theme="dark" />
      </div>
    </section>
  );
}
