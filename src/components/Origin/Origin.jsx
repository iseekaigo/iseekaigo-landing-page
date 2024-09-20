import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Origin() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Set mobile threshold
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoSrc = isMobile
    ? "https://www.youtube.com/embed/Qd6NAgU2fAI?autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=1&mute=1"
    : "https://www.youtube.com/embed/McKlm_o2qlA?autoplay=1&loop=1&playlist=McKlm_o2qlA&controls=0&showinfo=0&modestbranding=1&mute=1";

  return (
    <section className="bg-[#061829] text-white py-32 px-4 min-h-screen flex items-center"> 
      <Container>
        <div className="flex flex-col items-center">
          <div className="text text-center w-full mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-[70px] py-4">Explore, Engage, Evolve!</h1>
          </div>
          <div className="w-full flex justify-center relative" style={{ paddingTop: isMobile ? '177.78%' : '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoSrc}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
