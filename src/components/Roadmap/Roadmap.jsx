import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Roadmap.css"; 

// Importing images from the assets folder
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";
import feature4 from "../../assets/feature4.jpg";
import feature5 from "../../assets/feature5.jpg";

const features = [
  {
    title: "AI Characters and Otherworldly Servants",
    description:
      "Engage with advanced AI-powered characters that grow and adapt based on your interactions. Shape their personalities, influence their skill sets, and unlock deep, unique story arcs that evolve with every decision you make.",
    imagePosition: "left",
    image: feature1,
  },
  {
    title: "Immersive AR Worlds Adventures and Explorations",
    description:
      "Step into a dynamic augmented reality worlds where everyday locations become epic quest Worlds. Solve intricate puzzles, uncover hidden relics, and transform the world around you into your playground, blending reality and fantasy like never before.",
    imagePosition: "right",
    image: feature2,
  },
  {
    title: "Dynamic Community Engagement",
    description:
      "Forge alliances, join forces for epic boss battles, and trade NFT companions within thriving community networks. Compete or collaborate in live events, share strategies, and enhance your social standing in a world where teamwork makes all the difference.",
    imagePosition: "left",
    image: feature3,
  },
  {
    title: "Servant Hunting and Gacha Mechanics",
    description:
      "Hunt for unique NFT servants scattered throughout the AR world. Players can also summon characters through a dynamic gacha system, ensuring a blend of exploration and strategy.",
    imagePosition: "right",
    image: feature4,
  },
  {
    title: "Seamless Local Business Integration",
    description:
      "Unlock real-world rewards by engaging with local businesses and points of interest within the game in AR mode. Participate in exclusive in-app events and redeem special offers, including discounts on products and food, bridging in-game success with tangible real-world benefits.",
    imagePosition: "left",
    image: feature5,
  },
];

export default function Roadmap() {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optionally add slide-in classes based on image position
            if (entry.target.dataset.position === "left") {
              entry.target.classList.add("slide-in-left");
            } else {
              entry.target.classList.add("slide-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup
    return () => {
      if (featureRefs.current) {
        featureRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section id="roadmap" className="py-24">
      <Container>
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (featureRefs.current[index] = el)}
            data-position={feature.imagePosition}
            className={`roadmap-feature flex flex-col md:flex-row ${
              feature.imagePosition === "right" ? "md:flex-row-reverse" : ""
            } my-8`}
          >
            <div className="md:w-1/2">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4">
                {feature.title}
              </h2>
              <h3 className="text-sm md:text-base lg:text-lg text-gray-700">
                {feature.description}
              </h3>
            </div>
          </div>
        ))}
      </Container>
      <div className="customContainer"></div>
    </section>
  );
}
