import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import CTA from "./components/CTA";

export default function Page() {
  return (
    <div className="my-2 sm:my-4 mx-4 sm:mx-12 lg:mx-20">
      <Navbar />
      <Hero />
      <CTA />
    </div>
  );
}
