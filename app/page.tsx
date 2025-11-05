import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function Page() {
  return (
    <div className="my-2 sm:my-4 mx-4 sm:mx-12 lg:mx-20">
      <Navbar />
      <Hero />
      <div className="mt-12 flex flex-col gap-4">
        <Card
          background="#fff"
          heading="Need a Designer?"
          subheading="Discover talented designers, explore unique styles, and turn your ideas into reality"
          img="/designers-group-1.png"
          onClick={() => {}}
          buttonText="Find Now"
          direction="left"
          buttonColor="#6F4E37"
        />
        <Card
          background="#EBEBE9"
          heading="Signup as Designer"
          subheading="Showcase your portfolio, connect with clients, and bring your creative vision to life"
          img="/image.png"
          onClick={() => {}}
          buttonText="Join Now"
          direction="right"
          buttonColor="black"
        />
      </div>
    </div>
  );
}
