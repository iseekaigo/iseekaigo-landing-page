import React from "react";
import { Container } from "react-bootstrap";

const features = [
  {
    title: "AI Characters and Otherworldly Servants",
    description:
      "Engage with advanced AI-powered characters that grow and adapt based on your interactions. Shape their personalities, influence their skill sets, and unlock deep, unique story arcs that evolve with every decision you make.",
    imagePosition: "left",
  },
  {
    title: "Immersive AR Worlds Explorations",
    description:
      "Step into a dynamic augmented reality worlds where everyday locations become epic quest Worlds. Solve intricate puzzles, uncover hidden relics, and transform the world around you into your playground, blending reality and fantasy like never before.",
    imagePosition: "right",
  },
  {
    title: "Dynamic Community Engagement",
    description:
      "Forge alliances, join forces for epic boss battles, and trade NFT companions within thriving community networks. Compete or collaborate in live events, share strategies, and enhance your social standing in a world where teamwork makes all the difference.",
    imagePosition: "left",
  },
  {
    title: "Servant Hunting and Gacha Mechanics",
    description:
      "Hunt for unique NFT servants scattered throughout the AR world. Players can also summon characters through a dynamic gacha system, ensuring a blend of exploration and strategy.",
    imagePosition: "right",
  },
  {
    title: "Seamless Local Business Integration",
    description:
      "Unlock real-world rewards by engaging with local businesses and points of interest within the game in AR mode. Participate in exclusive in-app events and redeem special offers, including discounts on products and food, bridging in-game success with tangible real-world benefits.",
    imagePosition: "left",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <Container>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              feature.imagePosition === "right" ? "md:flex-row-reverse" : ""
            } my-8`}
          >
            <div className="md:w-1/2">
              <img
                src="https://static.wikia.nocookie.net/princess-connect/images/1/1c/Continent_of_Astraea.jpg"
                alt={feature.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-xl md:text-2xl lg:text5xl font-bold mb-4">
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
