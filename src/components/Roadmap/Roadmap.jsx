import React from "react";
import { Container } from "react-bootstrap";

const features = [
  {
    title: "AI-Powered Servants",
    description:
      "Interact with uniquely designed AI-driven characters that evolve through meaningful conversations. Build relationships that influence their abilities and unlock unique storylines.",
    imagePosition: "left",
  },
  {
    title: "Explore The AR-World",
    description:
      "Embark on adventures in a richly detailed AR world where real-life landmarks transform into quest locations. Engage with your surroundings as you solve puzzles and discover hidden treasures.",
    imagePosition: "right",
  },
  {
    title: "Community Engagement",
    description:
      "Build or join communities to collaborate on boss raids, share tips, and trade NFT servants. Participate in community events that enhance social interaction and teamwork.",
    imagePosition: "left",
  },
  {
    title: "Servant Hunting and Gacha System",
    description:
      "Hunt for unique NFT servants scattered throughout the AR world. Players can also summon characters through a dynamic gacha system, ensuring a blend of exploration and strategy.",
    imagePosition: "right",
  },
  {
    title: "Local Business Partnerships",
    description:
      "Discover and engage with local businesses and points of interest through the app. Players can participate in special events and receive promotions, including discounts on products, merchandise, and food, bridging the gap between the game and real life.",
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
